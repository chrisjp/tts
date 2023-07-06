<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * StreamElements
 * 
 * Supports most (but not all) Polly voices that use the 'standard' engine.
 * Voices that only exist in their 'neural' engine will not work.
 * In addition to Polly, StreamElements also makes use of many Google Cloud Text-to-Speech
 * voices, include their neural "WaveNet" ones.
 * Finally, there is a third section of voices whose IDs are merely a name. These are perhaps
 * custom voices created using Google's premium tier Text-to-Speech platform.
 * 
 * The full list of Polly voices can be found here: https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
 * The full list of Google voices can be found here: https://cloud.google.com/text-to-speech/docs/voices
 */
class StreamElements implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://api.streamelements.com/kappa/v2/speech?';

    const demoSite = '';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'StreamElements';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'StreamElements';

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
        // StreamElements has the simplest of requests...
        // It just needs voice and text paramaters appending to a GET request
        // There is no server side validation, verification, authorisation, cookies, or headers to worry about
        $params = [
            'voice' => $voice,
            'text'  => $text,
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
        // StreamElements will return MP3 audio on success, or JSON on failure with an appropriate HTTP code
        $success = false;
        $audioUrl = null;
        $errorMessage = null;
 
        if ($curlInfo['http_code'] === 200 && $curlInfo['content_type'] === 'audio/mp3') {
            $success = true;

            // $response is raw MP3 audio data, so we can provide a data URI for it
            $audioUrl ='data:audio/mp3;base64,' . base64_encode($response);
        }
        else {
            $errorResponse = json_decode($response);
            $errorMessage = 'HTTP Error ' . $errorResponse->statusCode . ' ' . $errorResponse->error . '; ' . $errorResponse->message;
        }

        // No point returning the MP3 data twice so pass null instead of $response as the final param
        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, null);

        return $returnData;
    }
}
