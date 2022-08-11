// Global variables
var playlistArray = [];
var playlistVoiceArray = [];
var currentPos = -1;
var voiceSelectHTML = '<option value="">-- None --</option>';

// Current URL paramaters (var url is defined in tts.js
var urlParamVoices = url.searchParams.get('voices');
var urlParamTracks = url.searchParams.get('tracks');


// playlist page
if (urlParamTracks !== null) {
    // recreate full URLs of the audio clips
    var tracks = urlParamTracks.split(',');

    // loop through each TTS URL and only leave the filename to keep URLs as short as possible
    for (var i = 0; i < tracks.length; i++) {
        var trackUrl = tracks[i].replace('P__', window.location.origin + '/tts/assets/audio/Polly');
        trackUrl = trackUrl.replace('Cere__', 'https://cerevoice.s3.amazonaws.com/');
        trackUrl += '.mp3';
        playlistArray.push(trackUrl);

        // Retrieve voice name out of the URL so we can show who is speaking
        var filename = trackUrl.substring(trackUrl.lastIndexOf('/') + 1);
        var matchCere = filename.match(/([a-zA-Z]+)480001([a-z0-9]{32}).mp3/);
        if (matchCere !== null) {
            playlistVoiceArray.push(matchCere[1]);
        }
        else {
            var matchPolly = filename.match(/Polly([a-zA-Z]+)([a-z0-9]{32}).mp3/);
            playlistVoiceArray.push(matchPolly[1]);
        }
    }

    addPlaylistToDOM();
    playPlaylist();
}
// make conversation page
else {

    // Generate HTML <option>s for the voice <select>s and add it to the DOM
    generateSelectHtml();
    populateSelects(null);

    // Pre-select voices if we have URL params
    if (urlParamVoices) {
        var selVoices = [];
        selVoices = urlParamVoices.split(',');
        for (var i = 1; i <= selVoices.length; i++) {
            var selectId = 'voice_' + i;
            if (selVoices[i-1]) {
                if (document.getElementById(selectId) === null) addVoiceSelect();
                document.getElementById(selectId).value = selVoices[i-1];
            }
        }
        updateSelectedVoices();
    }
}


// Functions

// Generate HTML for the voice <select>'s
function generateSelectHtml() {

    // Iterate over each group of voices
    for (var voiceGroup in ttsServices) {
        var voices = ttsServices[voiceGroup].voices;

        // Add an optgroup for this API
        voiceSelectHTML += '<optgroup label="' + voiceGroup + '" data-charlimit="' + ttsServices[voiceGroup].charLimit + '">';

        // Add options for each voice
        for (var i = 0; i < voices.length; i++) {
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

            var voiceId = voiceGroup + '__' + voices[i].vid;
            voiceSelectHTML += '<option value="' + voiceId + '" data-desc="' + voiceName + '">' + voiceName + '</option>';
        }

        // Close optgroup
        voiceSelectHTML += '</optgroup>';
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
        var allVoiceSelects = document.getElementsByName('voice[]');
        for (var i = 0; i < allVoiceSelects.length; i++) {
            allVoiceSelects[i].innerHTML = voiceSelectHTML;
            allVoiceSelects[i].addEventListener('change', updateSelectedVoices);
        }
    }
}

// Add another voice <select>
function addVoiceSelect() {
    var voiceCount = document.getElementsByName('voice[]').length;
    var nextVoiceNo = voiceCount + 1;

    var selectHtml = '<div class="column is-one-third"><div class="field"><label for="voice_' + nextVoiceNo + '" class="label">Voice ' + nextVoiceNo + '</label><div class="control select is-rounded"><select id="voice_' + nextVoiceNo + '" name="voice[]"></select></div></div></div>';

    // Create a div element and add the above HTML in it
    var uselessDiv = document.createElement('div');
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
    var allVoiceSelects = document.getElementsByName('voice[]');
    var selectedVoices = [];

    for (var i = 0; i < allVoiceSelects.length; i++) {
        selectedVoices.push(allVoiceSelects[i].value);
    }

    // Change the URL in the address bar
    var newUrl = updateURLParameter(window.location.href, 'voices', selectedVoices);
    setNewUrl(newUrl);

    var voiceCount = 0; // actually selected voices, not "None"
    for (i = 0; i < selectedVoices.length; i++) {
        if (selectedVoices[i]) voiceCount++;
    }

    // If we have at least 1 voice selected, enable the add dialogue button
    document.getElementById('btn-add-con').disabled = voiceCount > 0 ? false : true;

    // If we already have <select>s added we should update them all now
    var allSelects = document.getElementsByName('con-voice[]');
    if (voiceCount > 1 && allSelects.length > 0) {
        var optionHtml = generateOptionTags();
        for (i = 0; i < allSelects.length; i++) {
            var selectedId = allSelects[i].selectedIndex;
            allSelects[i].innerHTML = optionHtml;
            allSelects[i].selectedIndex = selectedId;   // set selected index back to what it was
        }
    }
}

function addDialogueBox() {
    // HTML we want to add
    var conVoiceDropdown = '<div class="control select is-rounded"><select name="con-voice[]"></select></div>';
    var conBtnRemove = '<div class="control"><button type="button" class="button is-danger" onclick="removeDialogueBox(this)">X</button></div>';
    var conTextInput = '<div class="control"><textarea name="con-text[]" rows="3" cols="80" maxlength="550" class="textarea dialogue" placeholder="Enter some text here..."></textarea></div>';
    var divBox = '<div class="box"><div class="field is-grouped">' + conVoiceDropdown + conBtnRemove + '</div><div class="field">' + conTextInput + '</div></div>';

    // Create a div element and add the above HTML in it
    var uselessDiv = document.createElement('div');
    uselessDiv.innerHTML = divBox;

    divContainer = document.getElementById('con-voice-and-text-input');

    // Loop through each child element of the useless div and append them to our container
    // this avoids using innerHTML which would remove all elements (and user entered text with it) and recreate them
    while (uselessDiv.firstChild) {
        divContainer.appendChild(uselessDiv.firstChild);
    }

    var optionHtml = generateOptionTags();

    // Get all our <select>s
    var allSelects = document.getElementsByName('con-voice[]');
    allSelects[allSelects.length-1].innerHTML = optionHtml;

    // At this point we'll have at least 1 dialogue box on the page so we can
    // enable to the speak button
    document.getElementById('btn-speak-con').disabled = false;
}

function removeDialogueBox(e) {
    e.parentNode.parentNode.parentNode.remove();

    // recount dialogue boxes and disable TTS generation if 0
    var voiceCount = document.getElementsByName('con-text[]').length;
    if (voiceCount === 0) document.getElementById('btn-speak-con').disabled = true;
}

function generateOptionTags() {
    // Populate the <select> with our chosen voices
    var voiceSelects = document.getElementsByName('voice[]');
    var chosenVoices = [];
    var optionHtml = '';
    for (var i = 0; i < voiceSelects.length; i++) {
        var selectId = 'voice_' + (i + 1);
        var ttsService = document.querySelector('#' + selectId + ' option:checked').parentElement;

        var charLimit = ttsService.dataset.charlimit;
        var serviceName = ttsService.label;
        var voiceId = voiceSelects[i].value;

        //var uniqueVoiceSelector = serviceName + '___' + voiceId + '___' + charLimit;
        //console.log(uniqueVoiceSelector);
        var thisVoiceName = voiceId.split('__');
        if (voiceId) optionHtml += '<option value="' + voiceId + '">' + thisVoiceName[1] + '</option>';
    }

    return optionHtml;
}

function generateConversation() {
    // Loop through each textarea and its respective voice selection
    var arrayVoices = document.getElementsByName('con-voice[]');
    var arrayTexts = document.getElementsByName('con-text[]');
    var count = arrayTexts.length;

    currentPos++;

    if (currentPos == 0) {
        // We are starting a new playlist so reset everything
        document.getElementById('con-audio-output').scrollIntoView();
        document.getElementById('progress-done').classList.add('is-hidden');
        document.getElementById('progress-bar').classList.add('is-dark');
        document.getElementById('progress-bar').classList.remove('is-success');
        document.getElementById('progress-bar').value = 0;
        document.getElementById('tts-playlist').innerHTML = '';
        playlistArray = [];

    }

    if (currentPos < count) {
        var voiceInfo = arrayVoices[currentPos].value.split('__');
        // set variables
        var text = arrayTexts[currentPos].value.trim();
        var api = voiceInfo[0];
        var voice = voiceInfo[1];

        updateProgress(currentPos, count);

        fetchTTSUrl(api, voice, text);
    } else {
        // we've finished generating the audio clips
        currentPos = -1;
        document.getElementById('progress-bar').value = 100;
        document.getElementById('progress-done').classList.remove('is-hidden');
        addPlaylistToDOM();
        playPlaylist();
    }
}

function fetchTTSUrl(api, voice, text) {
    // this is based on the generateTTSUrl() function but with UI stuff changed for playlist building

    var url = ttsServices[api].url;

    // Send request to the server if it needs proxying to get around CORS issues
    if (ttsServices[api].needsProxy) {

        // Send request to our proxy script
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == '200') {
                //console.log(response);
                if (response.success === true) {
                    addAudioTagToArray(response.speak_url);
                } else if (response.error) {
                    //showErrorMessage(response.error);
                }
            } else {
                console.error(response);
            }

        };
        xhr.open('POST', 'proxy.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('service=' + encodeURIComponent(api) + '&voice=' + encodeURIComponent(voice) + '&text=' + encodeURIComponent(text));
    } else {
        // No need to proxy we can just replace some URL parameters

        // Google's default speed is 1, iSpeech uses 0, no other service has such a variable
        var speed = (api === 'Google Translate') ? 1 : 0;

        // Perform possible text replacements for this API
        url = url.replace('__LEN__', text.length);
        url = url.replace('__TEXT__', encodeURIComponent(text));
        url = url.replace('__LOCALE__', voice);
        url = url.replace('__VOICE__', voice);
        url = url.replace('__SPEED__', speed);

        addAudioTagToArray(url);
    }
}

// Add <audio> HTML to array
function addAudioTagToArray(ttsUrl) {
    playlistArray.push(ttsUrl);

    // Call generateConversation() again to continue going through the input
    generateConversation();
}

// Update HTML progress bar
function updateProgress(currentPos, count) {
    var num = currentPos+1;
    var progressPct = Math.floor((currentPos / count) * 100);
    document.getElementById('progress-msg').innerHTML = 'Processing TTS audio: <span class="has-text-weight-bold">' + num + '/' + count + '</span>';
    document.getElementById('progress-bar').classList.add('is-success');
    document.getElementById('progress-bar').classList.remove('is-dark');
    document.getElementById('progress-bar').value = progressPct;
}

// Loop through playlistArray and add each <audio> element to the DOM
function addPlaylistToDOM() {
    if (playlistArray.length > 0) {
        var playlistHtml = '';
        for (var i = 0; i < playlistArray.length; i++) {
            playlistHtml += '<div class="field is-grouped"><div class="control">' + playlistVoiceArray[i] + '</div><div class="control">';
            playlistHtml += '<audio controls preload="metadata" src="' + playlistArray[i] + '" title="TTS Audio Clip" data-track-number="' + (i+1) + '" id="playlist-track-' + (i+1) + '"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
            playlistHtml += '</div></div>';
        }
        playlistHtml += '<br /><br /><button id="btn-copy-playlist-url" type="button" class="button is-success" onclick="copyPlaylistUrl(this)">Copy Playlist URL</button>';

        document.getElementById('tts-playlist').innerHTML = playlistHtml;
    }
}

// play the playlist
function playPlaylist() {
    var audioElements = document.querySelectorAll("audio[data-track-number]");

    for (var i = 0; i < audioElements.length; i++) {
        audioElements[i].addEventListener('playing', function(e) {
            console.log('Audio playback started on track ' + e.target.dataset.trackNumber + ' at ' + e.target.currentTime + ' seconds.');
        });
        audioElements[i].addEventListener('ended', function(e) {
            console.log('Audio playback has ended on track ' + e.target.dataset.trackNumber);
            playNext(parseInt(e.target.dataset.trackNumber) + 1);
        });
    }

    audioElements[0].play();
}

// play the next track
function playNext(nextTrackNo) {
    console.log('attempting to play track ' + nextTrackNo);
    var nextTrack = document.getElementById('playlist-track-' + nextTrackNo);
    if (nextTrack !== null) nextTrack.play();
}

// generate shareable playlist link
function generatePlaylistUrl() {
    var playlistFilenames = [];
    var filename = '';

    // loop through each TTS URL and only leave the filename to keep URLs as short as possible
    for (var i = 0; i < playlistArray.length; i++) {
        filename = playlistArray[i].replace(window.location.origin + '/tts/assets/audio/Polly', 'P__');
        filename = filename.replace('https://cerevoice.s3.amazonaws.com/', 'Cere__');
        filename = filename.replace('.mp3', '');
        playlistFilenames.push(filename);
    }

    return window.location.origin + '/tts/playlist.php?tracks=' + playlistFilenames.toString();
}

function copyPlaylistUrl(e) {
    var textToCopy = generatePlaylistUrl();

    copyToClipboard(null, e, textToCopy);
}
