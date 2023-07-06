<?php
// Don't access this file directly
if (__FILE__ === $_SERVER['SCRIPT_FILENAME']) {
    header('Location: ../');
    exit;
}

require_once './vendor/autoload.php';
use ChrisJP\TTS\TTS;
$tts = new TTS();

$thisPage = basename($_SERVER['SCRIPT_FILENAME']);
$tabHighlight = 'is-active has-text-weight-bold';
?>
<!doctype html>
<html lang="en" class="mode-light has-background-white-bis">
    <head>
        <meta charset="utf-8">
        <title>Text-to-Speech (TTS) StreamElements Demo Simulator Emulator Generator Tool Thing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="assets/css/tts.css?v=<?php echo $tts::version; ?>">
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    </head>
    <body>
    <section class="section">
        <div class="container">
            <div id="toggleStyleMode" class="is-pulled-right toggle-style">💡</div>
            <h1 class="title is-2">Text-to-Speech Simulator</h1>
            <p class="subtitle is-4">A simple web app demonstrating how text sounds in different TTS voices.</p>

            <div id="tab-container">
                <div class="tabs is-centered">
                    <ul>
                    <li class="<?php if ($thisPage === 'index.php') echo $tabHighlight; ?>"><a href="./">Demo</a></li>
                    <li class="<?php if ($thisPage === 'conversation.php' || $thisPage === 'playlist.php') echo $tabHighlight; ?>"><a href="./conversation.php">Conversation</a></li>
                    </ul>
                </div>
            </div>
