<?php
// Don't access this file directly
if (__FILE__ === $_SERVER['SCRIPT_FILENAME']) {
    header('Location: ../');
    exit;
}
?>
        </div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
            <p class="is-size-7 is-size-6-touch">
                TTS Demo by <a href="https://chrisphillips.uk">Chris Phillips</a><br />
                Powered by: <a href="https://aws.amazon.com/polly/">Amazon Polly</a> (via <a href="https://streamelements.com/">StreamElements</a>/<a href="https://streamlabs.com/">Streamlabs</a>)
                // <a href="https://cloud.google.com/text-to-speech">Google Cloud Text-to-Speech</a> (via StreamElements)
                // <a href="https://tiktok.com">TikTok</a>
                // <a href="https://codefactoryglobal.com/speech-technology/">Cerence</a>
                // <a href="https://www.acapela-group.com/demos/">Acapela</a>
                // <a href="https://www.oddcast.com/ttsdemo/index.php">Oddcast</a>
                // <a href="https://www.voiceforge.com/">VoiceForge</a>
                // <a href="https://www.cepstral.com/en/demos">Cepstral</a>
                // <a href="https://learn.microsoft.com/en-us/azure/cognitive-services/Speech-Service/">Microsoft Azure Speech</a> (via <a href="https://www.bing.com/translator">Bing Translator</a>)
                // <a href="https://translate.google.com/">Google Translate</a>
                // <a href="https://www.ispeech.org/">iSpeech</a>
            </p>
            <p>
                <a href="https://github.com/chrisjp/tts"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" width="32" height="32" alt="GitHub" /></a>
            </p>
        </div>
    </footer>
    <!-- JS -->
    <script type="module" src="assets/js/tts.js?v=<?php echo $tts::version; ?>"></script>
    </body>
</html>
