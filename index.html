<!doctype html>
<html lang="en" class="mode-light has-background-white-bis">
    <head>
        <meta charset="utf-8">
        <title>Text-to-Speech (TTS) StreamElements Demo Simulator Emulator Generator Tool Thing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="assets/css/tts.css?v=1.3">
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
                    <li class="is-active has-text-weight-bold"><a href="./">Demo</a></li>
                    <li class=""><a href="conversation.php">Conversation</a></li>
                    </ul>
                </div>
            </div>

            <div class="box">
                <p>Choose from <span id="voicecount" class="has-text-weight-bold">500+</span> voices from Amazon Polly (via Streamlabs), TikTok, CereProc, IBM Watson, Acapela, Oddcast, ReadSpeaker, Google Translate, iSpeech.<br />
                    Polly voices can be used for testing how Twitch.tv donations will sound as many streamers have TTS enabled via Streamlabs or StreamElements for this. <img src="https://cdn.frankerfacez.com/emoticon/109777/1" alt="FeelsGoodMan" /><br/>
                    Also you may wish to check out the <a href="https://docs.google.com/document/d/1qLKdc3QArtn6PVuGf42EfoMuzvLE_ykWwU1RViEcrbU/edit?usp=sharing" target="_blank">"TTS Dossier"</a> for some <em>entertaining</em> ideas. <img src="https://cdn.frankerfacez.com/emoticon/381875/1" alt="KEKW" /></p>
                <p>Finally, here's a <a href="https://gist.github.com/TETYYS/f1aa16b18fb619fc6c0f13ba4f9ae70d" target="_blank">list of characters</a> explaining how they are pronounced (specifically by Brian). <img src="https://cdn.frankerfacez.com/emoticon/239504/1" alt="5Head" /></p>
                
                <hr />
                
                <div id="filters">
                    <div id="filter-api" class="tabs is-toggle is-centered is-small"></div>
                    <div id="filter-sex" class="tabs is-toggle is-centered is-small"></div>
                    <div id="lang-selection" class="buttons are-small"></div>
                </div>

                <hr />
                
                <div class="columns">
                    
                    <div class="column column-voices">
                        <div id="voice-selection" class="buttons is-centered">
                        </div>
                    </div>
                    
                    <div class="column">
                        <form action="" method="post">
                            <div class="field is-horizontal">
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <textarea id="text" name="text" rows="3" cols="80" maxlength="550" class="textarea" placeholder="Enter some text here..."></textarea>
                                            <span id="character-count" class="is-pulled-right is-size-7 has-text-right"><span id="chars">0</span>/<span id="charlimit">550</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div class="field is-horizontal">
                                <div class="field-body">
                                    <div class="field is-narrow is-grouped">
                                        <div class="control">
                                            <button id="playbutton" name="play" type="button" class="button is-success">Say It</button>
                                        </div>
                                        <div class="control">
                                            <button id="copylinkbutton" name="copy" type="button" class="button button-copy is-light is-hidden">Copy Link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="field is-horizontal">
                                <div class="field-body">
                                    <div class="field is-grouped">
                                        <div class="control">
                                            <div id="tts-player" class="control is-pulled-left is-hidden">
                                            </div>
                                        </div>
                                        <div class="control">
                                            <div id="tts-error" class="message is-pulled-left is-small is-hidden">
                                                <div id="tts-error-text" class="message-body"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                
                </div>
                
                <hr />
                
                <div id="recents">
                    <h3 class="title is-4">Your Recent Chatter <button type="button" class="button is-small is-danger" onclick="clearShares();">Clear All</button></h3>
                    <div id="recentTTS">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
            <p class="is-size-7-touch">
                TTS Demo by <a href="https://chrisphillips.uk">Chris Phillips</a><br />
                Powered by: <a href="https://aws.amazon.com/polly/">Amazon Polly</a> (via <a href="https://streamlabs.com/">Streamlabs</a> API) // <a href="https://cereproc.com/">CereProc</a> // <a href="https://tiktok.com">TikTok</a> // <a href="https://www.ibm.com/cloud/watson-text-to-speech/">IBM Watson</a> // <a href="https://www.acapela-group.com/demos/">Acapela</a> // <a href="https://www.oddcast.com/ttsdemo/index.php">Oddcast</a> // <a href="https://www.readspeaker.com/">ReadSpeaker</a> // <a href="https://translate.google.com/">Google Translate</a> // <a href="https://ispeech.org">iSpeech</a>
            </p>
            <p>
                <a href="https://github.com/chrisjp/tts"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" width="32" height="32" alt="GitHub" /></a>
            </p>
        </div>
    </footer>
    <!-- JS -->
    <script src="assets/js/tts.js?v=1.25"></script>
    </body>
</html>