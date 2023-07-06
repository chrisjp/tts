<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * Oddcast
 * 
 * Uses their API with the auth values that aren't very well hidden on their demo website.
 * 
 * Unfortunately, their voice IDs are not unique as each one belongs to an 'engine' and a 'language'
 * Therefore, to make them unique we simply concatenate the three IDs together, hyphen-separated.
 */
class Oddcast implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://cache-a.oddcast.com/tts/gen.php?';

    const demoSite = 'https://www.oddcast.com/ttsdemo/';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'Oddcast';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'Oddcast';

    /**
     * The default voice that will be used if one is not set.
     * Oddcast voices have a voiceID, engineID, and languageID
     * We separate these with a hyphen.
     *
     * @var string
     */
    private string $defaultVoice = '3-3-1';

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
        
        // Extract voice, engine and language IDs from $voice
        $voiceParts = explode('-', $voice);
        list($voiceId, $engineId, $languageId) = count($voiceParts) === 3 ? $voiceParts : null;

        // Oddcast generates TTS audio with a PHP script that takes a lot of query string parameters
        // Some of these are hardcoded with values taken from their demo website
        // The final value is a checksum - an MD5 hash of a concatenated string of all the preceding variables
        $accountID = 5883747;
        $secretID = 'uetivb9tb8108wfj';
        $is_utf8 = 1;
        $ext = 'mp3';

        $params = [
            'EID'   => $engineId,
            'LID'   => $languageId,
            'VID'   => $voiceId,
            'TXT'   => $text,
            'IS_UTF8' => $is_utf8,
            'EXT'     => $ext,
            'FNAME'   => '',
            'ACC'     => $accountID,
            'API'     => '',
            'SESSION' => '',
            'CS'      => md5($engineId . $languageId . $voiceId . $text . $is_utf8 . $ext . $accountID . $secretID),
        ];

        $request = new Request($this::baseURL);
        $request->sendRequest($params, false, null, false, true);

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

        // Only need to check for 200 code which means the URL worked and the audio was generated
        if ($curlInfo['http_code'] === 200) {
            $success = true;
            $audioUrl = $curlInfo['url'];
        }
        else {
            $errorMessage = 'HTTP Error ' . $curlInfo['http_code'];
        }

        // Don't pass $response to buildReturnObject as it'll be the full MP3 data
        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, null);

        return $returnData;
    }
}
