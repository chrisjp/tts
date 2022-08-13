<?php
$v = '1.18';
?>
<!doctype html>
<html lang="en" class="mode-light has-background-white-bis">
    <head>
        <meta charset="utf-8">
        <title>Text-to-Speech (TTS) StreamElements Demo Simulator Emulator Generator Tool Thing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" integrity="sha512-IgmDkwzs96t4SrChW29No3NXBIBv8baW490zk5aXvhCD8vuZM3yUSkbyTBcXohkySecyzIrUwiF/qV0cuPcL3Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
            <div class="box">
                <p>Imagine being able to use multiple TTS voices to create a conversation.</p>
                <p>What if there was no need to imagine it?</p>
                <p>What if that was actually possible?</p>
                <p>Pick some voices...</p>

                <br />
                <button id="btn-add-voice" type="button" class="button is-success" onclick="addVoiceSelect()">Add Voice</button>
                <hr />

                <div id="voice-selects" class="columns is-multiline">

                    <div class="column is-one-third">
                        <div class="field">
                            <label class="label" for="voice_1">Voice 1</label>
                            <div class="control select is-rounded">
                                <select id="voice_1" name="voice[]">
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="column is-one-third">
                        <div class="field">
                            <label class="label" for="voice_2">Voice 2</label>
                            <div class="control select is-rounded">
                                <select id="voice_2" name="voice[]">
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="column is-one-third">
                        <div class="field">
                            <label class="label" for="voice_3">Voice 3</label>
                            <div class="control select is-rounded">
                                <select id="voice_3" name="voice[]">
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

                <hr />

                <div class="columns">
                    <div class="column is-two-thirds">
                        <div id="con-voice-and-text-input">
                        </div>
                    </div>
                    <div class="column is-one-third">
                        <div id="con-audio-output" class="box">
                            <div id="progression" class="block">
                                <p id="progress-msg"><em>Waiting to receive input...</em></p>
                                <progress id="progress-bar" class="progress is-small is-dark" max="100">-</progress>
                                <p id="progress-done" class="has-text-weight-bold is-hidden">Done!</p>
                            </div>
                            <div id="tts-playlist" class="block">
                            </div>
                        </div>
                    </div>
                </div>


                <div class="box has-text-centered">
                    <button id="btn-add-con" type="button" class="button is-success" onclick="addDialogueBox()" disabled>Add Dialogue</button>
                    <button id="btn-speak-con" type="button" class="button is-success" onclick="generateConversation()" disabled>Generate TTS</button>
                </div>
            </div>

        </div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
            <p class="is-size-7-touch">
                TTS Demo by <a href="https://chrisphillips.uk">Chris Phillips</a><br />
                Powered by: <a href="https://aws.amazon.com/polly/">Amazon Polly</a> (via <a href="https://streamlabs.com/">Streamlabs</a> API) // <a href="https://cereproc.com/">CereProc</a> // <a href="https://www.ibm.com/cloud/watson-text-to-speech/">IBM Watson</a> // <a href="https://www.acapela-group.com/demos/">Acapela</a> // <a href="https://www.oddcast.com/ttsdemo/index.php">Oddcast</a> // <a href="https://www.readspeaker.com/">ReadSpeaker</a> // <a href="https://translate.google.com/">Google Translate</a> // <a href="https://ispeech.org">iSpeech</a>
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
