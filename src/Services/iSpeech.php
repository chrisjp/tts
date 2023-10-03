<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * iSpeech
 * 
 * The demo website has non been functional since 2022 but the API is still operational.
 * This uses their REST API and requires a valid API key. A demo key can also be used for free
 * however it is limited to 100 words.
 * 
 * DOCS: http://www.ispeech.org/api/#text-to-speech
 * 
 */
class iSpeech implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://api.ispeech.org/api/rest';

    const demoSite = 'https://www.ispeech.org/';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'iSpeech';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'iSpeech';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'usenglishfemale';

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
            'Content-Type: application/x-www-form-urlencoded',
        ];

        // TODO: Implement support for speed and pitch
        // NOTE: Some parameters, if changed, may result in errors depending on the limits of the API key being used.
        $params = [
            'apikey'        => API_KEY_ISPEECH,
            'voice'         => $voice,
            'text'          => $text,
            'action'        => 'convert',
            'format'        => 'mp3',       // aiff, mp3 (default), ogg, wma, flac, wav, alaw, ulaw, vox, mp4
            'frequency'     => 16000,       // 8000, 11025, 16000 (default), 22050, 24000, 32000, 44100, 48000 (Hertz)
            'bitrate'       => 48,          // (for mp3 format only) 16, 24, 32, 48 (default), 56, 64, 80, 96, 112, 128, 144, 160, 192, 224, 256, 320 (Kbps)
            'speed'         => 0,           // value between -10 (slowest) and 10 (fastest), default is 0
            'pitch'         => 100,         // 0 to 200. 0 is lowest, 100 is default, 200 is highest. Pitch is enabled only on some voices.
          //'bitdepth'      => 16,          // 8, 16 (default) (for AIFF, FLAC and WAVE only)
          //'startpadding'  => 0,           // seconds of silence to add to start of file
          //'endpadding'    => 0,           // seconds of silence to add to end of file
            'output'        => 'json',      // rest (default), xml, json - this class is written to handle JSON responses
        ];

        $request = new Request($this::baseURL);
        $request->sendRequest($params, true, $headers);

        $response = $request->getResponse();
        $curlInfo = $request->getInfo();

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

        // iSpeech will return raw audio data on success, or JSON on error. In both cases a 200 HTTP code will be returned.
        if ($curlInfo['http_code'] === 200 && $curlInfo['content_type'] === 'audio/mpeg') {
            $success = true;

            // $response is raw MP3 audio data, so we can provide a data URI for it
            $audioUrl ='data:audio/mpeg;base64,' . base64_encode($response);
        }
        else {
            $responseObj = json_decode($response);
            if (property_exists($responseObj, 'message') && property_exists($responseObj, 'code')) {
                $errorMessage = "Code " . $responseObj->code . ": " . $responseObj->message;
            }
            else {
                $errorMessage = 'HTTP Error ' . $curlInfo['http_code'] . '; Attempted URL: ' . $curlInfo['url'];
            }
        }

        // No point returning the MP3 data twice so pass null instead of $response as the final param
        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, null);

        return $returnData;
    }
}
