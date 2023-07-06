<?php

namespace ChrisJP\TTS\Services;

use ChrisJP\TTS\Services\Service;
use ChrisJP\TTS\Request;
use ChrisJP\TTS\ReturnObjectTrait;

/**
 * CereProc
 * 
 * One of few services whose live demo allows you to change format and sample rate.
 * Doesn't use their actual paid API, instead makes a request to their live demo PHP script
 * mimicking coming from their live demo page.
 */
class CereProc implements Service
{
    use ReturnObjectTrait;

    const baseURL = 'https://www.cereproc.com/themes/benchpress/livedemo.php';

    const demoSite = 'https://www.cereproc.com/support/live_demo';

    /**
     * Full name of this service.
     *
     * @var string
     */
    private string $name = 'CereProc';

    /**
     * Short name of this service.
     * Will be used in audio filenames so keep it short and no weird characters/spaces etc.
     *
     * @var string
     */
    private string $shortName = 'CereProc';
    
    /**
     * The default voice that will be used if one is not set.
     *
     * @var string
     */
    private string $defaultVoice = 'Heather-CereWave';

    /**
     * Format to output the audio in. Valid values: mp3, ogg, wav
     *
     * @var string
     */
    private string $audioFormat = 'mp3';

    /**
     * Sample rate (hz) to output the audio at. Valid values: 8000, 11025, 16000, 22050, 32000, 44100, 48000
     *
     * @var integer
     */
    private int $sampleRate = 48000;

    public function __construct(string $audioFormat = 'mp3', int $sampleRate = 48000)
    {
        $this->setAudioFormat($audioFormat);
        $this->setSampleRate($sampleRate);
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
     * Sets the format for the audio ouput
     *
     * @param string $audioFormat
     * @return void
     */
    public function setAudioFormat(string $audioFormat)
    {
        if (!in_array($audioFormat, ['mp3', 'ogg', 'wav'])) $audioFormat = 'mp3';
        
        $this->audioFormat = $audioFormat; 
    }

    /**
     * Sets the sample rate in hz of the audio output
     *
     * @param integer $sampleRate
     * @return void
     */
    public function setSampleRate(int $sampleRate)
    {
        if (!in_array($sampleRate, [8000, 11025, 16000, 22050, 32000, 44100, 48000])) $sampleRate = 48000;
        
        $this->sampleRate = $sampleRate; 
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
        // CereProc name their files very similarly to this library, so we can know the resulting URL of the audio
        // before it's even generated. Unclear what the '1' refers to but likely to be account ID - 1 being their own demo.
        // $cereprocFileUrl = 'https://cerevoice.s3.amazonaws.com/' . $voice . $this->sampleRate . '1' . md5($text) . '.' . $this->audioFormat;
        
        // Craft a request that makes it look as if it's come from CereProc's Drupal website
        // First, a cookieKey is required. Seems like it can be any string, as long as the value sent in the headers matches the one sent with the payload
        // Their JavaScript creates one using the following code: Math.random().toString(36).substr(2)
        // Create a similar string...
        mt_srand(date('Ymd'));
        $cookieKey = base_convert(mt_rand(), 10, 16);

        // XML to send as the payload
        $payload = '<speakExtended key="' . $cookieKey . '"><voice>' . $voice . '</voice><text>' . $text . '</text><audioFormat>' . $this->audioFormat . '</audioFormat></speakExtended>';

        // Mimic headers sent by their demo website
        $headers = [
            'content-type: text/plain;charset=UTF-8',
            'user-agent: ' . $_SERVER['HTTP_USER_AGENT'],
            'cookie: Drupal.visitor.liveDemo=' . $cookieKey,
            'referer: ' . $this::demoSite,
            'origin: https://www.cereproc.com',
        ];

        $request = new Request($this::baseURL);
        $request->sendRequest($payload, true, $headers);

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
        // Initialise some variables
        $success = false;
        $audioUrl = '';
        $errorMessage = null;

        // $response will be in XML format, but since we can't access the name of the root element
        // (which is either <url> or <error>) from a SimpleXMLElement object, we have to manually check
        // for it with strpos()
        $xml = simplexml_load_string($response);

        if (array_key_exists('http_code', $curlInfo) && $curlInfo['http_code'] === 200) {
            if (strpos($response, '<url>') > 0) {
                $success = true;
                $audioUrl = (string)$xml;
            }
            else {
                $errorMessage = (string)$xml;
            }
        } else {
            $errorMessage = 'HTTP Error ' . $curlInfo['http_code'];
        }

        $returnData = $this->buildReturnObject($success, $audioUrl, null, $curlInfo, $errorMessage, $response);

        return $returnData;
    }
}
