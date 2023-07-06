<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * Google Translate
 * 
 * Uses the same endpoint as translate.google.com when you click on the speaker icon under the textarea
 * 
 * While Google has a full list of languages that can be translated on their website, they don't list
 * which of those support TTS functionality. It is a case of having to type in a string and click on each
 * individual language and see if the speaker icon appears.
 * https://cloud.google.com/translate/docs/languages
 */
class GoogleTranslate implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://translate.google.com/translate_tts?';

    const demoSite = 'https://translate.google.com/';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'Google Translate';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'GTranslate';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'en-gb';

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
        // TODO: Support `ttsspeed` parameter in the UI
        $params = [
            'client'   => 'tw-ob',
            'textlen'  => strlen($text),
            'q'        => $text,
            'tl'       => $voice,
            'ttsspeed' => 1,
        ];

        $request = new Request($this::baseURL);
        $request->sendRequest($params, false);

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
