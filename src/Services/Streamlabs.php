<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * Amazon Polly voices via Streamlabs' API
 * 
 * Streamlabs only supports Polly voices that use the 'standard' engine.
 * This means voices that only exist in their 'neural' engine will not work.
 * If you do try to use them, a valid audio URL will be generated, however instead of returning
 * MP3 audio it will return a JSON string with an error.
 * 
 * The full list of voices can be found here: https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
 */
class Streamlabs implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://streamlabs.com/polly/speak';

    const demoSite = '';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'Streamlabs';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'Streamlabs';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'Brian';

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
        // The request to Streamlabs for Polly TTS is very simple
        // We only need to send the voice name and the text to speak
        // There is no server side validation, verification, authorisation, cookies, or headers to worry about
        $params = [
            'voice' => $voice,
            'text'  => $text,
        ];

        // As of January 2024 the request will timeout if no Referer header is passed
        $headers = [
            'Referer: https://streamlabs.com',
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
        // Streamlabs returns a different JSON structure depending on success or failure
        // We'll have to check which properties are present
        $responseObj = json_decode($response);
        $success = property_exists($responseObj, 'success') ? $responseObj->success : false;
        $audioUrl = property_exists($responseObj, 'speak_url') ? $responseObj->speak_url : null;
        $errorMessage = property_exists($responseObj, 'error') ? $responseObj->error : null;

        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, $response);

        return $returnData;
    }
}
