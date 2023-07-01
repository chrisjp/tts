import * as helper from './helpers.js';
// import ttsServices from './voices.json' assert {type: 'json'};
// Imagine living in a timeline where a popular browser didn't support this simple one-liners.
// Firefox *still* doesn't support imports with assertions so we have to resort to fetch()

// Load in all the voices for each supported service
let ttsServices = '';
let getVoices = await fetch('./assets/js/voices.json');
if (getVoices.ok) ttsServices = await getVoices.json();
else console.error("HTTP-Error: " + getVoices.status);

// Load CSS class names
let styles = styleClasses();
// If we detect the user wants dark mode we'll switch to that
if (getStyleMode() === 'mode-dark') toggleStyleMode();

// Constants
const defaultApi = 'Polly';
const defaultVoice = 'Brian';
const defaultLang = 'English';

// Demo URL paramaters
const url = new URL(window.location.href);
let urlParamVoice = url.searchParams.get('voice');
let urlParamApi = url.searchParams.get('service');
let urlParamLang = url.searchParams.get('lang');
let urlParamGender = url.searchParams.get('g');
let urlParamText = url.searchParams.get('text');
// Conversations/Playlists URL parameters
let urlParamVoices = url.searchParams.get('voices');
let urlParamPls = url.searchParams.get('pls');
let urlParamEdit = url.searchParams.get('edit');

// Conversations/Playlists variables
let objConversation = {};
let arrPlaylistVoices = [];
let arrPlaylistDialogue = [];
let currentPos = -1;
let voiceSelectHTML = '<option value="">-- None --</option>';
let isPlaylistPage = false;
let lastTrackNo = -1;


// Perform various functions depending on the page we've loaded
const currentPage = getCurrentPage();

if (currentPage === 'demo') {
    // DEMO PAGE

    // Iterate over each group of voices
    let buttonsHtml = '', selVoice, voiceName = '', voiceAccent = '', voiceCount = 0, langs = [];
    let selApi = !urlParamApi || urlParamApi == 'All' ? ' is-active' : '';
    let filterApiHtml = '<li class="tab tab-api has-text-weight-bold' + selApi + '" id="tab-All"><a>All</a></li>';
    for (let voiceGroup in ttsServices) {
        let voices = ttsServices[voiceGroup].voices;

        // Add a tab for this API
        selApi = urlParamApi == voiceGroup ? ' is-active' : '';
        filterApiHtml += '<li class="tab tab-api' + selApi +'" id="tab-' + voiceGroup.replace(' ', '') + '"><a>' + voiceGroup + '</a></li>';

        // Add a button to act as a heading for this API's voices
        buttonsHtml += '<a class="button button-voice button-heading ' + styles.button_bg + ' ' + styles.button_fg + ' has-text-left has-text-weight-bold is-fullwidth no-hover" data-api="' + voiceGroup + '">' + voiceGroup + '</a>' + "\n";

        // Loop through this API's voices
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
            // Add button
            selVoice = ((urlParamVoice == voices[i].vid) && (urlParamApi == voiceGroup)) || ( (!urlParamApi || !urlParamVoice) && (defaultVoice == voices[i].vid) && (defaultApi == voiceGroup) ) ? ' is-success selected-voice' : '';
            buttonsHtml += '<button type="button" class="button button-voice ' + styles.button_fg + ' is-rounded' + selVoice + '" title="' + voiceName + '" data-vid="' + voices[i].vid + '" data-api="' + voiceGroup + '" data-lang="' + voices[i].lang + '" data-gender="' + voices[i].gender + '" data-charlimit="' + ttsServices[voiceGroup].charLimit + '">' +
                        '<span class="voice-flag">' + countryCodeToEmoji(voices[i].flag) + '</span><span class="voice-name">' + voiceName +
                        '</span><span class="voice-gender">' + genderLetterToEmoji(voices[i]) + '</span></button>' + "\n";

            // Add language to array if necessary
            if (voices[i].lang && langs.indexOf(voices[i].lang) === -1) langs.push(voices[i].lang);
        }

        voiceCount += voices.length;
    }

    // Loop through languages
    langs.sort();
    let selLang = urlParamLang == 'All' ? ' is-success selected-lang' : ' ' + styles.button_fg + ' is-hidden';
    let langHtml = '<button type="button" class="button button-lang ' + styles.button_fg + ' is-rounded has-text-weight-bold' + selLang + '" data-lang="All">All</button>' + "\n";
    for (let i = 0; i < langs.length; i++) {
        selLang = (urlParamLang == langs[i]) || ( !urlParamLang && (defaultLang == langs[i]) ) ? ' is-success selected-lang' : ' is-light is-hidden';
        langHtml += '<button type="button" class="button button-lang ' + styles.button_fg + ' is-rounded' + selLang + '" data-lang="' + langs[i] + '">' + langs[i] + '</button>' + "\n";
    }

    // Genders
    let genders = ['Male', 'Female', 'Other'];
    let selGender = !urlParamGender || urlParamGender.toUpperCase() == 'A' ? ' is-active' : '';
    let filterGenderHtml = '<li class="tab tab-gender has-text-weight-bold' + selGender + '" id="tab-A"><a>All</a></li>';
    for (let i = 0; i < genders.length; i++) {
        selGender = (urlParamGender && urlParamGender.toUpperCase() == genders[i].charAt(0)) ? ' is-active' : '';
        filterGenderHtml += '<li class="tab tab-gender' + selGender +'" id="tab-' + genders[i].charAt(0) + '"><a>' + genders[i] + '</a></li>';
    }

    // Insert API and Gender filters
    document.getElementById('filter-api').innerHTML = '<ul><li class="tab"><a class="has-text-weight-bold no-hover" disabled>API</a></li>' + filterApiHtml + '</ul>';
    document.getElementById('filter-gender').innerHTML = '<ul><li class="tab"><a class="has-text-weight-bold no-hover" disabled>Gender</a></li>' + filterGenderHtml + '</ul>';

    // Insert buttons
    document.getElementById('voice-selection').innerHTML = buttonsHtml;
    document.getElementById('lang-selection').innerHTML = '<button id="toggleLangs" class="button ' + styles.button_fg + ' has-text-weight-bold">Language (show/hide)</button>' + langHtml;

    // Show exact voice count
    document.getElementById('voicecount').innerHTML = voiceCount;

    // Add Event Listeners
    let buttons = document.querySelectorAll('button.button-voice');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', selectVoice);
    }
    let apiTabs = document.getElementsByClassName('tab-api');
    for (let i = 0; i < apiTabs.length; i++) {
        apiTabs[i].addEventListener('click', selectApi);
    }
    let genderTabs = document.getElementsByClassName('tab-gender');
    for (let i = 0; i < genderTabs.length; i++) {
        genderTabs[i].addEventListener('click', selectGender);
    }
    let langTabs = document.getElementsByClassName('button-lang');
    for (let i = 0; i < langTabs.length; i++) {
        langTabs[i].addEventListener('click', selectLang);
    }
    document.getElementById('toggleLangs').addEventListener('click', toggleLangs);
    document.getElementById('btn-clear-shares').addEventListener('click', clearShares);
    document.getElementById('playbutton').addEventListener('click', generateTTSUrl);
    document.getElementById('copylinkbutton').addEventListener('click', copyToClipboard);
    document.getElementById('text').addEventListener('input', handleTextInput);

    // We may need to update the character limit if a different voice was selected by default via URL paramaters
    setCharLimit();

    // If lang isn't set via URL parameters let's make sure we start by only showing default (English) voices
    // which in turn will call updateVoiceList()
    // Otherwise we'll call updateVoiceList() directly to ensure any filters set by URL params are accounted for
    if (!urlParamLang) selectLang(null, defaultLang);
    else updateVoiceList();

    // If there is text present in the URL, put it in the textarea and play the audio
    if (urlParamText !== null && decodeURIComponent(urlParamText).trim().length > 0) {
        let textarea = document.getElementById('text');
        textarea.value = urlParamText;
        textarea.dispatchEvent(new Event('input'));     // setting value doesn't trigger an input event so we manually dispatch this
        generateTTSUrl();
    }

    // Ensure recent shares is populated if there are any
    updateRecentShares();
}
else if (currentPage === 'conversation') {
    // CONVERSATION PAGE
    document.getElementById('btn-add-voice').addEventListener('click', addVoiceSelect);
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
else if (currentPage === 'playlist') {
    // PLAYLIST PAGE
    isPlaylistPage = true;
    getPlaylist(urlParamPls, true, false);
}


/**
 * FUNCTIONS
 */


/**
 * Define CSS class names for various elements for if we're displaying light or dark mode
 *
 * @param {string} mode
 * @return {Object} 
 */
function styleClasses(mode) {
    let styles = {};
    mode = (mode === 'mode-dark') ? 'mode-dark' : 'mode-light';

    if (mode === 'mode-dark') {
        styles = {
            html_bg: 'has-background-black-bis',
            button_fg: 'is-dark',
            button_bg: 'has-background-darker',
        };
    } else {
        styles = {
            html_bg: 'has-background-white-bis',
            button_fg: 'is-light',
            button_bg: 'has-background-lighter',
        };
    }

    return styles;
}

/**
 * Toggle between light mode and dark mode
 * if manually toggling set a cookie to remember the user's preference
 * 
 * @param {boolean} clicked True if the user manually clicked on the button to change mode
 */
function toggleStyleMode(clicked) {
    let htmlTag = document.getElementsByTagName('html')[0];
    let curMode = htmlTag.classList[0];
    let newMode = curMode === 'mode-dark' ? 'mode-light' : 'mode-dark';
    let newStyles = styleClasses(newMode);

    htmlTag.classList.remove(curMode, styles.html_bg);
    htmlTag.classList.add(newMode, newStyles.html_bg);

    // Swap out all the button classes
    let buttonsVoice = document.querySelectorAll('.button-voice');
    let buttonsCopyandLang = document.querySelectorAll('.button-copy, .button-lang, #toggleLangs');

    for (let i = 0; i < buttonsVoice.length; i++) {
        buttonsVoice[i].classList.remove(styles.button_bg, styles.button_fg);
        buttonsVoice[i].classList.add(newStyles.button_bg, newStyles.button_fg);
    }
    for (let i = 0; i < buttonsCopyandLang.length; i++) {
        buttonsCopyandLang[i].classList.remove(styles.button_fg);
        buttonsCopyandLang[i].classList.add(newStyles.button_fg);
    }

    // Update global variable
    styles = newStyles;

    // Set cookie if toggle was manually clicked
    if (clicked) {
        let d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = "style=" + newMode + ";expires=" + d.toUTCString() + ";path=/;secure";
    }
}

/**
 * Get user's preferred style mode. Order of preference is as follows:
 * 1. Cookie value
 * 2. prefers-color-scheme set to 'dark' via the OS
 * 3. light mode
 *
 * @return {string} 
 */
function getStyleMode() {
    // Check for cookie first
    let value = "; " + document.cookie;
    let parts = value.split("; style=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    } else {
        // Check for OS dark mode
        if(matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'mode-dark';
        }
    }
    // otherwise use light mode
    return 'mode-light';
}

/**
 * Returns the current page name minus '.php'
 *
 * @return {string} 
 */
function getCurrentPage()
{
    const thisPageName = window.location.pathname.split('/').reverse()[0]
    if (thisPageName === 'playlist.php') return 'playlist';
    else if (thisPageName === 'conversation.php') return 'conversation';
    return 'demo';
}

/**
 * Return the currently selected voice
 *
 * @return {string} 
 */
function getSelectedVoice() {
    let selVoice = document.querySelectorAll('.button-voice.selected-voice')[0];

    return selVoice ? selVoice : document.getElementsByClassName('button-voice')[0];    // Return first voice as a fallback
}


/**
 * Return the currently selected API filter
 *
 * @return {string} 
 */
function getSelectedApi() {
    let selApi = document.querySelectorAll('.tab-api.is-active')[0];

    return selApi ? selApi : document.getElementById('tab-Polly');      // Return Polly as a fallback
}


/**
 * Return the currently selected gender filter
 *
 * @return {string} 
 */
function getSelectedGender() {
    let selGender = document.querySelectorAll('.tab-gender.is-active')[0];

    return selGender ? selGender : document.getElementById('tab-A');          // Return All as a fallback
}


/**
 * Return the currently selected language filter
 *
 * @return {string} 
 */
function getSelectedLang() {
    let selLang = document.querySelectorAll('.button-lang.selected-lang')[0];

    return selLang ? selLang : document.getElementsByClassName('button-lang')[0];    // Return All as a fallback
}


/**
 * Change selected API
 *
 * @param {Event} e
 * @param {string} tabName
 */
function selectApi(e, tabName) {
    let tabs = document.querySelectorAll(".tab-api");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("is-active");
    }

    let activeTab = e !== null ? e.currentTarget : document.getElementById("tab-" + tabName);
    activeTab.classList.add("is-active");

    updateVoiceList();
}


/**
 * Change selected gender
 *
 * @param {Event} e
 * @param {string} tabName
 */
function selectGender(e, tabName) {
    let tabs = document.querySelectorAll(".tab-gender");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("is-active");
    }

    let activeTab = e !== null ? e.currentTarget : document.getElementById("tab-" + tabName);
    activeTab.classList.add("is-active");

    updateVoiceList();
}

/**
 * Change selected language
 *
 * @param {Event} e
 * @param {string} tabName
 */
function selectLang(e, tabName) {
    let buttons = document.querySelectorAll(".button-lang");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("is-success");
        buttons[i].classList.remove("selected-lang");
        buttons[i].classList.add("is-light");
    }

    let activeTab = e !== null ? e.currentTarget : document.querySelectorAll("button[data-lang='" + tabName + "']")[0];
    activeTab.classList.add("selected-lang");
    activeTab.classList.add("is-success");
    activeTab.classList.remove("is-light");

    updateVoiceList();
}

/**
 * Update the voices matching our currently selected filters
 *
 */
function updateVoiceList() {
    const api = getSelectedApi().textContent;
    const gender = getSelectedGender().textContent.charAt(0);
    const lang = getSelectedLang().innerHTML;

    // Get all the buttons
    let b = document.querySelectorAll('.button-voice');

    // Loop through buttons and unhide any that match our filters, hide the rest
    for (let i = 0; i < b.length; i++) {
        if (
            ((lang != 'All' && b[i].getAttribute('data-lang') == lang) || lang == 'All' || b[i].getAttribute('data-lang') == null) &&
            ((api != 'All' && b[i].getAttribute('data-api') == api) || api == 'All') &&
            ((gender != 'A' && b[i].getAttribute('data-gender') == gender) || gender == 'A' || b[i].getAttribute('data-gender') == null)
        ) {
            b[i].classList.remove('is-hidden');
        } else {
            b[i].classList.add('is-hidden');
        }
    }
}

/**
 * When selecting a voice from the dropdown, set new char limit and URL
 *
 * @param {Event} e
 */
function selectVoice(e) {
    const selVoice = e ? e.currentTarget : getSelectedVoice();

    // Remove active state from all buttons
    let buttons = document.querySelectorAll('button.button-voice');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected-voice');
        buttons[i].classList.remove('is-success');
        buttons[i].classList.add('is-light');
    }
    // Add selected class to this button
    selVoice.classList.add('selected-voice');
    selVoice.classList.add('is-success');
    selVoice.classList.remove('is-light');

    // Set character limit on textarea
    setCharLimit();
}

/**
 * Change URL parameters in the browser's address bar based on user selections
 *
 * @param {string} selVoice
 * @param {string} text
 */
function changeUrl(selVoice, text) {
    selVoice = selVoice ? selVoice : getSelectedVoice();
    text = text ? text : document.getElementById('text').value.trim();

    let newUrl = helper.updateURLParameter(window.location.href, 'voice', selVoice.dataset.vid);
    newUrl = helper.updateURLParameter(newUrl, 'service', selVoice.dataset.api);
    newUrl = helper.updateURLParameter(newUrl, 'text', encodeURIComponent(text));
    newUrl = helper.updateURLParameter(newUrl, 'lang', getSelectedLang().textContent);
    newUrl = helper.updateURLParameter(newUrl, 'g', getSelectedGender().textContent.charAt(0));

    // Change the URL in the address bar
    helper.setNewUrl(newUrl);
}

/**
 * Show/hide buttons for language selection
 *
 */
function toggleLangs() {
    let currentLang = getSelectedLang();

    let langs = document.getElementsByClassName('button-lang');
    for (let i = 0; i < langs.length; i++) {
        if (!langs[i].classList.contains('selected-lang')) langs[i].classList.toggle('is-hidden');
    }
}

/**
 * Handle <textarea> input
 * Adjusts the height of the element to grow or shrink depending on amount of text entered.
 * Also calls characterCount() to keep current character count visible to user
 *
 * @param {Event} e
 */
function handleTextInput(e) {
    let textarea = e.currentTarget;

    // Autogrow the textarea, or reset if emptied
    if (textarea.value) {
        textarea.style.height = textarea.scrollHeight + 'px';
    } else {
        textarea.style.height = textarea.style.minHeight;
    }

    // Count characters used
    characterCount(textarea, document.getElementById('chars'), document.getElementById('character-count'));
}

/**
 * Generate URL to TTS output
 * POSTs to request_tts.php with the TTS request and returns JSON
 *
 */
function generateTTSUrl() {
    const voice = getSelectedVoice();
    const api = voice.dataset.api;
    const text = document.getElementById('text').value.trim();

    // Change the URL parameters
    changeUrl(voice);

    if (text.length > 0) {
        // Send request to the server to get around CORS issues
        // Show a loading spinner while the proxy sends/receives the request
        document.getElementById('playbutton').classList.add('is-loading');

        // Send request to our proxy script
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            //console.log(xhr.responseText);
            let response = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == '200') {
                console.log(response);
                if (response.success === true) {
                    showAudioPlayer(response.audio_url);
                } else {
                    showErrorMessage(response.error_msg);
                }
            } else {
                console.error(response);
            }

            // Remove loading spinner
            document.getElementById('playbutton').classList.remove('is-loading');
        };
        xhr.open('POST', 'request_tts.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('service=' + encodeURIComponent(api) + '&voice=' + encodeURIComponent(voice.dataset.vid) + '&text=' + encodeURIComponent(text));
    }
    else {
        showErrorMessage('No text entered.');
    }
}


/**
 * Generate URL to TTS output
 * POSTs to request_tts.php with the TTS request and returns JSON
 * Similar to generateTTSUrl() but with extra details for playlists
 *
 * @param {string} api
 * @param {string} voice
 * @param {string} text
 * @param {string} voice_name
 * @param {number} playlist_index
 */
function generateTTSUrlForPlaylist(api, voice, text, voice_name, playlist_index) {

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

/**
 * Add <audio> player to the DOM
 *
 * @param {string} ttsUrl
 */
function showAudioPlayer(ttsUrl) {
    let audioHtml = '<audio autoplay controls id="audioplayer" preload="metadata" src="' + ttsUrl + '" title="TTS Audio Clip"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
    document.getElementById('tts-player').innerHTML = audioHtml;
    document.getElementById('tts-player').classList.remove('is-hidden');
    document.getElementById('copylinkbutton').classList.remove('is-hidden');
}

/**
 * Show error message
 *
 * @param {string} message
 */
function showErrorMessage(message) {
    document.getElementById('tts-error-text').innerHTML = '<strong>Error:</strong> ' + message;
    document.getElementById('tts-error').classList.remove('is-hidden');
    setTimeout(() => {
        document.getElementById('tts-error').classList.add('is-hidden');
    }, 5000);
}

/**
 * Copy audio link to clipboard
 *
 * @param {Event} e
 * @param {HTMLElement} copyBtn
 * @param {string} textToCopy
 */
function copyToClipboard(e, copyBtn, textToCopy) {
    let audioUrl = typeof textToCopy === 'undefined' ? document.getElementById('audioplayer').src : textToCopy;

    // Create a temporary text <input> to contain the URL of the audio clip, which we can then select and copy
    let tempInput = document.createElement('input');
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
        let range = document.createRange();
        range.selectNodeContents(tempInput);

        // select the range
        let selection = window.getSelection();
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

    // Add to recents if this was triggered by an event (clicking the main copy link URL button)
    if (e !== null && currentPage === 'demo') addToRecentShares();
}

/**
 * Set character limit on a <textarea>
 * Also visibly show the limit to the user in #charlimit
 *
 */
function setCharLimit()
{
    const selectedVoice = getSelectedVoice();
    const newCharLimit = selectedVoice.dataset.charlimit;
    document.getElementById('text').maxLength = newCharLimit;
    document.getElementById('charlimit').innerHTML = newCharLimit;
    document.getElementById('text').dispatchEvent(new Event('input'));
}

/**
 * Show character count/limit
 *
 * @param {HTMLElement} textarea
 * @param {HTMLElement} elChars
 * @param {HTMLElement} elCharCount
 * @param {string} service
 */
function characterCount(textarea, elChars, elCharCount, service = null)
{
    const thisText = textarea.value.trim();
    // Some services count bytes rather than characters
    const api = service === null ? getSelectedVoice().dataset.api : service;
    const curLength = ttsServices[api].countBytes === true ? helper.byteCount(thisText) : thisText.length;
    elChars.innerHTML = curLength;

    // if current length is near the max length change colour to red
    if (curLength > (textarea.maxLength - 10)) {
        elCharCount.classList.add('has-text-danger');
    } else {
        elCharCount.classList.remove('has-text-danger');
    }
}

/**
 * Convert gender letter to Emoji
 *
 * @param {Object} voice
 * @return {string} 
 */
function genderLetterToEmoji(voice)
{
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

/**
 * Convert country code (ISO 3166-1 alpha-2) to emoji flag
 *
 * @param {string} countryCode
 * @return {string} 
 */
function countryCodeToEmoji(countryCode)
{
    // Windows doesn't support flag emojis so we'll display an image instead
    // There are also some edge cases for languages without a flag emoji (Arabic, Esperanto)

    let emoji = '\ud83c\udff3\ufe0f';   // white flag (default)
    let noFlag = (countryCode === 'ARAB' || countryCode === 'ESPER');   // "country" codes with no flag emoji
    let isWin = navigator.platform.indexOf('Win') > -1;     // check if user is on Windows - deprecated but this is a legitimate use case

    if ((isWin || noFlag) && countryCode.length !== 0) {
        emoji = countryCodeToImg(countryCode);
    }
    else if (countryCode && countryCode.length >= 2) {
        const offset = 127397;
        const firstChar = countryCode.codePointAt(0);
        const secondChar = countryCode.codePointAt(1);
        emoji = String.fromCodePoint(firstChar + offset) + String.fromCodePoint(secondChar + offset);

        // Handle special cases (England, Scotland, Wales) with subdivision flags
        if (countryCode.length === 6) {
            switch (countryCode.substring(3, 3)) {
                case 'ENG':
                emoji = '\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f';
                break;

                case 'SCT':
                emoji = '\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f';
                break;

                case 'WLS':
                emoji = '\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f';
                break;
            }
        }
    }

    return emoji;
}

/**
 * Convert country code (ISO 3166-1 alpha-2) to an <img> tag for its flag
 * This is mainly for Windows machines as they never have and never will(?) support flag emojis.
 * Also used for non-country entities that have a flag.
 *
 * @param {string} countryCode
 * @return {*} 
 */
function countryCodeToImg(countryCode)
{
    let imgUrl = '';

    // handle some edge cases where the language doesn't have a flag, or not available from this repo
    switch (countryCode) {
        case 'ARAB':    // used where the service uses a generic or non-specific Arabic dialect or accent
            imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League.svg';
            break;

        case 'ESPER':   // Esperanto - international language with no nation so won't ever be in flag-icon-css
            imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Esperanto.svg';
            break;

        default:
            imgUrl = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.7.0/flags/4x3/' + countryCode.toLowerCase() + '.svg';
    }

    return '<img src="' + imgUrl + '" alt="' + countryCode + ' flag" style="width:20px;" />';
}

/**
 * Update the recent shares <div> with what's in our storage
 *
 */
function updateRecentShares()
{
    if (typeof(Storage) !== "undefined") {
        let currentData = localStorage.getItem('recentShares');
        let recentHtml = '', audioHtml = '';
        let recentContainer = document.getElementById('recentTTS');

        if (currentData) {
            currentData = JSON.parse(currentData);
            const now = new Date();
            const tooOld = (now.getTime() / 1000) - (3600 * 48);   // 48 hours ago
            let deletions = false;

            for (let i = 0; i < currentData.length; i++) {
                // Remove this item if it's too old
                if ((currentData[i].time / 1000) < tooOld) {
                    currentData.splice(i, 1);
                    deletions = true;
                    i--;
                } else {
                    audioHtml = '<audio controls preload="metadata" src="' + currentData[i].audio_url + '" title="TTS Audio Clip"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
                    recentHtml += '<div class="columns recent">' +
                    '<div class="column is-one-fifth"><span class="recent-voice has-text-weight-bold">' + currentData[i].voice_name + '</span><br/>' +
                    '<span class="recent-time is-size-7 has-text-grey">' + helper.timeSince(now, new Date(currentData[i].time)) + '</span></div>' +
                    '<div class="column"><span class="recent-message is-italic">"' + (currentData[i].text.length > 250 ? currentData[i].text.substring(0, 250) + ' [...]' : currentData[i].text ) + '"</span></div>' +
                    '<div class="column is-two-fifths">' + audioHtml +
                    ' <button id="btn-copy-recent-' + i + '" type="button" class="button button-copy is-small ' + styles.button_fg + '">copy URL</button>' +
                    ' <button id="btn-remove-recent-' + i + '" type="button" class="button is-small is-danger">remove</button>' + '</div>' +
                    '</div>';
                }
            }

            // If we removed any entries update localStorage
            if (deletions) localStorage.setItem('recentShares', JSON.stringify(currentData));
        } else {
            recentHtml = '<em>No links copied yet!</em>';
        }

        recentContainer.innerHTML = recentHtml;

        if (currentData) {
            for (let i = 0; i < currentData.length; i++) {
                document.getElementById('btn-copy-recent-' + i).addEventListener('click', function(event){copyToClipboard(null, document.getElementById('btn-copy-recent-' + i), currentData[i].audio_url)});
                document.getElementById('btn-remove-recent-' + i).addEventListener('click', function(event){removeShare(i)});
            }
        }
    }
}

/**
 * Add the TTS data we shared to our recent shares
 *
 */
function addToRecentShares()
{
    if (typeof(Storage) !== "undefined") {
        const now = new Date();
        let currentData = localStorage.getItem('recentShares');
        let voice = getSelectedVoice();
        let dataArray = [];

        let newData = {
            'time': now.getTime(),
            'voice_name': voice.getElementsByClassName('voice-name')[0].innerText,
            'text': document.getElementById('text').value.trim(),
            'audio_url': document.getElementById('audioplayer').src
        };

        // If we've already got some data, unshift our new object to the beginning of the array
        // else we'll start it off at index 0, obviously.
        if (currentData) {
            dataArray = JSON.parse(currentData);
            dataArray.unshift(newData);
        } else {
            dataArray[0] = newData;
        }

        localStorage.setItem('recentShares', JSON.stringify(dataArray));
        updateRecentShares();
    }
}

/**
 * Clear local storage of all shares
 *
 */
function clearShares()
{
    localStorage.removeItem('recentShares');
    updateRecentShares();
}

/**
 * Remove a share from storage
 *
 * @param {number} index
 */
function removeShare(index)
{
    let currentData = JSON.parse(localStorage.getItem('recentShares'));
    currentData.splice(index, 1);

    localStorage.setItem('recentShares', JSON.stringify(currentData));
    updateRecentShares();
}

/**
 * Fetch playlist JSON and parse it
 * if addToDom is false we'll only update the objects/arrays with the playlist data and won't change the DOM.
 *
 * @param {string} plsJSON           The filename of the playlist JSON
 * @param {boolean} addToDom         Whether or not to add the playlist HTML to the DOM
 * @param {boolean} editingPlaylist  Whether or not we're currently editing an existing playlist
 */
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


/**
 * When editing a playlist we need to loop through each dialogue object and set the voice/text values
 *
 */
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


/**
 * Generate HTML for the voice <select>'s for a conversation
 *
 */
function generateSelectHtml() {

    // Iterate over each group of voices
    let selVoice, voiceName = '', voiceAccent = '';
    for (const voiceGroup in ttsServices) {
        const voices = ttsServices[voiceGroup].voices;

        // Add an optgroup for this API
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

    // voiceSelectHTML is a global variable so no need to return it
}


/**
 * Insert <option> tags to our voice <select>s on the conversation page, or a specific given <select> element
 * Also add event listener
 *
 * @param {Event} e
 */
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


/**
 * Add another voice <select> to the conversation page
 *
 */
function addVoiceSelect() {
    const voiceCount = document.getElementsByName('voice[]').length;
    const nextVoiceNo = voiceCount + 1;

    const selectHtml = '<div class="column is-one-third"><div class="field"><label for="voice_' + nextVoiceNo + '" class="label">Voice ' + nextVoiceNo + '</label><div class="control select is-rounded"><select id="voice_' + nextVoiceNo + '" name="voice[]"></select></div></div></div>';

    // Create a div element and add the above HTML in it
    let uselessDiv = document.createElement('div');
    uselessDiv.innerHTML = selectHtml;

    let divContainer = document.getElementById('voice-selects');

    // Loop through each child element of the useless div and append them to our container
    // this avoids using innerHTML which would remove all elements (and user entered text with it) and recreate them
    while (uselessDiv.firstChild) {
        divContainer.appendChild(uselessDiv.firstChild);
    }

    // add <options> and event listener
    populateSelects(document.getElementById('voice_' + nextVoiceNo));
}


/**
 * Generate URL with currently selected voices on conversation page
 *
 */
function updateSelectedVoices() {
    const allVoiceSelects = document.getElementsByName('voice[]');
    let selectedVoices = [];

    for (let i = 0; i < allVoiceSelects.length; i++) {
        selectedVoices.push(allVoiceSelects[i].value);
    }

    // Change the URL in the address bar
    const newUrl = helper.updateURLParameter(window.location.href, 'voices', selectedVoices);
    helper.setNewUrl(newUrl);

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

/**
 * Add a dialogue box (<select> with our chosen voices and corresponding <textrea>)
 *
 */
function addDialogueBox() {
    // HTML we want to add
    const randomId = helper.random(8);
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


/**
 * Remove a dialogue box
 *
 * @param {HTMLElement} e
 */
function removeDialogueBox(e) {
    e.parentNode.parentNode.parentNode.remove();

    // recount dialogue boxes and disable TTS generation if 0
    const dialogueCount = document.getElementsByName('con-text[]').length;
    if (dialogueCount === 0) document.getElementById('btn-speak-con').disabled = true;
}


/**
 * Generate <option> tag HTML for the <select>'s with our chosen voices in the dialogue boxes
 *
 * @return {string} 
 */
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

/**
 * Show the user the current character count of this textarea
 *
 * @param {HTMLElement} textarea
 */
function handleConvoInput(textarea) {
    const thisDialogueVoice = textarea.parentNode.parentNode.parentNode.getElementsByTagName('select')[0];
    const idxVoice = thisDialogueVoice.selectedIndex;
    const voiceOptionTag = thisDialogueVoice.options[idxVoice];
    const elChars = textarea.parentNode.getElementsByTagName('span')[1];
    const elCharCount = textarea.parentNode.getElementsByTagName('span')[0];

    // Count characters used
    characterCount(textarea, elChars, elCharCount, voiceOptionTag.dataset.api);
}

/**
 * Set the correct maxlength based on the API being used and make this visible to users in span.character-count[]
 *
 * @param {HTMLElement} voiceSelect
 */
function updateTextareaAttributes(voiceSelect) {
    const idxVoice = voiceSelect.selectedIndex;
    const voiceOptionTag = voiceSelect.options[idxVoice];

    const dialogueContainer = voiceSelect.parentNode.parentNode.parentNode;
    const elCharCount = dialogueContainer.getElementsByTagName('span')[2];
    const thisVoiceTextarea = dialogueContainer.getElementsByTagName('textarea')[0];
    elCharCount.innerHTML = voiceOptionTag.dataset.charlimit;
    thisVoiceTextarea.maxLength = voiceOptionTag.dataset.charlimit;
}


/**
 * Make all the calls to the TTS APIs and show user the progress
 *
 */
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
        if (text.length > 0) generateTTSUrlForPlaylist(api, voice, text, voiceName, currentPos);
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

/**
 * Update HTML progress bar
 *
 * @param {number} currentPos
 * @param {number} count
 */
function updateProgress(currentPos, count) {
    const num = currentPos+1;
    const progressPct = Math.floor((currentPos / count) * 100);
    document.getElementById('progress-msg').innerHTML = 'Processing TTS audio: <span class="has-text-weight-bold">' + num + '/' + count + '</span>';
    document.getElementById('progress-bar').classList.add('is-success');
    document.getElementById('progress-bar').classList.remove('is-dark');
    document.getElementById('progress-bar').value = progressPct;
}

/**
 * Loop through arrPlaylistDialogue and add each <audio> element to the DOM
 * If we're on the playlist page, an expanded version will be shown with transcripts.
 * Otherwise, a condensed version will be shown for the conversation page
 *
 */
function addPlaylistToDOM() {
    let playlistHtml = '';

    for (let i = 0; i < arrPlaylistDialogue.length; i++) {
        // Check this index isn't undefined (if it is it's probably audio we skipped over due to an error)
        if (arrPlaylistDialogue[i] !== undefined && arrPlaylistDialogue[i] !== null) {
            playlistHtml += currentPage === 'playlist' ? '<div class="box"><div class="columns"><div class="column is-one-fifth">' : '';
            playlistHtml += '<strong>' + arrPlaylistDialogue[i].voice.name + '</strong><br/>';
            playlistHtml += currentPage === 'playlist' ? '<span id="btn-transcript-' + i + '" class="button is-small is-link">Show transcript</span></div><div class="column">' : '';
            playlistHtml += '<audio controls preload="metadata" src="' + arrPlaylistDialogue[i].audio_url + '" title="TTS Audio - ' + arrPlaylistDialogue[i].voice.name + '" data-track-number="' + (i+1) + '" id="playlist-track-' + (i+1) + '"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
            playlistHtml += currentPage === 'playlist' ? '</div></div><blockquote class="is-hidden" id="transcript-' + i + '">' + arrPlaylistDialogue[i].text + '</blockquote></div>' : '<br/>';
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

/**
 * Calculate duration of playlist
 *
 */
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

/**
 * Add playlist metadata to page
 *
 */
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

/**
 * Play the playlist
 *
 */
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

/**
 * Play the next track
 *
 * @param {number} nextTrackNo
 */
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

/**
 * Show/hide transcript of the audio
 *
 * @param {number|string} i
 */
function toggleTranscript(i) {
    const transcriptBox = document.getElementById('transcript-' + i);
    const transcriptBtn = document.getElementById('btn-transcript-' + i);
    transcriptBox.classList.toggle('is-hidden');
    transcriptBox.classList.contains('is-hidden') ? transcriptBtn.innerHTML = 'Show transcript' : transcriptBtn.innerHTML = 'Hide transcript';
}

/**
 * Creates an object containing information on the voices the user has selected for this conversation
 *
 */
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


/**
 * Creates/adds to an object containing information on the conversation dialogue
 * this includes its position in the playlist, the voice used, the text, and the URL of the audio
 * Only to be called via the XHR response
 *
 * @param {Object} result
 */
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


/**
 * Convert all the conversation data to a JSON string ready for writing to a file.
 *
 * @return {string} 
 */
function conversationToJSON() {
    objConversation = {};
    objConversation.success = true;
    objConversation.voices = arrPlaylistVoices;
    objConversation.dialogue = arrPlaylistDialogue;

    return JSON.stringify(objConversation);
}


/**
 * Saves all conversation data to a playlist (JSON file)
 * Returns shareable URL on success
 *
 * @param {HTMLElement} e
 */
function sharePlaylist(e) {
    if (currentPage === 'playlist') {
        // We're already viewing the playlist so we just need to copy the current URL
        copyToClipboard(null, e, window.location.href);
    }
    else {
        // Put the contents of our voice and dialogue arrays into a JSON string
        const filecontents = conversationToJSON();

        // Generate a unique name
        const now = new Date();
        const dateString = now.toISOString().substring(0, 23).replace(/\D/g, '');   // only numeric characters
        const filename = dateString + '_' + helper.random(6);

        // Save the JSON data server side for sharing (we'll also validate the data there for security purposes)
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            //console.log(xhr.responseText);
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
