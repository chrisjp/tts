<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * TikTok
 * 
 * The API is not publicly documented. https://github.com/oscie57/tiktok-voice/wiki has been a huge help
 * especially for headers, cookies and voice codes.
 * 
 * ## Duplicated voices
 * 
 * Some voices have multiple IDs associate with them. Duplicates are removed from the JSON but mentioned here for completeness.
 * en_us_002 -> en_us_001
 * br_001 -> br_004
 * id_female_noor -> id_001
 * 
 */
class TikTok implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://api22-normal-c-useast1a.tiktokv.com/media/api/text/speech/invoke/';

    const demoSite = '';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'TikTok';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'TikTok';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'en_uk_001';

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
            'speaker_map_type' => '0',
            'aid' => '1233',
            'text_speaker' => $voice,
            'req_text' => $text,
        ];

        // TikTok requires two headers to be sent with the request.
        // The first is a User-Agent mimicking one sent by their mobile app
        // The second is a cookie containing a valid session ID which can only be retrieved by logging in to the website
        // This is stored in config.php and it will need to be updated every so often
        $headers = [
            'User-Agent: com.zhiliaoapp.musically/2022600030 (Linux; U; Android 7.1.2; es_ES; SM-G988N; Build/NRD90M;tt-ok/3.12.13.1)',
            'Cookie: sessionid=' . TIKTOK_SID,
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
        
        $responseObj = json_decode($response);

        if ($responseObj->status_code === 0) {
            $success = true;
            $audioData = $responseObj->data->v_str;     // base64 encoded MP3 data
            $audioUrl ='data:audio/mp3;base64,' . $audioData;

            // Overwrite the base64 data because it can be rather large and we'd essentially be returning it twice
            $responseObj->data->v_str = '[redacted to reduce size]';
            $response = json_encode($responseObj);
        }
        else {
            $errorMessage = $responseObj->status_msg;
        }

        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, $response);

        return $returnData;
    }
}
