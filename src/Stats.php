<?php

namespace ChrisJP\TTS;

use ChrisJP\TTS\Services\Service;

/**
 * Methods to calculate various stats
 * 
 */
class Stats extends TTS
{

    /**
     * An array of every file in AUDIO_DIR with the .mp3 extension
     *
     * @var array
     */
    private $audioFileArray = [];

    /**
     * An array of every playlist JSON file in AUDIO_DIR
     *
     * @var array
     */
    private $playlistFileArray = [];

    /**
     * count($this->$audioFileArray)
     *
     * @var integer
     */
    private $audioCount = 0;

    /**
     * count($this->$playlistFileArray)
     *
     * @var integer
     */
    private $plsCount = 0;

    /**
     * Filename to save stats to - will be saved in AUDIO_DIR
     *
     * @var string
     */
    private $cachedStatsFile = 'stats.json';

    /**
     * Amount of time to cache stats for (in minutes)
     * If the file's last modified time is greater than this, they will be refreshed
     *
     * @var integer
     */
    private $cacheAgeMins = 60;

    /**
     * Object containing all the stats
     *
     * @var object
     */
    private $statsObject;

    /**
     * JSON-encoded string of the stats object
     *
     * @var string
     */
    private $statsJSON = '';

    /**
     * Returns stats, JSON-encoded if $asJSON is true
     * First checks for the existance of $cachedStatsFile and if it's not too old returns its contents
     * Otherwise will generate fresh data
     *
     * @param boolean $asJSON
     * @return object|string
     */
    public function stats(bool $asJSON = false): object|string
    {
        $cacheFile = $this->getPathToAudioDir() . $this->cachedStatsFile;
        $xMinsAgo = time() - ($this->cacheAgeMins * 60);
        if (file_exists($cacheFile) && filemtime($cacheFile) > $xMinsAgo) {
            $this->statsFromCache();
        }
        else {
            $this->generate();
        }

        return $asJSON ? $this->statsJSON : $this->statsObject;
    }

    /**
     * Calls methods to generate stats and populates $statsObject and $statsJSON
     * Saves the resulting data to a local file.
     *
     * @return object
     */
    public function generate(): object
    {
        $this->generateFileArrays();

        $breakdownByService = $this->getBreakdownByService();

        $breakdownByVoice = $this->getBreakdownByVoice();

        $this->statsObject = (object)[
            'total_files'     => $this->audioCount,
            'total_playlists' => $this->plsCount,
            'by_service'      => $breakdownByService,
            'by_voice'        => $breakdownByVoice,
            'gen_time'        => time() 
        ];
        $this->statsJSON = json_encode($this->statsObject);

        // cache the data
        $save = @file_put_contents($this->getPathToAudioDir() . $this->cachedStatsFile, $this->statsJSON);

        return $this->statsObject;
    }

    /**
     * Populates $statsObject and $statsJSON from cached stats file
     *
     * @return string
     */
    public function statsFromCache(): string
    {
        $this->statsJSON = file_get_contents($this->getPathToAudioDir() . $this->cachedStatsFile);
        $this->statsObject = json_decode($this->statsJSON);

        return $this->statsJSON;
    }

    /**
     * Populates $audioFileArray, $playlistFileArray, and sets their corresponding count()s for later use
     *
     * @return void
     */
    public function generateFileArrays()
    {
        $fileSystemIterator = new \FilesystemIterator($this->getPathToAudioDir());
        foreach ($fileSystemIterator as $file) {
            $basename = $file->getBasename();
            if ($file->getExtension() === 'mp3') $this->audioFileArray[] = $basename;
            else if (str_starts_with($basename, 'TTSPlaylist')) $this->playlistFileArray[] = $basename;
        }

        $this->audioCount = count($this->audioFileArray);
        $this->plsCount = count($this->playlistFileArray);
    }

    /**
     * Iterates over $this->audioFileArray and retuns an array with the total count for each service
     *
     * @return array
     */
    public function getBreakdownByService(): array
    {
        $serviceCounts = [];
        $totalFiles = count($this->audioFileArray);
        
        for ($i = 0; $i < $totalFiles; $i++) {
            $fileInfo = $this->parseTTSFile($this->audioFileArray[$i]);
            if (!empty($fileInfo)) {
                if (!array_key_exists($fileInfo['service'], $serviceCounts)) {
                    // If the key doesn't exist add it to the array with a value of 1
                    $serviceCounts[$fileInfo['service']] = 1;
                }
                else{
                    // Else increment the existing key value by 1
                    $serviceCounts[$fileInfo['service']]++;
                }
            }
        }

        return $serviceCounts;
    }

    /**
     * Iterates over $this->audioFileArray and retuns an array with the total count for each voice
     *
     * @return array
     */
    public function getBreakdownByVoice(): array
    {
        $voiceCounts = [];
        $totalFiles = count($this->audioFileArray);
        
        for ($i = 0; $i < $totalFiles; $i++) {
            $fileInfo = $this->parseTTSFile($this->audioFileArray[$i]);
            if (!empty($fileInfo)) {
                // Prefix voice ID with service in case there are multiple voices with the same name across different ones
                $voiceId = $fileInfo['service'] . ' - ' . $fileInfo['voice'];
                if (!array_key_exists($voiceId, $voiceCounts)) {
                    // If the key doesn't exist add it to the array with a value of 1
                    $voiceCounts[$voiceId] = 1;
                }
                else{
                    // Else increment the existing key value by 1
                    $voiceCounts[$voiceId]++;
                }
            }
        }

        return $voiceCounts;
    }

    /**
     * Parses a TTS audio clip filename and returns an array of the parts
     * A filename is constructed as follows: ServiceName_VoiceName_MD5Hash
     *
     * @param string $filename
     * @return array
     */
    public function parseTTSFile(string $filename): array
    {
        if (preg_match('/([A-Z]+)_([\w-]+)_([A-F0-9]{32})/i', $filename, $fileParts)) {
            return [
                'service' => $fileParts[1],
                'voice'   => $fileParts[2],
                'hash'    => $fileParts[3]
            ];
        }

        return [];
    }

}