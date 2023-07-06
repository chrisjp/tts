<?php
// Grab all the stuff we need
require './vendor/autoload.php';

use ChrisJP\TTS\Playlist;

// Instantiate the TTS Playlist class
$ttsPls = new Playlist();

// Save playlist
if ($ttsPls->tryingToSavePlaylist()) {
    header('Content-Type: application/json');
    $savedPlsJSON = $ttsPls->savePlaylist($_REQUEST['json'], $_REQUEST['name']);
    exit($savedPlsJSON);
}

// Load playlist
if ($ttsPls->tryingToLoadPlaylist()) {
    header('Content-Type: application/json');
    $playlistJSON = $ttsPls->loadPlaylist($_REQUEST['pls_file']);
    exit($playlistJSON);
}

// If we got this far we're viewing a playlist
include 'include/header.php';
?>
            <div class="box">
                <p id="listen-to-this-convo">Loading playlist...</p>
                <p class="mb-5"><span id="cnvrstn-duration"></span></p>

                <div id="tts-playlist">
                </div>

                <div id="playlist-buttons" class="buttons is-centered mt-6">
                    <a href="./conversation.php" class="button is-success">Make Your Own</a>
                </div>
            </div>
<?php
include 'include/footer.php';