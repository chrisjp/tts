<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * Acapela
 * 
 * Doesn't use their actual API. Simulates a request coming from the demo page on their website.
 */
class Acapela implements Service 
{

    use ReturnObjectTrait;

    const baseURL = 'https://h-ir-ssd-1.acapela-group.com/webservices/1-60-00/UrlMaker.json';

    const demoSite = 'https://www.acapela-group.com/demos/';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'Acapela';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'Acapela';

    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'sharon22k';

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
        // Before we can request Acapela TTS we need to acquire valid session variables.
        // For some reason, Acapela outputs all the required data as a JavaScript variable
        // here: https://www.acapela-group.com/www/static/website/demoOptionsDef_voicedemo.php
        // Trivially, we can simply fetch the contents and extract the JSON from the variable.
        // NOTE: accessing that URL in your browser will result in seeing a different json_service_url
        //       where few of the voices will work.

        // Headers to pretend we're making a request from the demo website
        $headers = [
            'Content-Type: application/x-www-form-urlencoded;charset=UTF-8',
            'User-Agent: ' . $_SERVER['HTTP_USER_AGENT'],
            'Referer: https://www.acapela-group.com/demos/',
            'Origin: https://www.acapela-group.com/demos/',                             
        ];

        $requestStep1 = new Request('https://www.acapela-group.com/www/static/website/demoOptionsDef_voicedemo.php');
        $requestStep1->sendRequest('', false, $headers);
        $responseStep1 = $requestStep1->getResponse();
        
        // Remove the JavaScript 'var' and terminating semi-colon so we're left with a valid JSON string
        $vaasJSON = str_replace(['var vaasOptions = ', '};'], ['', '}'], $responseStep1);
        $vaasOptions = json_decode($vaasJSON);

        $params = [
            'cl_login'      => $vaasOptions->login,
            'cl_app'        => $vaasOptions->app,
            'session_start' => $vaasOptions->session->start,
            'session_time'  => $vaasOptions->session->time,
            'session_key'   => $vaasOptions->session->key,
            'req_voice'     => $voice,
            'req_text'      => $text,
        ];

        // TODO: may want to use $vaasOptions->json_service_url rather than our hardcoded baseURL constant in case they ever change it?
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

        // Response should be JSON
        $responseObj = json_decode($response);

        if ($responseObj->res === 'NOK') {
            $errorMessage = $responseObj->err_code . ': ' . urldecode($responseObj->err_msg);
            $errorMessage .= '; URL attempted: ' . $curlInfo['url'];
        }
        else if ($responseObj->res === 'OK') {
            $success = true;
            $audioUrl = $responseObj->snd_url;
        }

        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, $response);

        return $returnData;
    }
}
