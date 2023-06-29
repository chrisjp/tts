<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

class IBMWatson implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://www.ibm.com/demos/live/tts-demo/api/tts/newSynthesizer?';

    const demoSite = 'https://www.ibm.com/demos/live/tts-demo/self-service/home';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'IBM Watson';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'IBMWatson';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'en-GB_CharlotteV3Voice';


    public function __construct()
    {
        // Nothing to do here
    }

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
        // Requesting TTS audio from IBM Watson is much more complex than most services
        // It's now a 3-step process.
        // 1. Initialise a session and save the resulting cookies
        // 2. Send a request with text to be spoken and session ID to be stored in
        // 3. GET the final URL with UUID and voice ID as parameters (previous cookie data also needs to be sent in the headers, otherwise it'll return a 500 error page)

        // Step 1 - initialise a session
        $headersStep1 = [
            'Origin: https://www.ibm.com',
            'Referer: https://www.ibm.com/demos/live/tts-demo/self-service/home',
            'Accept: application/json, text/plain, */*',
        ];
        
        $requestStep1 = new Request('https://www.ibm.com/demos/live/tts-demo/api/tts/session');
        $requestStep1->sendRequest('', true, $headersStep1, true);
        $responseStep1 = $requestStep1->getResponse();
        
        // Extract all the cookies it tried to set
        preg_match_all('/^Set-Cookie:\s*([^;]*)/mi', $responseStep1, $matches);
        $cookies = [];
        foreach($matches[1] as $cookie) {
            $cookies[] = 'Cookie: ' . $cookie;  // in the format required by headers
        }
        
        // Step 2 - Send a request to the store endpoint
        // The payload for this should be JSON containing SSML-formatted text to be synthesized and a sessionID to store it in
        // The session ID can be faked - it just needs to be a string in the format of a UUID, so we'll generate one now
        $UUID = vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex(random_bytes(16)), 4));
        $jsonPayload = '{"ssmlText": "<prosody pitch=\"0%\" rate=\"-0%\">' . $text . '</prosody>","sessionID": "' . $UUID . '"}';

        // Add our cookies from step 1 to the headers
        $headersStep2 = array_merge($headersStep1, $cookies);
        // Also add a header specifiying the correct Content-Type
        $headersStep2[] = 'Content-Type: application/json; charset=utf-8';
        
        $requestStep2 = new Request('https://www.ibm.com/demos/live/tts-demo/api/tts/store');
        $requestStep2->sendRequest($jsonPayload, true, $headersStep2);
        
        // Step 3 - Finally, we can make a GET request to the newSynthesizer endpoint with the voice ID and UUID as parameters     
        $params = [
            'voice' => $voice,
            'id'    => $UUID,
        ];

        $requestStep3 = new Request($this::baseURL);
        $requestStep3->sendRequest($params, false, $headersStep2);

        $response = $requestStep3->getResponse();
        $curlInfo = $requestStep3->getInfo();

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
    
        if ($curlInfo['http_code'] === 200 && $curlInfo['content_type'] === 'audio/mp3') {
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