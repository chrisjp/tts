<?php
// Always return JSON from this script
header('Content-Type: application/json');

// Grab all the stuff we need
require_once './vendor/autoload.php';
use ChrisJP\TTS\Playlist;

// Instantiate the TTS Playlist class
$ttsPls = new Playlist();

// Save playlist
if ($ttsPls->tryingToSavePlaylist()) {
    $savedPlsJSON = $ttsPls->savePlaylist($_REQUEST['json'], $_REQUEST['name']);
    exit($savedPlsJSON);
}

// Load playlist
if ($ttsPls->tryingToLoadPlaylist()) {
    $playlistJSON = $ttsPls->loadPlaylist($_REQUEST['file']);
    exit($playlistJSON);
}

$ttsPls->exitWithErrorJSON("Bad request.");
