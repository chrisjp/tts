<?php
// Grab all the stuff we need
require __DIR__ . '/vendor/autoload.php';

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
                <p><span id="cnvrstn-duration">&nbsp;</span></p><br/><br/>

                <div class="columns">

                    <div class="column">
                        <div id="tts-playlist" class="content">
                        </div>
                    </div>

                </div>

                <p>
                    <a href="conversation.php" class="button is-success">Make Your Own</a>
                </p>
            </div>
<?php
include 'include/footer.php';