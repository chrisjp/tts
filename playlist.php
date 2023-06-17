<?php
$v = '1.3';
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
?>
<!doctype html>
<html lang="en" class="mode-light has-background-white-bis">
    <head>
        <meta charset="utf-8">
        <title>Text-to-Speech (TTS) StreamElements Demo Simulator Emulator Generator Tool Thing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="assets/css/tts.css?v=<?php echo $v ?>">
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    </head>
    <body>
    <section class="section">
        <div class="container">
            <div id="toggleStyleMode" class="is-pulled-right toggle-style" onclick="toggleStyleMode(true);">💡</div>
            <h1 class="title is-2">Text-to-Speech Simulator</h1>
            <p class="subtitle is-4">A simple web app demonstrating how text sounds in different TTS voices.</p>

            <div id="tab-container">
                <div class="tabs is-centered">
                    <ul>
                    <li class=""><a href="./">Demo</a></li>
                    <li class="is-active has-text-weight-bold"><a href="conversation.php">Conversation</a></li>
                    </ul>
                </div>
            </div>

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

        </div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
            <p class="is-size-7-touch">
                TTS Demo by <a href="https://chrisphillips.uk">Chris Phillips</a><br />
                Powered by: <a href="https://aws.amazon.com/polly/">Amazon Polly</a> (via <a href="https://streamlabs.com/">Streamlabs</a> API)
                // <a href="https://cereproc.com/">CereProc</a>
                // <a href="https://tiktok.com">TikTok</a>
                // <a href="https://www.ibm.com/cloud/watson-text-to-speech/">IBM Watson</a>
                // <a href="https://www.acapela-group.com/demos/">Acapela</a>
                // <a href="https://www.oddcast.com/ttsdemo/index.php">Oddcast</a>
                // <a href="https://translate.google.com/">Google Translate</a>
            </p>
            <p>
                <a href="https://github.com/chrisjp/tts"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" width="32" height="32" alt="GitHub" /></a>
            </p>
        </div>
    </footer>
    <!-- JS -->
    <script src="assets/js/tts.js?v=<?php echo $v ?>"></script>
    <script src="assets/js/conversations.js?v=<?php echo $v ?>"></script>
    </body>
</html>
