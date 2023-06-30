// Global variables
let objConversation = {};
let arrPlaylistVoices = [];
let arrPlaylistDialogue = [];
let currentPos = -1;
let voiceSelectHTML = '<option value="">-- None --</option>';
let isPlaylistPage = false;
let lastTrackNo = -1;

// Array of TTS Services we can select from for use in conversations
const validServices = ['Polly', 'CereProc', 'TikTok'];
import ttsServices from './voices.json' assert {type: 'json'};

// Current URL paramaters
const url = new URL(window.location.href);
const urlParamVoices = url.searchParams.get('voices');
const urlParamPls = url.searchParams.get('pls');
const urlParamEdit = url.searchParams.get('edit');

// For generating a random string
const random = (length = 16) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}

// playlist page
if (urlParamPls !== null) {
    isPlaylistPage = true;
    getPlaylist(urlParamPls, true, false);
}
// make conversation page
else {

    document.getElementById('btn-add-con').addEventListener('click', addDialogueBox);
    document.getElementById('btn-speak-con').addEventListener('click', generateConversation);

    // Generate HTML <option>s for the voice <select>s and add it to the DOM
    generateSelectHtml();
    populateSelects(null);

    // Pre-select voices if we have URL params
    if (urlParamVoices) {
        let selVoices = [];
        selVoices = urlParamVoices.split(',');
        for (let i = 1; i <= selVoices.length; i++) {
            const selectId = 'voice_' + i;
            if (selVoices[i-1]) {
                if (document.getElementById(selectId) === null) addVoiceSelect();
                document.getElementById(selectId).value = selVoices[i-1];
            }
        }
        updateSelectedVoices();
    }

    // Editing an existing playlist?
    if (urlParamEdit !== null) {
        getPlaylist(urlParamEdit, false, true);
    }
}


// Functions
// if addToDom is false we'll only update the objects/arrays with the playlist data and won't change the DOM.
function getPlaylist(plsJSON, addToDom, editingPlaylist) {
    // Load in the JSON (via playlist.php for security and validation)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'playlist.php?pls_file=' + plsJSON, true);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == '200') {
            objConversation = JSON.parse(xhr.responseText);
            if (objConversation.success === true) {
                arrPlaylistDialogue = objConversation.dialogue;
                arrPlaylistVoices = objConversation.voices;

                if (addToDom) {
                    addPlaylistToDOM();
                    setTimeout(function () {
                        setPlaylistMetadata();
                        playPlaylist();
                    }, 1000);
                } else if (editingPlaylist) {
                    editPlaylist();
                }
            }
            else {
                document.getElementById('listen-to-this-convo').innerText = 'Error: ' + objConversation.error_msg;
            }
            
        } else {
            console.error(xhr.response);
        }
    };
    xhr.send();
}

function editPlaylist() {
    // Loop through each dialogue and add form fields and set their values
    for (let i = 0; i < arrPlaylistDialogue.length; i++) {
        addDialogueBox();
        if (null !== arrPlaylistDialogue[i]) {
            document.getElementsByName('con-voice[]')[i].value = arrPlaylistDialogue[i].service + '__' + arrPlaylistDialogue[i].voice.id;
            document.getElementsByName('con-text[]')[i].innerText = arrPlaylistDialogue[i].text;
        }
    }
}

// Generate HTML for the voice <select>'s
function generateSelectHtml() {

    // Iterate over each group of voices
    let selVoice, voiceName = '', voiceAccent = '';
    for (const voiceGroup in ttsServices) {
        const voices = ttsServices[voiceGroup].voices;

        // Add an optgroup for this API if it's valid for conversations
        if (validServices.includes(voiceGroup)) {
            voiceSelectHTML += '<optgroup label="' + voiceGroup + '" data-charlimit="' + ttsServices[voiceGroup].charLimit + '">';

            // Add options for each voice
            for (let i = 0; i < voices.length; i++) {
                // Set voice name
                voiceName = voices[i].name;
                if (voiceName.length == 0) {
                    // If the voice is not named, use the language
                    voiceName = voices[i].lang;
                    // Include accent/region if applicable
                    if (voices[i].accent.length > 0) {
                        voiceName += ' (' +  voices[i].accent + ')';
                    }
                } else {
                    // Append language and accent/region if applicable
                    voiceAccent = voices[i].accent.length > 0 ? ', ' + voices[i].accent : '';
                    voiceName += ' (' + voices[i].lang + voiceAccent + ')';
                }

                const voiceId = voiceGroup + '__' + voices[i].vid;
                voiceSelectHTML += '<option value="' + voiceId + '" data-desc="' + voiceName + '" data-voice-name="' + voices[i].name + '">' + voiceName + '</option>';
            }

            // Close optgroup
            voiceSelectHTML += '</optgroup>';
        }
    }

    // voiceSelectHTML is a global variable so no need to return it
}

// Insert <option> tags to our voice <select>s, or a specific given <select> element
// Also add event listener
function populateSelects(e) {
    if (e !== null) {
        e.innerHTML = voiceSelectHTML;
        e.addEventListener('change', updateSelectedVoices);
    } else {
        let allVoiceSelects = document.getElementsByName('voice[]');
        for (let i = 0; i < allVoiceSelects.length; i++) {
            allVoiceSelects[i].innerHTML = voiceSelectHTML;
            allVoiceSelects[i].addEventListener('change', updateSelectedVoices);
        }
    }
}

// Add another voice <select>
function addVoiceSelect() {
    const voiceCount = document.getElementsByName('voice[]').length;
    const nextVoiceNo = voiceCount + 1;

    const selectHtml = '<div class="column is-one-third"><div class="field"><label for="voice_' + nextVoiceNo + '" class="label">Voice ' + nextVoiceNo + '</label><div class="control select is-rounded"><select id="voice_' + nextVoiceNo + '" name="voice[]"></select></div></div></div>';

    // Create a div element and add the above HTML in it
    let uselessDiv = document.createElement('div');
    uselessDiv.innerHTML = selectHtml;

    divContainer = document.getElementById('voice-selects');

    // Loop through each child element of the useless div and append them to our container
    // this avoids using innerHTML which would remove all elements (and user entered text with it) and recreate them
    while (uselessDiv.firstChild) {
        divContainer.appendChild(uselessDiv.firstChild);
    }

    // add <options> and event listener
    populateSelects(document.getElementById('voice_' + nextVoiceNo));
}

// Generate URL with currently selected voices
function updateSelectedVoices() {
    const allVoiceSelects = document.getElementsByName('voice[]');
    let selectedVoices = [];

    for (let i = 0; i < allVoiceSelects.length; i++) {
        selectedVoices.push(allVoiceSelects[i].value);
    }

    // Change the URL in the address bar
    const newUrl = updateURLParameter(window.location.href, 'voices', selectedVoices);
    setNewUrl(newUrl);

    let voiceCount = 0; // actually selected voices, not "None"
    for (let i = 0; i < selectedVoices.length; i++) {
        if (selectedVoices[i]) voiceCount++;
    }

    // If we have at least 1 voice selected, enable the add dialogue button
    document.getElementById('btn-add-con').disabled = voiceCount > 0 ? false : true;

    // If we already have <select>s added we should update them all now
    let allSelects = document.getElementsByName('con-voice[]');
    if (voiceCount > 1 && allSelects.length > 0) {
        const optionHtml = generateOptionTags();
        for (let i = 0; i < allSelects.length; i++) {
            const selectedId = allSelects[i].selectedIndex;
            allSelects[i].innerHTML = optionHtml;
            allSelects[i].selectedIndex = selectedId;   // set selected index back to what it was
            updateTextareaAttributes(allSelects[i]);    // update the <select>'s corresponding textarea attributes
        }
    }
}

// Add a dialogue box (<select> with our chosen voices and corresponding <textrea>)
function addDialogueBox() {
    // HTML we want to add
    const randomId = random(8);
    const selectId = 'con-voice-' + randomId;
    const buttonId = 'con-delete-' + randomId;
    const textId = 'con-text-' + randomId;
    const conVoiceDropdown = '<div class="control select is-rounded"><select id="' + selectId + '" name="con-voice[]"></select></div>';
    const conBtnRemove = '<div class="control"><button id="' + buttonId + '" type="button" class="delete has-background-danger-dark"></button></div>';
    const conTextInput = '<div class="control"><textarea id="' + textId + '" name="con-text[]" rows="3" cols="80" maxlength="550" class="textarea dialogue" placeholder="Enter some text here..."></textarea><span class="is-pulled-right is-size-7 has-text-right"><span name="chars[]">0</span>/<span name="charlimit[]">-</span></span></div>';
    const divBox = '<div class="box"><div class="field is-grouped">' + conVoiceDropdown + conBtnRemove + '</div><div class="field">' + conTextInput + '</div></div>';

    // Create a div element and add the above HTML in it
    const uselessDiv = document.createElement('div');
    uselessDiv.innerHTML = divBox;

    let divContainer = document.getElementById('con-voice-and-text-input');

    // Loop through each child element of the useless div and append them to our container
    // this avoids using innerHTML which would remove all elements (and user entered text with it) and recreate them
    while (uselessDiv.firstChild) {
        divContainer.appendChild(uselessDiv.firstChild);
    }

    // Event listeners
    document.getElementById(selectId).addEventListener('change', function(event){updateTextareaAttributes(document.getElementById(selectId))});
    document.getElementById(buttonId).addEventListener('click', function(event){removeDialogueBox(document.getElementById(buttonId))});
    document.getElementById(textId).addEventListener('input', function(event){handleConvoInput(document.getElementById(textId))});

    const optionHtml = generateOptionTags();

    // Get all our <select>s
    const allSelects = document.getElementsByName('con-voice[]');
    allSelects[allSelects.length-1].innerHTML = optionHtml;
    updateTextareaAttributes(allSelects[allSelects.length-1]);  // set the <select>'s corresponding textarea attributes

    // At this point we'll have at least 1 dialogue box on the page so we can
    // enable to the speak button
    document.getElementById('btn-speak-con').disabled = false;

    selectedVoicesToArray();
}

// Remove a dialogue box
function removeDialogueBox(e) {
    e.parentNode.parentNode.parentNode.remove();

    // recount dialogue boxes and disable TTS generation if 0
    const dialogueCount = document.getElementsByName('con-text[]').length;
    if (dialogueCount === 0) document.getElementById('btn-speak-con').disabled = true;
}

// Generate <option> tag HTML for the <select>'s with our chosen voices in the dialogue boxes
function generateOptionTags() {
    // Populate the <select> with our chosen voices
    const voiceSelects = document.getElementsByName('voice[]');
    let optionHtml = '';
    for (let i = 0; i < voiceSelects.length; i++) {
        const selectId = 'voice_' + (i + 1);
        const ttsService = document.querySelector('#' + selectId + ' option:checked').parentElement;

        const charLimit = ttsService.dataset.charlimit;
        const serviceName = ttsService.label;
        const voiceId = voiceSelects[i].value;
        const selIdx = voiceSelects[i].selectedIndex;
        const voiceName = voiceSelects[i].options[selIdx].label;
        const voiceNameShort = voiceSelects[i].options[selIdx].dataset.voiceName;

        if (voiceId) optionHtml += '<option value="' + voiceId + '" data-charlimit="' + charLimit + '" data-api="' + serviceName + '" data-voice-name="' + voiceNameShort + '">' + voiceName + '</option>';
    }

    return optionHtml;
}

// Show the user the current character count of this textarea
function handleConvoInput(textarea) {
    const thisDialogueVoice = textarea.parentNode.parentNode.parentNode.getElementsByTagName('select')[0];
    const idxVoice = thisDialogueVoice.selectedIndex;
    const voiceOptionTag = thisDialogueVoice.options[idxVoice];
    const elChars = textarea.parentNode.getElementsByTagName('span')[1];
    const elCharCount = textarea.parentNode.getElementsByTagName('span')[0];

    // Count characters used
    characterCount(textarea, elChars, elCharCount, voiceOptionTag.dataset.api);
}

// Show character count/limit
function characterCount(textarea, elChars, elCharCount, service) {
    // Some services count bytes rather than characters
    const thisText = textarea.value;
    const api = service == null ? getSelectedVoice().dataset.api : service;
    const curLength = ttsServices[api].countBytes === true ? byteCount(thisText.trim()) : thisText.trim().length;
    elChars.innerHTML = curLength;

    // if current length is near the max length change colour to red
    if (curLength > (textarea.maxLength - 10)) {
        elCharCount.classList.add('has-text-danger');
    } else {
        elCharCount.classList.remove('has-text-danger');
    }
}

// Count bytes of text string
// https://stackoverflow.com/a/12203648/403476
function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

// Convert gender letter to Emoji
function genderLetterToEmoji(voice) {
    if (voice.gender == 'M') {
        return '\u2642';
    } else if (voice.gender == 'F') {
        return '\u2640';
    } else if (voice.gender == 'O') {
        if (voice.customEmoji) return voice.customEmoji;
        return '\u2753';
    }

    return '\u2753';
}

// Set the correct maxlength based on the API being used and make this visible to users in span.character-count[]
function updateTextareaAttributes(voiceSelect) {
    console.log();
    const idxVoice = voiceSelect.selectedIndex;
    const voiceOptionTag = voiceSelect.options[idxVoice];

    const dialogueContainer = voiceSelect.parentNode.parentNode.parentNode;
    const elCharCount = dialogueContainer.getElementsByTagName('span')[2];
    const thisVoiceTextarea = dialogueContainer.getElementsByTagName('textarea')[0];
    elCharCount.innerHTML = voiceOptionTag.dataset.charlimit;
    thisVoiceTextarea.maxLength = voiceOptionTag.dataset.charlimit;
}

// Make all the calls to the TTS APIs and show user the progress
function generateConversation() {
    // Loop through each textarea and its respective voice selection
    const arrayVoices = document.getElementsByName('con-voice[]');
    const arrayTexts = document.getElementsByName('con-text[]');
    const count = arrayTexts.length;

    currentPos++;

    if (currentPos == 0) {
        // We are starting a new playlist so reset everything
        document.getElementById('con-audio-output').scrollIntoView();
        document.getElementById('progress-done').classList.add('is-hidden');
        document.getElementById('progress-bar').classList.add('is-dark');
        document.getElementById('progress-bar').classList.remove('is-success');
        document.getElementById('progress-bar').value = 0;
        document.getElementById('tts-playlist').innerHTML = '';
        arrPlaylistDialogue = [];
        arrPlaylistVoices = [];
    }

    if (currentPos < count) {
        const voiceInfo = arrayVoices[currentPos].value.split('__');
        // set variables
        const text = arrayTexts[currentPos].value.trim();
        const api = voiceInfo[0];
        const voice = voiceInfo[1];
        const selIdx = arrayVoices[currentPos].selectedIndex;
        const voiceName = arrayVoices[currentPos].options[selIdx].dataset.voiceName;

        updateProgress(currentPos, count);

        // If the text isn't empty we'll generate a TTS URL, otherwise just call this again to skip it.
        if (text.length > 0) fetchTTSUrl(api, voice, text, voiceName, currentPos);
        else generateConversation();
    } else {
        // we've finished generating the audio clips
        currentPos = -1;
        document.getElementById('progress-bar').value = 100;
        document.getElementById('progress-done').classList.remove('is-hidden');
        selectedVoicesToArray();
        addPlaylistToDOM();
        playPlaylist();
    }
}

function fetchTTSUrl(api, voice, text, voice_name, playlist_index) {
    // this is based on the generateTTSUrl() function but with UI stuff changed for playlist building

    // Send request to the server to get around CORS issues
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        const response = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == '200') {
            //console.log(response);
            dialogueToArray(response);
        } else {
            console.error(response);
        }

    };
    xhr.open('POST', 'request_tts.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('service=' + encodeURIComponent(api) + '&voice=' + encodeURIComponent(voice) + '&text=' + encodeURIComponent(text) + '&voice_name=' + encodeURIComponent(voice_name) + '&playlist_index=' + playlist_index);
}

// Update HTML progress bar
function updateProgress(currentPos, count) {
    const num = currentPos+1;
    const progressPct = Math.floor((currentPos / count) * 100);
    document.getElementById('progress-msg').innerHTML = 'Processing TTS audio: <span class="has-text-weight-bold">' + num + '/' + count + '</span>';
    document.getElementById('progress-bar').classList.add('is-success');
    document.getElementById('progress-bar').classList.remove('is-dark');
    document.getElementById('progress-bar').value = progressPct;
}

// Loop through arrPlaylistDialogue and add each <audio> element to the DOM
// If isPlaylistPage is true, an expanded version will be shown with transcripts etc.
// if it isn't, a small condensed version will be shown (for the conversation page).
function addPlaylistToDOM() {
    let playlistHtml = '';

    for (let i = 0; i < arrPlaylistDialogue.length; i++) {
        // Check this index isn't undefined (if it is it's probably audio we skipped over due to an error)
        if (arrPlaylistDialogue[i] !== undefined && arrPlaylistDialogue[i] !== null) {
            playlistHtml += isPlaylistPage ? '<div class="box"><div class="columns"><div class="column is-one-fifth">' : '';
            playlistHtml += '<strong>' + arrPlaylistDialogue[i].voice.name + '</strong><br/>';
            playlistHtml += isPlaylistPage ? '<span id="btn-transcript-' + i + '" class="button is-small is-link">Show transcript</span></div><div class="column">' : '';
            playlistHtml += '<audio controls preload="metadata" src="' + arrPlaylistDialogue[i].audio_url + '" title="TTS Audio - ' + arrPlaylistDialogue[i].voice.name + '" data-track-number="' + (i+1) + '" id="playlist-track-' + (i+1) + '"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
            playlistHtml += isPlaylistPage ? '</div></div><blockquote class="is-hidden" id="transcript-' + i + '">' + arrPlaylistDialogue[i].text + '</blockquote></div>' : '<br/>';
        }
    }
    playlistHtml += '<br /><br /><div class="field is-grouped"><div class="control"><button id="btn-copy-playlist-url" type="button" class="button is-success"">Share Playlist</button></div>';
    if (isPlaylistPage) {
        const voiceIds = [];
        for (let v = 0; v < arrPlaylistVoices.length; v++) {
            voiceIds.push(arrPlaylistVoices[v].id);
        }
        playlistHtml += '<div class="control"><a href="./conversation.php?voices=' + Array.from(voiceIds).join(",") + '&amp;edit=' + urlParamPls + '" id="btn-edit-playlist" class="button is-success">Edit This Playlist</a></div>';
    }
    playlistHtml += '</div>';

    document.getElementById('tts-playlist').innerHTML = playlistHtml;

    // Event listeners
    document.getElementById('btn-copy-playlist-url').addEventListener('click', function(event){sharePlaylist(document.getElementById('btn-copy-playlist-url'));});
    if (isPlaylistPage) {
        for (let i = 0; i < arrPlaylistDialogue.length; i++) {
            // Check this index isn't undefined (if it is it's probably audio we skipped over due to an error)
            if (arrPlaylistDialogue[i] !== undefined && arrPlaylistDialogue[i] !== null) {
                let transcriptBtn = 'btn-transcript-' + i;
                document.getElementById(transcriptBtn).addEventListener('click', function(event){toggleTranscript(i);});
            }
        }
    }
}

// calculate full duration of playlist
function playlistDuration() {
    const audioElements = document.querySelectorAll("audio[data-track-number]");
    let duration = 0;

    for (let i = 0; i < audioElements.length; i++) {
        duration += isNaN(audioElements[i].duration) ? 0 : audioElements[i].duration;
    }

    const fmtDuration = new Date(duration * 1000).toISOString().substring(14, 19);
    document.getElementById('cnvrstn-duration').innerHTML = 'Duration: ~' + fmtDuration;
    //console.log('Duration: ' + duration + ' or formatted as: ' + fmtDuration);
}

// add playlist metadata to page
function setPlaylistMetadata() {
    // Show the total duration
    playlistDuration();

    // Get the names of voices used
    const voiceNames = [];
    for (let i = 0; i < arrPlaylistVoices.length; i++) {
        voiceNames.push(arrPlaylistVoices[i].name);
    }

    // Show the participants (voice names)
    document.getElementById('listen-to-this-convo').innerHTML = 'TTS conversation featuring ' + Array.from(voiceNames).join(", ");
}

// play the playlist
function playPlaylist() {
    let audioElements = document.querySelectorAll("audio[data-track-number]");

    if (audioElements.length > 0) {
        lastTrackNo = parseInt(audioElements[audioElements.length - 1].dataset.trackNumber);

        for (let i = 0; i < audioElements.length; i++) {
            audioElements[i].addEventListener('playing', function(e) {
                //console.log('Audio playback started on track ' + e.target.dataset.trackNumber + ' at ' + e.target.currentTime + ' seconds.');
            });
            audioElements[i].addEventListener('ended', function(e) {
                //console.log('Audio playback has ended on track ' + e.target.dataset.trackNumber);
                playNext(parseInt(e.target.dataset.trackNumber) + 1);
            });
        }

        audioElements[0].play();
    }
}

// play the next track
function playNext(nextTrackNo) {
    //console.log('attempting to play track ' + nextTrackNo);
    const nextTrack = document.getElementById('playlist-track-' + nextTrackNo);
    if (nextTrack !== null) {
        nextTrack.play().catch(function() {
            console.log('Failed to play track ' + nextTrackNo);
            console.log('Skipping to next track...');
            nextTrackNo++;
            playNext(nextTrackNo);
        });
    } else if (nextTrackNo <= lastTrackNo) {
        console.log('Track ' + nextTrackNo + ' is missing. Trying the next track...');
        nextTrackNo++;
        playNext(nextTrackNo);
    }
}

// Show/hide transcript of the audio
function toggleTranscript(i) {
    const transcriptBox = document.getElementById('transcript-' + i);
    const transcriptBtn = document.getElementById('btn-transcript-' + i);
    transcriptBox.classList.toggle('is-hidden');
    transcriptBox.classList.contains('is-hidden') ? transcriptBtn.innerHTML = 'Show transcript' : transcriptBtn.innerHTML = 'Hide transcript';
}


// Creates an object containing information on the voices the user has selected for this conversation
function selectedVoicesToArray() {
    const voiceOptions = document.querySelector("select[name='con-voice[]']").options;

    arrPlaylistVoices = [];
    for (let i = 0; i < voiceOptions.length; i++) {
        let voiceInfo = {};
        voiceInfo.id = voiceOptions[i].value;
        voiceInfo.name = voiceOptions[i].innerText;
        arrPlaylistVoices[i] = voiceInfo;
    }
}

// Creates/adds to an object containing information on the conversation dialogue
// this includes its position in the playlist, the voice used, the text, and the URL of the audio
// Only to be called via the XHR response
function dialogueToArray(result) {
    if (result.success === true) {
        const playlistIndex = parseInt(result.meta.playlist_index);

        let dialogue = {};
        dialogue.voice = {}
        dialogue.voice.id = result.meta.voice_id;
        dialogue.voice.name = result.meta.service + ' - ' + result.meta.voice_name;
        dialogue.service = result.meta.service;
        dialogue.text = result.meta.text;
        dialogue.audio_url = result.audio_url;

        arrPlaylistDialogue[playlistIndex] = dialogue;
    } else {
        // show an error?
        console.log('Dialogue skipped. Reason: ' + result.error_msg);
    }

    // Call generateConversation() again to continue going through the input
    generateConversation();
}

// Convert all the conversation data to a JSON string ready for writing to a file.
function conversationToJSON() {
    objConversation = {};
    objConversation.success = true;
    objConversation.voices = arrPlaylistVoices;
    objConversation.dialogue = arrPlaylistDialogue;

    return JSON.stringify(objConversation);
}

// Saves all conversation data to a playlist (JSON file)
// Returns shareable URL on success
function sharePlaylist(e) {
    if (isPlaylistPage) {
        copyToClipboard(null, e, window.location.href);
    }
    else {
        // Put the contents of our voice and dialogue arrays into a JSON string
        const filecontents = conversationToJSON();

        // Generate a unique name
        const now = new Date();
        const dateString = now.toISOString().substring(0, 23).replace(/\D/g, '');   // only numeric characters
        const filename = dateString + '_' + random(6);

        // Save the JSON data server side for sharing (we'll also validate the data there for security purposes)
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(xhr.responseText);
            const response = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == '200') {
                //console.log(response);
                if (response.success === true) {
                    // Copy playlist URL to clipboard
                    copyToClipboard(null, e, response.playlist_url);
                }
                else {
                    showErrorMessage(response.error_msg);
                }
            } else {
                console.error(response);
            }

        };
        xhr.open('POST', 'playlist.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('save=1&name=' + encodeURIComponent(filename) + '&json=' + encodeURIComponent(filecontents));
    }
}

// Copy audio link to clipboard
function copyToClipboard(e, copyBtn, textToCopy) {
    var audioUrl = typeof textToCopy === 'undefined' ? document.getElementById('audioplayer').src : textToCopy;

    // Create a temporary text <input> to contain the URL of the audio clip, which we can then select and copy
    var tempInput = document.createElement('input');
    tempInput.type = 'text';
    tempInput.value = audioUrl;
    document.body.appendChild(tempInput);

    // Select and copy
    // on iOS? Need to do a hacky workaround for this to work
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        // Set input's contentEditable to true
        tempInput.contentEditable = true;
        tempInput.readOnly = true;

        // create a selectable range
        var range = document.createRange();
        range.selectNodeContents(tempInput);

        // select the range
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        tempInput.setSelectionRange(0, 9999);

        // revert contentEditable back to false
        tempInput.contentEditable = false;
    } else {
        tempInput.select();
    }
    document.execCommand('Copy');

    // Remove element
    document.body.removeChild(tempInput);

    // Tell user the good news!
    copyBtn = typeof copyBtn === 'undefined' ? document.getElementById('copylinkbutton') : copyBtn;

    const origText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    //copyBtn.classList.add('is-success');

    setTimeout(() => {
        copyBtn.textContent = origText;
        //copyBtn.classList.remove('is-success');
    }, 2000);
}

// change URL paramaters
// https://stackoverflow.com/a/10997390/403476
function updateURLParameter(url, param, paramVal)
{
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL)
    {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (var i=0; i<tempArray.length; i++)
        {
            if(tempArray[i].split('=')[0] != param)
            {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }
    else
    {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if(TheParams)
            baseURL = TheParams;
    }

    if(TheAnchor)
        paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

// Update the URL in the browser's address bar
function setNewUrl(newUrl) {
    if (window.history.replaceState) {
       // prevents browser from storing history with each change:
       window.history.replaceState('', document.getElementsByTagName('title')[0].innerHTML, newUrl);
    }
}