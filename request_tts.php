<?php
// Always return JSON from this script
header('Content-Type: application/json');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') exit(json_encode(['success' => false, 'error_msg' => "Please do not access this file directly."]));

// Grab all the stuff we need
require __DIR__ . '/vendor/autoload.php';
use ChrisJP\TTS\TTS;

// Instantiate the TTS class
$tts = new TTS();

// If a correctly formed POST request was sent, set the necessary values
if (array_key_exists('service', $_REQUEST)) $tts->setService($_REQUEST['service']);
if (array_key_exists('voice', $_REQUEST)) $tts->setVoice($_REQUEST['voice']);
if (array_key_exists('text', $_REQUEST)) $tts->setTextToSpeak($_REQUEST['text']);
if (array_key_exists('playlist_index', $_REQUEST)) $tts->setPlaylistIndex($_REQUEST['playlist_index']);
if (array_key_exists('voice_name', $_REQUEST)) $tts->setVoiceName($_REQUEST['voice_name']);
else exit(json_encode(['success' => false, 'error_msg' => "No text specified!"]));

// Make a request to the service's API for the audio. This will return JSON containing all the relevant data.
$response = $tts->requestAudio();
exit($response);