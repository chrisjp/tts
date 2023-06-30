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
    <script type="module" src="assets/js/tts.js?v=<?php echo $tts::version; ?>"></script>
<?php if (in_array(basename($_SERVER['SCRIPT_FILENAME']), ['conversation.php', 'playlist.php'])) echo '    <script type="module" src="assets/js/conversations.js?v=' . $tts::version . '"></script>' . PHP_EOL; ?>
    </body>
</html>