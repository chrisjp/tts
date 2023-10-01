<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;
use DateTime;

/**
 * Cepstral
 * 
 * Uses their live demo website.
 * A valid PHP Session ID must be obtained prior to requesting audio.
 * 
 * There does not appear to be a practical character/byte limit in place,
 * but any text over ~5000 bytes will likely take over a minute to generate.
 * With this in mind, 5000 has been set as the limit in the <textarea>
 * 
 */
class Cepstral implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://www.cepstral.com/demos/createAudio.php?';

    const demoSite = 'https://www.cepstral.com/en/demos';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'Cepstral';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'Cepstral';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'Allison';

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
        // TODO: Support pitch, rate and SFX
        $date = new DateTime();
        $params = [
            'voiceText'     => $text,
            'voice'         => $voice,
            'createTime'    => $date->format('Uv'), // appears to accept any integer
            'rate'          => 170,                 // default is 170
            'pitch'         => 1,
            'sfx'           => 'none',
        ];

        // First we need to send a basic GET request to their demo website
        // to obtain a PHP Session ID

        // Step 1 - initialise a session
        $requestStep1 = new Request($this::demoSite);
        $requestStep1->sendRequest('', false, null, true);
        $responseStep1 = $requestStep1->getResponse();
        
        // Extract all the cookies it tried to set
        preg_match_all('/^Set-Cookie:\s*([^;]*)/mi', $responseStep1, $matches);
        $cookies = [];
        foreach($matches[1] as $cookie) {
            $cookies[] = 'Cookie: ' . $cookie;  // in the format required by headers
        }

        $headers = [
            'Origin: https://www.cepstral.com',
            'Referer: ' . $this::demoSite,
            'User-Agent: ' . $_SERVER['HTTP_USER_AGENT'],
        ];

        $requestStep2 = new Request($this::baseURL . http_build_query($params), 60);
        $requestStep2->sendRequest('', false, array_merge($headers, $cookies));

        $response = $requestStep2->getResponse();
        $curlInfo = $requestStep2->getInfo();

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
        
        $responseObj = json_decode($response);

        if (!property_exists($responseObj, 'error')) {
            $success = true;
            $audioUrl = property_exists($responseObj, 'mp3_loc') ? 'https://www.cepstral.com' . $responseObj->mp3_loc : null;
        }
        else {
            $errorMessage = $responseObj->error . ': ' . $responseObj->error_message;
        }

        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, $response);

        return $returnData;
    }
}