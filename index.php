<?php
include 'include/header.php';
?>
            <div class="box">
                <p>Choose from <span id="voicecount" class="has-text-weight-bold">500+</span> voices from Amazon Polly (via Streamlabs), TikTok, CereProc, IBM Watson, Acapela, Oddcast, Google Translate.<br />
                    Polly voices can be used for testing how Twitch.tv donations will sound as many streamers have TTS enabled via Streamlabs or StreamElements for this. <img src="https://cdn.frankerfacez.com/emoticon/109777/1" alt="FeelsGoodMan" /><br/>
                    Also you may wish to check out the <a href="https://docs.google.com/document/d/1qLKdc3QArtn6PVuGf42EfoMuzvLE_ykWwU1RViEcrbU/edit?usp=sharing" target="_blank">"TTS Dossier"</a> for some <em>entertaining</em> ideas. <img src="https://cdn.frankerfacez.com/emoticon/381875/1" alt="KEKW" /></p>
                <p>Finally, here's a <a href="https://gist.github.com/TETYYS/f1aa16b18fb619fc6c0f13ba4f9ae70d" target="_blank">list of characters</a> explaining how they are pronounced (specifically by Brian). <img src="https://cdn.frankerfacez.com/emoticon/239504/1" alt="5Head" /></p>
                
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