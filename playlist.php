<?php
// Are we trying to save a playlist?
if (($_SERVER['REQUEST_METHOD'] === 'POST' && $_REQUEST['save'] === '1') || ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_REQUEST['json']) && !empty($_REQUEST['json'])) ) {
    header('Content-Type: application/json');

    // Load configuration
    if (file_exists('config.php')) {
        include 'config.php';
    }
    // Defaults - see config.php for adjusting these variables
    if (!defined('SAVE_LOCALLY'))   define('SAVE_LOCALLY', false);
    if (!defined('AUDIO_DIR'))      define('AUDIO_DIR', 'assets/audio/');
    if (!defined('HOURS_TO_KEEP'))  define('HOURS_TO_KEEP', 24);
    if (!defined('SAVE_TXT'))       define('SAVE_TXT', false);

    $response = new StdClass();
    $response->success = false;

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_REQUEST['save'] === '1') {
        // Is the data in the format we expect?
        //$checkFilename = strpos($_REQUEST['name'], 'TTSPlaylist_');
        $checkJSON = json_decode($_REQUEST['json']);

        if (json_last_error() === JSON_ERROR_NONE) {
            $playlistUrl = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] . '?pls=' . $_REQUEST['name'];
            $playlistFilename = 'TTSPlaylist_' . $_REQUEST['name'] . '.json';

            $put = file_put_contents(AUDIO_DIR . $playlistFilename, $_REQUEST['json']);
            if ($put !== false) {
                $response->success = true;
                $response->playlistUrl = $playlistUrl;
                $response->file = AUDIO_DIR . $playlistFilename;
                $response->put = $put;
                $response->json = $_REQUEST['json'];
            }
        } else {
            $response->error = json_last_error_msg();
        }

        exit(json_encode($response));
    }
    else if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_REQUEST['json']) && !empty($_REQUEST['json'])) {
        $playlistFilename = 'TTSPlaylist_' . $_REQUEST['json'] . '.json';
        $fileContents = file_get_contents(AUDIO_DIR . $playlistFilename);
        $response = json_decode($fileContents);
        if (json_last_error() === JSON_ERROR_NONE) {
            $response->success = true;
        } else {
            $response->error = json_last_error_msg();
        }

        exit(json_encode($response));
    }
}

include 'include/header.php';
?>
            <div class="box">
                <p>Listen to this TTS conversation <span id="cnvrstn-people">...</span></p>
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