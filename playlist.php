<!doctype html>
<html lang="en" class="mode-light has-background-white-bis">
    <head>
        <meta charset="utf-8">
        <title>Text-to-Speech (TTS) StreamElements Demo Simulator Emulator Generator Tool Thing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" integrity="sha512-IgmDkwzs96t4SrChW29No3NXBIBv8baW490zk5aXvhCD8vuZM3yUSkbyTBcXohkySecyzIrUwiF/qV0cuPcL3Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="assets/css/tts.css">
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
                <p>Here, listen to this...</p>

                <div class="columns">

                    <div class="column">
                        <div id="tts-playlist" class="block">
                        </div>
                    </div>

                </div>

                <p>
                    <a href="cnvrstn.php" class="button is-success">Make Your Own</a>
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
    <script src="assets/js/tts.js?v=1.06"></script>
    <script src="assets/js/conversations.js?v=1.08"></script>
    </body>
</html>
