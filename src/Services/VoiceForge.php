<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * VoiceForge
 * 
 * An app exclusively available on iOS
 * Uses very simple GET requests to return audio in WAV format
 */
class VoiceForge implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://api.voiceforge.com/swift_engine?';

    const demoSite = '';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'VoiceForge';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'VoiceForge';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'Conrad';

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
        $params = [
            'voice'     => $voice,
            'msg'       => $text,
            'email'     => 'null',    // email param is required but doesn't have to be valid.
        ];

        // HTTP_X_API_KEY header is required
        // hardcoding this value for now as unsure how to reliably obtain
        // borrowed from https://github.com/Wrapper-Offline/Wrapper-Offline
        $headers = [
            'HTTP_X_API_KEY: 8b3f76a8539',
        ];

        $request = new Request($this::baseURL);
        $request->sendRequest($params, false, $headers);

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
        
        if ($curlInfo['http_code'] === 200 && $curlInfo['content_type'] === 'audio/wav') {
            // TODO: Convert to MP3
            $success = true;

            // $response is raw WAV audio data, so we can provide a data URI for it
            $audioUrl ='data:audio/wav;base64,' . base64_encode($response);
        }
        else {
            $errorMessage = 'HTTP Error ' . $curlInfo['http_code'] . '; Attempted URL: ' . $curlInfo['url'];
        }

        // No point returning the MP3 data twice so pass null instead of $response as the final param
        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, null);

        return $returnData;
    }
}
