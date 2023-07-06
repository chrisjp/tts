<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * Bing Translator
 * 
 * Technically, this is using Speech, part of Microsoft's Azure Cognitive Services
 * https://learn.microsoft.com/en-us/azure/cognitive-services/Speech-Service/
 * 
 * The Azure service is a paid API (with some free limits) but we are going through the same endpoint
 * that Bing Translator uses, hence the name of the class.
 * 
 * This first step involves making a normal GET request to the translator page and retrieving several variables,
 * including somewhat ironically, AbusePreventionHelper params.
 * With these acquired, we can then make a request to the TTS endpoint ('/tfettts') and receive mp3 audio.
 * 
 * A full list of voices/languages supported can be found here:
 *     https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=tts
 * And the voice gallery is also a great resource:
 *     https://speech.microsoft.com/portal/voicegallery
 * But in testing, there were well over 100 voices that don't work via Bing Translator, with a 500 error
 * being produced. Possibly this is due to using an older version of the API, or Microsoft deciding they
 * are not suitable for their translation service for whatever reason.
 */
class BingTranslator implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://bing.com/tfettts?isVertical=1&';

    const demoSite = 'https://www.bing.com/translator';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'Bing Translator';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'Bing';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'en-US-JennyNeural';

    /**
     * Returns the full name of this service.
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Returns the short name of this service.
     *
     * @return string
     */
    public function getShortName(): string
    {
        return $this->shortName;
    }

    /**
     * Returns the default voice ID to be used with this service.
     *
     * @return string
     */
    public function getDefaultVoice(): string
    {
        return $this->defaultVoice;
    }

    /**
     * Constructs the data required to be sent to the API and calls sendRequest()
     * Returns an object containing the audio URL and various other data.
     *
     * @param string $voice
     * @param string $text
     * @return object
     */
    public function requestTTS(string $voice, string $text): object
    {
        $headers = [
            'Origin: https://bing.com',
            'Referer: https://www.bing.com/translator',
            'User-Agent: ' . $_SERVER['HTTP_USER_AGENT'],
        ];

        // Step 1 - Make a simple GET request to the Bing Translator site
        $requestStep1 = new Request('https://www.bing.com/translator');
        $requestStep1->sendRequest('', false, $headers, true);
        $responseStep1 = $requestStep1->getResponse();

        // Several variables need to be retrieved from the response
        // IID - from a <div> data tag
        // IG - from CDATA
        // AbusePreventionHelper params - from CDATA - which includes a key (timestamp) and importantly, a token,
        //                                both of which need to be sent with requests to the TTS endpoint

        // Example data to match against: <div id="rich_tta" data-iid="translator.5024")">
        preg_match('/data-iid="([^"]+)"/', $responseStep1, $IID);
        // Example data to match against: ,IG:"B236B2F69BA742FDADA7DF65D828AAD1",
        preg_match('/IG:"([^"]+)"/', $responseStep1, $IG);
        // Example data to match against: var params_AbusePreventionHelper = [1688416114551,"OT4Mne4ZnEkMw6wFW3bMUX5l5MyAM6oA",3600000];
        preg_match('/params_AbusePreventionHelper\s?=\s?([^\]]+\])/', $responseStep1, $paramsAPH);
         
        // Step 2 - Send a request to the TTS endpoint
        // The payload for this should be SSML-formatted text to be synthesized alongside the key and token we extracted from the translator page.
        
        // This regex matches all the possible locale patterns a voice ID can have. Typically, locales will be in the format 'en-US', i.e. language code and country code
        // However some have a 3-letter language identifier (such as Filipino), while others have an additional third identifier (such as zh-CN-liaoning)
        // The second group will contain the full valid BCP-47 locale code
        preg_match('/((([a-z]{2,3})-([A-Z]{2})(-([a-z]+))?)-([A-Za-z]+))/', $voice, $voiceMatches);
        $bcp47locale = $voiceMatches[2];    // A valid BCP-47 language code
        //$prosodyRate = '-10.00%';           // Controls the speaking rate. Bing Translator has this set to -20% which makes sense as users need to hear translations clearly,
                                            // but this can sound a little too slow for standard speech so we should leave it as default (0%)
                                            // TODO: have the rate and other settings controllable in the web UI
                                            // https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup-voice#adjust-prosody
        //$prosody = '<prosody rate="' . $prosodyRate . '">' . $text . '</prosody>';

        // Handle special characters
        // https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup-structure#special-characters
        $specialChars = ['&', '<', '>'];
        $nonSpecials = ['&amp;', '&lt;', '&gt;'];
        $text = str_replace($specialChars, $nonSpecials, $text);
     
        // SSML formatted text to be spoken
        $ssml = '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="' . $bcp47locale . '"><voice xml:lang="' . $bcp47locale . '" name="' . $voice . '">' . $text . '</voice></speak>';

        // token and key need to be included with the ssml as POST data
        $paramsAPH = json_decode($paramsAPH[1]);
        $params = [
            'ssml'  => $ssml,
            'token' => $paramsAPH[1],
            'key'   => $paramsAPH[0],
        ];

        // IG and IID need to be appeneded to the baseURL
        $bingData = [
            'IG' => $IG[1],
            'IID' => $IID[1],
        ];

        // Now can send the real request
        $requestStep2 = new Request($this::baseURL . http_build_query($bingData));
        $requestStep2->sendRequest($params, true, $headers);

        $response = $requestStep2->getResponse();
        $curlInfo = $requestStep2->getInfo();
        if (!empty($curlInfo['redirect_url'])) {
            // Sometimes (always?) Bing redirects to another URL (with a few more paramaters added to the query string)
            // This is fine, we just need to repeat the same request (same headers and POST data) to that URL
            $requestStep3 = new Request($curlInfo['redirect_url']);
            $requestStep3->sendRequest($params, true, $headers);

            $response = $requestStep3->getResponse();
            $curlInfo = $requestStep3->getInfo();
        }

        return $this->handleResponse($response, $voice, $text, $curlInfo);
    }

    /**
     * Handles the response we got from the cURL request made in sendRequest()
     * Creates and returns an object containing the audio URL and any other data we require.
     *
     * @param $response
     * @param string $voice
     * @param string $text
     * @param array $info
     * @return object
     */
    private function handleResponse($response, string $voice, string $text, array $curlInfo = []): object
    {
        $success = false;
        $audioUrl = null;
        $errorMessage = null;
 
        if ($curlInfo['http_code'] === 200 && $curlInfo['content_type'] === 'audio/mpeg') {
            $success = true;

            // $response is raw MP3 audio data, so we can provide a data URI for it
            $audioUrl ='data:audio/mp3;base64,' . base64_encode($response);
        }
        else {
            $errorMessage = 'HTTP Error ' . $curlInfo['http_code'] . '; Attempted URL: ' . $curlInfo['url'];
        }

        // No point returning the MP3 data twice so pass null instead of $response as the final param
        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, null);

        return $returnData;
    }
}
