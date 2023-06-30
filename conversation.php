<?php
include 'include/header.php';
?>
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
                    <button id="btn-add-con" type="button" class="button is-success" disabled>Add Dialogue</button>
                    <button id="btn-speak-con" type="button" class="button is-success" disabled>Generate TTS</button>
                </div>
            </div>
<?php
include 'include/footer.php';