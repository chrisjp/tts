<?php

namespace ChrisJP\TTS;

use ChrisJP\TTS\Services\Service;

class Playlist extends TTS
{

    /**
     * Response to request for TTS playlist
     *
     * @var object
     */
    private $plsResponse;

    /**
     * JSON encoded response to request for TTS playlist
     *
     * @var string
     */
    private $plsResponseJSON = '';

    /**
     * Saves playlist JSON to disk.
     * Returns JSON string of data relating to said playlist.
     *
     * @param string $json
     * @param string $name
     * @return string
     */
    public function savePlaylist(string $json, string $name): string
    {
        $returnedData = null;

        if (!empty($json) && !empty($name)) {
            $checkJSON = json_decode($json);

            if (json_last_error() === JSON_ERROR_NONE) {
                $playlistUrl = $this->getRequestScheme() . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] . '?pls=' . $name;
                $playlistFilename = 'TTSPlaylist_' . $name . '.json';

                $put = file_put_contents($this->getPathToAudioDir() . $playlistFilename, $json);
                if ($put) {
                    $returnedData = $this->buildPlaylistObject(true, $playlistUrl, $json);
                }
                else {
                    $returnedData = $this->buildPlaylistObject(false, null, null, 'Failed to write playlist to disk.');
                }
            } else {
                $returnedData = $this->buildPlaylistObject(false, null, null, json_last_error_msg());
            }
        }
        else {
            $returnedData = $this->buildPlaylistObject(false, null, null, 'Empty playlist name or JSON data.');
        }

        $this->setPlsResponse($returnedData);
        return $this->plsResponseJSON;
    }

    /**
     * Gets the JSON data for building the playlist
     *
     * @param string $jsonFile
     * @return string
     */
    public function loadPlaylist(string $jsonFile): string
    {
        $playlistFilename = 'TTSPlaylist_' . $jsonFile . '.json';
        
        $fileContents = @file_get_contents($this->getPathToAudioDir() . $playlistFilename);
        if ($fileContents) return $fileContents;
        
        $returnedData = $this->buildPlaylistObject(false, null, null, 'Could not find playlist named '. $jsonFile);
        $this->setPlsResponse($returnedData);
        return $this->plsResponseJSON;
    }

    /**
     * Builds an object containing every possible field we'll want to return in a JSON format to the frontend.
     *
     * @param boolean $success
     * @param string|null $playlistUrl
     * @param string|null $json
     * @param string|null $errorMessage
     * @return object
     */
    public function buildPlaylistObject(bool $success, string|null $playlistUrl, string|null $json, string|null $errorMessage = null): object
    {
        return (object)[
            'success'          => $success,
            'playlist_url'     => $playlistUrl,
            'json'             => $json,
            'error_msg'        => $errorMessage
        ];
    }

    /**
     * Set $plsResponse and $plsResponseJSON
     * 
     * These contain the object and JSON-encoded object respectively of the data returned from playlist request
     * such as playlist URL, success boolean...
     *
     * @param object $returnedData
     * @return void
     */
    public function setPlsResponse(object $returnedData)
    {
        // For convenience save as both the object and a JSON-encoded version
        $this->plsResponse = $returnedData;
        $this->plsResponseJSON = json_encode($returnedData);
    }

    /**
     * A long chain of checks that all need to be true so we can be sure we have valid data for savePlaylist()
     *
     * @return boolean
     */
    public function tryingToSavePlaylist(): bool
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_REQUEST['save']) && $_REQUEST['save'] === '1' && isset($_REQUEST['name']) && isset($_REQUEST['json']))
        {
            return true;
        }

        return false;
    }

    /**
     * A  chain of checks that all need to be true so we can be sure we have valid data for loadPlaylist()
     *
     * @return boolean
     */
    public function tryingToLoadPlaylist(): bool
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_REQUEST['pls_file'])) return true;
        return false;
    }

}