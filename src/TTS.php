<?php

namespace ChrisJP\TTS;

use ChrisJP\TTS\Services\Service;

class TTS
{
    use ReturnObjectTrait;

    const version = '1.0.0';

    /**
     * TTS Service to use
     *
     * @var Service|null
     */
    private $service;

    /**
     * ID of voice to use
     *
     * @var string 
     */
    private $voice;

    /**
     * Human-friendly name of the voice ID
     *
     * @var string 
     */
    private $voiceName;

    /**
     * The text that should be spoken
     *
     * @var string
     */
    private $textToSpeak = '';

    /**
     * Index of this TTS within a playlist
     *
     * @var integer
     */
    private $playlistIndex = 0;

    /**
     * response to request for TTS audio
     *
     * @var object
     */
    private $response;

    /**
     * JSON encoded response to request for TTS audio
     *
     * @var string
     */
    private $responseJSON = '';

    /**
     * The last error message received.
     *
     * @var string
     */
    private $lastErrorMessage = '';

    /**
     * Full path to AUDIO_DIR
     *
     * @var string
     */
    private $pathToAudioDir = '';

    public function __construct($service = null, $voice = null)
    {
        // Load configuration constants
        $configFile = dirname(__DIR__, 1) . '/config.php';
        if (!file_exists($configFile)) {
            // Attempt to create it from distributed version holding the defaults
            $cp = @copy($configFile . '.dist', $configFile);
            if (!$cp) {
                $this->lastErrorMessage = 'Config file not found.';
                $this->exitWithErrorJSON($this->lastErrorMessage);
            }
        }
        require_once $configFile;

        if ($service !== null) {
            $this->setService($service);
        } else {
            $this->setService('Polly');
        }

        if ($voice !== null) {
            $this->setVoice($voice);
        } else {
            $this->setVoice($this->service->getDefaultVoice());
        }

        $this->setPathToAudioDir(DOCROOT . AUDIO_DIR);
    }

    /**
     * Set service to be used
     *
     * @param object|string $service
     * @return $this
     */
    public function setService(object|string $service, array $classParams = [])
    {
        if (is_string($service)) {
            $service = str_replace(' ', '', $service);
            $serviceClass = __NAMESPACE__ . '\Services\\' . $service;
            try {
                if (!empty($classParams)) {
                    // No simple way to instantiate a class with an array of parameters so use ReflectionClass instead
                    $reflection_class = new \ReflectionClass($serviceClass);  
                    $service = $reflection_class->newInstanceArgs($classParams);
                }
                else {
                    // We can instantiate the class normally if no paramaters need passing to it.
                    $service = new $serviceClass();
                }
            }
            catch (\Throwable $e)
            {
                $this->lastErrorMessage = 'The service ' . $service . ' was not found. Please select a valid service. ' . $e->getMessage();
                $this->exitWithErrorJSON($this->lastErrorMessage);
            }
        }

        if (!($service instanceof Service)) {
            $this->lastErrorMessage = 'The object given is not an instance of the Service class.';
            $this->exitWithErrorJSON($this->lastErrorMessage);
        }

        $this->service = $service;
        return $this;
    }

    /**
     * Get service to be used
     *
     * @return Service
     */
    public function getService(): Service
    {
        return $this->service;
    }

    /**
     * Set voice ID to be used
     *
     * @param string $voice
     * @return $this
     */
    public function setVoice(string $voice)
    {
        $this->voice = $voice;
        return $this;
    }

    /**
     * Get voice ID to be used
     *
     * @return string
     */
    public function getVoice(): string
    {
        return $this->voice;
    }

    /**
     * Set human-friendly name of voice ID
     *
     * @param string $voiceName
     * @return $this
     */
    public function setVoiceName(string $voiceName)
    {
        $this->voiceName = $voiceName;
        return $this;
    }

    /**
     * Get human-friendly name of voice ID
     *
     * @return string
     */
    public function getVoiceName(): string
    {
        return $this->voiceName;
    }

    /**
     * Set the text to be spoken
     *
     * @param string $textToSpeak
     * @return $this
     */
    public function setTextToSpeak(string $textToSpeak)
    {
        $this->textToSpeak = $textToSpeak;
        return $this;
    }

    /**
     * Get the text to be spoken
     *
     * @return string
     */
    public function getTextToSpeak(): string
    {
        return $this->textToSpeak;
    }

    /**
     * Set the full path to AUDIO_DIR
     * By default it will be concatenated constants DOCROOT and AUDIO_DIR
     *
     * @param string $path
     * @return void
     */
    public function setPathToAudioDir(string|null $path = '')
    {
        $this->pathToAudioDir = !empty($path) ? $path : DOCROOT . AUDIO_DIR;
    }

    /**
     * Get the full path to AUDIO_DIR
     *
     * @return string
     */
    public function getPathToAudioDir(): string
    {
        return $this->pathToAudioDir;
    }

    /**
     * Set the index of this TTS audio within a playlist
     *
     * @param integer $playlistindex
     * @return $this
     */
    public function setPlaylistIndex(int $playlistindex)
    {
        $this->playlistIndex = $playlistindex;
        return $this;
    }

    /**
     * Get the index of this TTS audio within a playlist
     *
     * @return integer
     */
    public function getPlaylistIndex(): int
    {
        return $this->playlistIndex;
    }

    /**
     * Request TTS audio
     * 
     * Before sending the request a check will be made to see if it has already been saved.
     * 
     * By default this will return a JSON encoded string for use in JavaScript
     * passing false here will cause the object to be returned instead.
     *
     * @param boolean $returnJSON
     * @return string|object
     */
    public function requestAudio(bool $returnJSON = true): string|object
    {
        // Check for locally saved copy of the same audio and return that if found
        $localAudioUrl = $this->alreadySaved($this->service->getShortName(), $this->voice, $this->textToSpeak);
        if (SAVE_LOCALLY && false !== $localAudioUrl) {
            $returnedData = $this->buildReturnObject(true, $localAudioUrl, 'File already exists locally.');
            $this->setResponse($returnedData);
        }
        // Otherwise request audio from the remote server
        else {
            $returnedData = $this->service->requestTTS($this->voice, $this->textToSpeak);

            // Save the file locally and return local URL instead on success
            if (SAVE_LOCALLY && $returnedData->audio_url) {
                $localUrl = $this->save($returnedData->audio_url);
                if ($localUrl) $returnedData->audio_url = $localUrl;

                // Delete old files
                $this->purge();
            }
            $this->setResponse($returnedData);
        }

        return $returnJSON ? $this->responseJSON : $this->response;
    }

    /**
     * Get the URL of the requested TTS output
     *
     * @return string|null
     */
    public function getAudioUrl(): string|null
    {
        if (!empty($this->response)) return $this->response->audio_url;
        return null;
    }

    /**
     * Set $response and $responseJSON
     * 
     * These contain the object and JSON-encoded object respectively of the data returned from the API request
     * such as audio URL, success boolean, and info of the original request.
     *
     * @param object $returnedData
     * @return void
     */
    public function setResponse(object $returnedData)
    {
        // Add details of the original request to our returned data in case we need to use it in the frontend
        // or for debugging purposes. meta will have a null value at this point.
        $returnedData->meta = (object)[
            'service'        => $this->service->getShortName(),
            'voice_id'       => $this->voice,
            'voice_name'     => $this->voiceName,
            'text'           => $this->textToSpeak,
            'playlist_index' => $this->playlistIndex
        ];

        // For convenience save as both the object and a JSON-encoded version
        $this->response = $returnedData;
        $this->responseJSON = json_encode($returnedData);
    }

    /**
     * Check if a TTS request has already been saved
     * Returns the URL if found, or false if not.
     *
     * @param string $service
     * @param string $voice
     * @param string $text
     * @return string|boolean
     */
    public function alreadySaved(string $service, string $voice, string $text): string|bool
    {
        $audioFileName = $this->generateAudioFilename($service, $voice, $text);
        if (file_exists($this->pathToAudioDir . $audioFileName)) {
            return $this->generateAudioUrl($audioFileName);
        }
        return false;
    }

    /**
     * Generate and return a filename for saving the audio to
     *
     * @param string $service
     * @param string $voice
     * @param string $text
     * @return string
     */
    public function generateAudioFilename(string $service, string $voice, string $text): string
    {
        // Construct a file name: {service name}_{voice mame}_{md5 hash of text}.mp3
        return $service . '_' . $voice . '_' . md5($text) . '.mp3';
    }

    /**
     * Generate and return a URL pointing to the audio file on our server
     *
     * @param string $audioFileName
     * @return string
     */
    public function generateAudioUrl(string $audioFileName): string
    {
        $audioFileUrl = $this->getRequestScheme() . $_SERVER['HTTP_HOST'] . dirname($_SERVER['REQUEST_URI']) . AUDIO_DIR . $audioFileName;

        return $audioFileUrl;
    }

    /**
     * Save audio data as an MP3 file
     * Returns URL to the file or null on failure.
     *
     * @param string $remoteUrl
     * @return string|null
     */
    public function save(string $remoteUrl): string|null
    {
        if ($this->isAudioDirWritable(true)) {
            if (null !== $remoteUrl) {
                try {
                    $audioData = file_get_contents($remoteUrl);
    
                    if ($audioData) {
                        $audioFileName = $this->generateAudioFilename($this->service->getShortName(), $this->voice, $this->textToSpeak);
                        $audioFileUrl = $this->generateAudioUrl($audioFileName);
                        
                        // Save to disk
                        // TODO: handle potential file write error
                        $put = file_put_contents($this->pathToAudioDir . $audioFileName, $audioData);
    
                        // Save transcription alongside it
                        if (SAVE_TXT) {
                            $referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
                            $putTxt = file_put_contents($this->pathToAudioDir . str_replace('.mp3', '.txt', $audioFileName), $this->textToSpeak . PHP_EOL . PHP_EOL . 'Referer: ' . $referer);
                        }
    
                        if ($put) return $audioFileUrl;
                    }
                }
                catch (\Throwable $e) {
                    // TODO: handle this properly - it won't catch Warnings.
                    // Should show some sort of warning but the remote URL will at least still work, so this isn't fatal.
                    // We could also fall back to using a data URI
                }
            }
        }

        return null;
    }

    /**
     * Checks that AUDIO_DIR exists and is writable
     * If $tryToFix is set to true, attempts to fix the issue.
     *
     * @param boolean $tryToFix
     * @return boolean
     */
    public function isAudioDirWritable(bool $tryToFix = false): bool
    {
        $dirExists = is_dir($this->pathToAudioDir);
        $dirIsWritable = is_writable($this->pathToAudioDir);

        if ($dirExists && $dirIsWritable) return true;

        if (!$dirExists) {
            if ($tryToFix) {
                if (@mkdir($this->pathToAudioDir, 0777)) return true;
                return false;
            }
        }
        else if (!$dirIsWritable) {
            if ($tryToFix) {
                if (@chmod($this->pathToAudioDir, 0777)) return true;
                return false;
            }
        }
        return false;
    }

    /**
     * Deletes audio files older than HOURS_TO_KEEP
     * 
     * Returns number of files deleted.
     *
     * @return integer
     */
    public function purge(): int
    {
        $i = 0;
        if ($this->isAudioDirWritable()) {
            $fileSystemIterator = new \FilesystemIterator($this->pathToAudioDir);
            $now = time();
            
            foreach ($fileSystemIterator as $file) {
                // delete files older than HOURS_TO_KEEP hours
                if ($now - $file->getCTime() >= 60 * 60 * HOURS_TO_KEEP) {
                    unlink($this->pathToAudioDir . $file->getFilename());
                    $i++;
                }
            }
        }

        return $i;
    }

    /**
     * Checks that a request sent to request_tts.php is valid.
     * i.e. its using POST method and at a bare minimum it has a non-empty value for `text`
     *
     * @return boolean
     */
    public function isValidPOSTRequest(): bool
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->lastErrorMessage =  'This script only accepts POST requests.';
            return false;
        }
        if (!isset($_REQUEST['text']) || empty(trim($_REQUEST['text']))) {
            $this->lastErrorMessage = '\'text\' value must not be empty.';
            return false;
        }

        return true;
    }

    /**
     * Gets the request scheme (http or https)
     * including the :// when true is passed (default)
     *
     * @param boolean $addColonSlashSlash
     * @return string
     */
    function getRequestScheme(bool $addColonSlashSlash = true): string
    {
        // If running locally we might not have https enabled so don't force it unless we can't detect.
        $requestScheme = isset($_SERVER['REQUEST_SCHEME']) ? $_SERVER['REQUEST_SCHEME'] : 'https';
        if ($addColonSlashSlash) $requestScheme .= '://';

        return $requestScheme;
    }

    /**
     * Get the last error message received.
     *
     * @return string
     */
    public function getLastErrorMessage(): string
    {
        return $this->lastErrorMessage;
    }

    /**
     * Exit the script and output a JSON-encoded error message. Typically used for fatal errors.
     * 
     * Intended use of this script was originally to be used by JavaScript based frontend
     * so these fields match those that would otherwise be returned by actual API requests,
     * therefore they can be displayed in the same manner as legitimate API failures.
     *
     * @param string $error
     * @return string
     */
    public function exitWithErrorJSON(string $error): string
    {
        $errorObject = $this->buildReturnObject(false, null, null, null, $error);

        exit(json_encode($errorObject));
    }

}