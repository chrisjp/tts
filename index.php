<?php
include 'include/header.php';
?>
            <div class="box">
                <p>
                    Choose from <span id="voicecount" class="has-text-weight-bold">1000+</span> voices from Amazon Polly (via StreamElements/Streamlabs), Google Cloud Text-to-Speech (StreamElements), TikTok, CereProc, IBM Watson, Acapela, Oddcast, Microsoft Azure Speech (via Bing Translator), and Google Translate.<br />
                    Use <b>StreamElements</b> or <b>Streamlabs</b> voices for testing how Twitch.tv donations will sound to streamers who have TTS enabled via those services. <img src="https://cdn.frankerfacez.com/emoticon/109777/1" alt="FeelsGoodMan" />
                </p>
                <p>
                    The <a href="https://docs.google.com/document/d/1qLKdc3QArtn6PVuGf42EfoMuzvLE_ykWwU1RViEcrbU/edit?usp=sharing" target="_blank">"TTS Dossier"</a> may have some entertaining TTS ideas for you <img src="https://cdn.frankerfacez.com/emoticon/381875/1" alt="KEKW" /> and for reference, here's a <a href="https://gist.github.com/TETYYS/f1aa16b18fb619fc6c0f13ba4f9ae70d" target="_blank">list of characters</a> explaining how they are pronounced (specifically by Brian). <img src="https://cdn.frankerfacez.com/emoticon/239504/1" alt="5Head" />
                </p>
                
                <hr />
                
                <div id="filters">
                    <div id="filter-api" class="tabs is-toggle is-centered is-small"></div>
                    <div id="filter-gender" class="tabs is-toggle is-centered is-small"></div>
                    <div id="lang-selection" class="buttons is-centered are-small"></div>
                </div>

                <hr />
                
                <div class="columns">
                    
                    <div class="column is-half column-voices">
                        <div id="voice-selection" class="buttons is-centered">
                        </div>
                    </div>
                    
                    <div class="column is-half">
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
                                    <div class="field">
                                        <div class="control">
                                            <div id="tts-player" class="control is-pulled-left is-hidden">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="block">
                                <div id="tts-error" class="message is-small is-hidden">
                                    <div id="tts-error-text" class="message-body"></div>
                                </div>
                            </div>

                        </form>
                    </div>
                
                </div>
                
                <hr />
                
                <div id="recents">
                    <h3 class="title is-4">Your Recent Chatter <button id="btn-clear-shares" type="button" class="button is-small is-danger">Clear All</button></h3>
                    <div id="recentTTS">
                    </div>
                </div>
            </div>
<?php
include 'include/footer.php';