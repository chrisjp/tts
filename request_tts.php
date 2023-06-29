<?php
// Always return JSON from this script
header('Content-Type: application/json');

// Grab all the stuff we need
require __DIR__ . '/vendor/autoload.php';
use ChrisJP\TTS\TTS;

// Instantiate the TTS class
$tts = new TTS();

// If a correctly formed POST request was sent, set the necessary values
if ($tts->isValidPOSTRequest()) {
    // Now we know `text` isn't empty. `service` and `voice` can use default values.
    if (array_key_exists('service', $_REQUEST)) $tts->setService($_REQUEST['service']);
    if (array_key_exists('voice', $_REQUEST)) $tts->setVoice($_REQUEST['voice']);
    $tts->setTextToSpeak($_REQUEST['text']);
    
    // Playlist specific
    if (array_key_exists('playlist_index', $_REQUEST)) $tts->setPlaylistIndex($_REQUEST['playlist_index']);
    if (array_key_exists('voice_name', $_REQUEST)) $tts->setVoiceName($_REQUEST['voice_name']);
}
else {
    $tts->exitWithErrorJSON($tts->getLastErrorMessage());
}

// Make a request to the service's API for the audio. This will return JSON containing all the relevant data.
$response = $tts->requestAudio();
exit($response);