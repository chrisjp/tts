import ttsServices from './voices.json' assert {type: 'json'};

// Return an object containing CSS class names depending on if we're displaying light mode or dark mode
function styleClasses(mode) {
    var styles = {};
    mode = (mode == 'mode-dark') ? 'mode-dark' : 'mode-light';

    if (mode == 'mode-dark') {
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

// Toggle between light mode and dark mode, if manually toggling we'll set a cookie
// to remember the user's preference
function toggleStyleMode(clicked) {
    var htmlTag = document.getElementsByTagName('html')[0];
    var curMode = htmlTag.classList[0];
    var newMode = curMode == 'mode-dark' ? 'mode-light' : 'mode-dark';
    var newStyles = styleClasses(newMode);

    htmlTag.classList.remove(curMode, styles.html_bg);
    htmlTag.classList.add(newMode, newStyles.html_bg);

    // Swap out all the button classes
    var buttonsVoice = document.querySelectorAll('.button-voice');
    var buttonsCopyandLang = document.querySelectorAll('.button-copy, .button-lang, #toggleLangs');

    for (var i = 0; i < buttonsVoice.length; i++) {
        buttonsVoice[i].classList.remove(styles.button_bg, styles.button_fg);
        buttonsVoice[i].classList.add(newStyles.button_bg, newStyles.button_fg);
    }
    for (var i = 0; i < buttonsCopyandLang.length; i++) {
        buttonsCopyandLang[i].classList.remove(styles.button_fg);
        buttonsCopyandLang[i].classList.add(newStyles.button_fg);
    }

    styles = newStyles;

    // Set cookie if toggle was manually clicked
    if (clicked) {
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = "style=" + newMode + ";expires=" + d.toUTCString() + ";path=/;secure";
    }
}

// Get the user's preferred style mode. Order or preference:
// 1. cookie value
// 2. prefers-color-scheme set to 'dark' via the OS
// 3. fall back to light mode
function getStyleMode() {
    // Check for cookie first
    var value = "; " + document.cookie;
    var parts = value.split("; style=");
    if (parts.length == 2) {
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

// Load css classes
var styles = styleClasses();
// If we detect the user wants dark mode we'll switch to that
if (getStyleMode() == 'mode-dark') toggleStyleMode();

// Current URL paramaters
const url = new URL(window.location.href);
var urlParamVoice = url.searchParams.get('voice');
var urlParamApi = url.searchParams.get('service');
var urlParamLang = url.searchParams.get('lang');
var urlParamGender = url.searchParams.get('g');
var urlParamText = url.searchParams.get('text');

// Iterate over each group of voices
var buttonsHtml = '', selVoice, voiceName = '', voiceAccent = '', voiceCount = 0, langs = [];
const defaultApi = 'Polly';
const defaultVoice = 'Brian';
const defaultLang = 'English';

var selApi = !urlParamApi || urlParamApi == 'All' ? ' is-active' : '';
var filterApiHtml = '<li class="tab tab-api has-text-weight-bold' + selApi + '" id="tab-All"><a>All</a></li>';
for (var voiceGroup in ttsServices) {
    var voices = ttsServices[voiceGroup].voices;

    // Add a tab for this API
    selApi = urlParamApi == voiceGroup ? ' is-active' : '';
    filterApiHtml += '<li class="tab tab-api' + selApi +'" id="tab-' + voiceGroup.replace(' ', '') + '"><a>' + voiceGroup + '</a></li>';

    // Add a button to act as a heading for this API's voices
    buttonsHtml += '<a class="button button-voice button-heading ' + styles.button_bg + ' ' + styles.button_fg + ' has-text-left has-text-weight-bold is-fullwidth no-hover" data-api="' + voiceGroup + '">' + voiceGroup + '</a>' + "\n";

    // Loop through this API's voices
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
var selLang = urlParamLang == 'All' ? ' is-success selected-lang' : ' ' + styles.button_fg + ' is-hidden';
var langHtml = '<button type="button" class="button button-lang ' + styles.button_fg + ' is-rounded has-text-weight-bold' + selLang + '" data-lang="All">All</button>' + "\n";
for (var i = 0; i < langs.length; i++) {
    selLang = (urlParamLang == langs[i]) || ( !urlParamLang && (defaultLang == langs[i]) ) ? ' is-success selected-lang' : ' is-light is-hidden';
    langHtml += '<button type="button" class="button button-lang ' + styles.button_fg + ' is-rounded' + selLang + '" data-lang="' + langs[i] + '">' + langs[i] + '</button>' + "\n";
}

// Genders
var genders = ['Male', 'Female', 'Other'];
var selGender = !urlParamGender || urlParamGender.toUpperCase() == 'A' ? ' is-active' : '';
var filterGenderHtml = '<li class="tab tab-gender has-text-weight-bold' + selGender + '" id="tab-A"><a>All</a></li>';
for (var i = 0; i < genders.length; i++) {
    selGender = (urlParamGender && urlParamGender.toUpperCase() == genders[i].charAt(0)) ? ' is-active' : '';
    filterGenderHtml += '<li class="tab tab-gender' + selGender +'" id="tab-' + genders[i].charAt(0) + '"><a>' + genders[i] + '</a></li>';
}

// Insert API and Gender filters
document.getElementById('filter-api').innerHTML = '<ul><li class="tab"><a class="has-text-weight-bold no-hover" disabled>API</a></li>' + filterApiHtml + '</ul>';
document.getElementById('filter-gender').innerHTML = '<ul><li class="tab"><a class="has-text-weight-bold no-hover" disabled>Gender</a></li>' + filterGenderHtml + '</ul>';

// Insert buttons
document.getElementById('voice-selection').innerHTML = buttonsHtml;
document.getElementById('lang-selection').innerHTML = '<button id="toggleLangs" class="button ' + styles.button_fg + ' has-text-weight-bold" onclick="toggleLangs();">Language (show/hide)</button>' + langHtml;

// Show exact voice count
document.getElementById('voicecount').innerHTML = voiceCount;

// Add Event Listeners
var buttons = document.querySelectorAll('button.button-voice');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', selectVoice);
}
var apiTabs = document.getElementsByClassName('tab-api');
for (var i = 0; i < apiTabs.length; i++) {
    apiTabs[i].addEventListener('click', selectApi);
}
var genderTabs = document.getElementsByClassName('tab-gender');
for (var i = 0; i < genderTabs.length; i++) {
    genderTabs[i].addEventListener('click', selectGender);
}
var langTabs = document.getElementsByClassName('button-lang');
for (var i = 0; i < langTabs.length; i++) {
    langTabs[i].addEventListener('click', selectLang);
}
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
    var textarea = document.getElementById('text');
    textarea.value = urlParamText;
    textarea.dispatchEvent(new Event('input'));     // setting value doesn't trigger an input event so we manually dispatch this
    generateTTSUrl();
}


/**
 * HELPER FUNCTIONS
 */

// Return the currently selected voice element
function getSelectedVoice() {
    var selVoice = document.querySelectorAll('.button-voice.selected-voice')[0];

    return selVoice ? selVoice : document.getElementsByClassName('button-voice')[0];    // Return first voice as a fallback
}

// Return the currently selected api element
function getSelectedApi() {
    var selApi = document.querySelectorAll('.tab-api.is-active')[0];

    return selApi ? selApi : document.getElementById('tab-Polly');      // Return Polly as a fallback
}

// Return the currently selected api element
function getSelectedGender() {
    var selGender = document.querySelectorAll('.tab-gender.is-active')[0];

    return selGender ? selGender : document.getElementById('tab-A');          // Return All as a fallback
}

// Return the currently selected lang element
function getSelectedLang() {
    var selLang = document.querySelectorAll('.button-lang.selected-lang')[0];

    return selLang ? selLang : document.getElementsByClassName('button-lang')[0];    // Return All as a fallback
}

// Change selected API
function selectApi(e, tabName) {
    var tabs = document.querySelectorAll(".tab-api");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("is-active");
    }

    var activeTab = e !== null ? e.currentTarget : document.getElementById("tab-" + tabName);
    activeTab.classList.add("is-active");

    updateVoiceList();
}

// Change selected gender
function selectGender(e, tabName) {
    var tabs = document.querySelectorAll(".tab-gender");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("is-active");
    }

    var activeTab = e !== null ? e.currentTarget : document.getElementById("tab-" + tabName);
    activeTab.classList.add("is-active");

    updateVoiceList();
}

// Change selected language
function selectLang(e, tabName) {
    var buttons = document.querySelectorAll(".button-lang");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("is-success");
        buttons[i].classList.remove("selected-lang");
        buttons[i].classList.add("is-light");
    }

    var activeTab = e !== null ? e.currentTarget : document.querySelectorAll("button[data-lang='" + tabName + "']")[0];
    activeTab.classList.add("selected-lang");
    activeTab.classList.add("is-success");
    activeTab.classList.remove("is-light");

    updateVoiceList();
}

// Update the voices matching our currently selected filters
function updateVoiceList() {
    const api = getSelectedApi().textContent;
    const gender = getSelectedGender().textContent.charAt(0);
    const lang = getSelectedLang().innerHTML;

    // Get all the buttons
    var b = document.querySelectorAll('.button-voice');

    // Loop through buttons and unhide any that match our filters, hide the rest
    for (var i = 0; i < b.length; i++) {
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

// When selecting a voice from the dropdown, set new char limit and URL
function selectVoice(e) {
    const selVoice = e ? e.currentTarget : getSelectedVoice();

    // Remove active state from all buttons
    var buttons = document.querySelectorAll('button.button-voice');
    for (var i = 0; i < buttons.length; i++) {
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

// Change URL parameters
function changeUrl(selVoice, text) {
    selVoice = selVoice ? selVoice : getSelectedVoice();
    text = text ? text : document.getElementById('text').value.trim();

    var newUrl = updateURLParameter(window.location.href, 'voice', selVoice.dataset.vid);
    newUrl = updateURLParameter(newUrl, 'service', selVoice.dataset.api);
    newUrl = updateURLParameter(newUrl, 'text', encodeURIComponent(text));
    newUrl = updateURLParameter(newUrl, 'lang', getSelectedLang().textContent);
    newUrl = updateURLParameter(newUrl, 'g', getSelectedGender().textContent.charAt(0));

    // Change the URL in the address bar
    setNewUrl(newUrl);
}

// Update the URL in the browser's address bar
function setNewUrl(newUrl) {
    if (window.history.replaceState) {
       // prevents browser from storing history with each change:
       window.history.replaceState('', document.getElementsByTagName('title')[0].innerHTML, newUrl);
    }
}

// Show/hide buttons for language selection
function toggleLangs() {
    var currentLang = getSelectedLang();

    var langs = document.getElementsByClassName('button-lang');
    for (var i = 0; i < langs.length; i++) {
        if (!langs[i].classList.contains('selected-lang')) langs[i].classList.toggle('is-hidden');
    }
}

// Handle textarea input
function handleTextInput(e) {
    var textarea = e.currentTarget;

    // Autogrow the textarea, or reset if emptied
    if (textarea.value) {
        textarea.style.height = textarea.scrollHeight + 'px';
    } else {
        textarea.style.height = textarea.style.minHeight;
        textarea.scrollHeight = textarea.offsetHeight;
    }

    // Count characters used
    characterCount(textarea, document.getElementById('chars'), document.getElementById('character-count'));
}

// Generate URL to TTS output
function generateTTSUrl() {
    const voice = getSelectedVoice();
    const api = voice.dataset.api;
    const text = document.getElementById('text').value.trim() || 'Please enter some text.';

    // Change the URL parameters
    changeUrl(voice);

    // Send request to the server to get around CORS issues
    // Show a loading spinner while the proxy sends/receives the request
    document.getElementById('playbutton').classList.add('is-loading');

    // Send request to our proxy script
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        //console.log(xhr.responseText);
        var response = JSON.parse(xhr.responseText);
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

// Add <audio> player to the DOM
function showAudioPlayer(ttsUrl) {
    var audioHtml = '<audio autoplay controls id="audioplayer" preload="metadata" src="' + ttsUrl + '" title="TTS Audio Clip"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
    document.getElementById('tts-player').innerHTML = audioHtml;
    document.getElementById('tts-player').classList.remove('is-hidden');
    document.getElementById('copylinkbutton').classList.remove('is-hidden');
}

// Show error message
function showErrorMessage(message) {
    document.getElementById('tts-error-text').innerHTML = '<strong>Error:</strong> ' + message;
    document.getElementById('tts-error').classList.remove('is-hidden');
    setTimeout(() => {
        document.getElementById('tts-error').classList.add('is-hidden');
    }, 5000);
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

    // Add to recents if this was triggered by an event (clicking the main copy link URL button)
    if (e !== null) addToRecentShares();
}

// Set character limit on textarea
function setCharLimit() {
    const selectedVoice = getSelectedVoice();
    const newCharLimit = selectedVoice.dataset.charlimit;
    document.getElementById('text').maxLength = newCharLimit;
    document.getElementById('charlimit').innerHTML = newCharLimit;
    document.getElementById('text').dispatchEvent(new Event('input'));
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

// Convert country code (ISO 3166-1 alpha-2) to emoji flag
function countryCodeToEmoji(countryCode) {
    // Windows doesn't support flag emojis so we'll display an image instead
    // There are also some edge cases for languages without a flag emoji (Arabic, Esperanto)

    var emoji = '\ud83c\udff3\ufe0f';   // white flag (default)
    var noFlag = (countryCode == 'ARAB' || countryCode == 'ESPER');   // "country" codes with no flag emoji
    var isWin = navigator.platform.indexOf('Win') > -1;     // check if user is on Windows

    if ((isWin || noFlag) && countryCode.length != 0) {
        emoji = countryCodeToImg(countryCode);
    }
    else if (countryCode && countryCode.length >= 2) {
        const offset = 127397;
        const firstChar = countryCode.codePointAt(0);
        const secondChar = countryCode.codePointAt(1);
        var emoji = String.fromCodePoint(firstChar + offset) + String.fromCodePoint(secondChar + offset);

        // Handle special cases (England, Scotland, Wales) with subdivision flags
        if (countryCode.length == 6) {
            switch (countryCode.substr(3, 3)) {
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

        return emoji;
    }

    return emoji;
}

// Convert country code (ISO 3166-1 alpha-2) to an <img> tag for its flag
function countryCodeToImg(countryCode) {
    var imgUrl = '';

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


// Web Storage

// On page load make sure recent shares is populated if there are any
updateRecentShares();

// Update the recent shares div with what's in our storage
function updateRecentShares() {
    if (typeof(Storage) !== "undefined") {
        var currentData = localStorage.getItem('recentShares');
        var recentHtml = '', audioHtml = '';
        var recentContainer = document.getElementById('recentTTS');

        if (currentData) {
            currentData = JSON.parse(currentData);
            const now = new Date();
            const tooOld = (now.getTime() / 1000) - (3600 * 48);   // 48 hours ago
            var deletions = false;

            for (var i = 0; i < currentData.length; i++) {
                // Remove this item if it's too old
                if ((currentData[i].time / 1000) < tooOld) {
                    currentData.splice(i, 1);
                    deletions = true;
                    i--;
                } else {
                    audioHtml = '<audio controls preload="metadata" src="' + currentData[i].audio + '" title="TTS Audio Clip"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
                    recentHtml += '<div class="columns recent">' +
                    '<div class="column is-one-fifth"><span class="recent-voice has-text-weight-bold">' + currentData[i].voiceName + '</span><br/>' +
                    '<span class="recent-time is-size-7 has-text-grey">' + timeSince(now, new Date(currentData[i].time)) + '</span></div>' +
                    '<div class="column"><span class="recent-message is-italic">"' + (currentData[i].message.length > 250 ? currentData[i].message.substring(0, 250) + ' [...]' : currentData[i].message ) + '"</span></div>' +
                    '<div class="column is-two-fifths">' + audioHtml +
                    ' <button type="button" class="button button-copy is-small ' + styles.button_fg + '" onclick="copyToClipboard(null, this, \'' + currentData[i].audio + '\');">copy URL</button>' +
                    ' <button type="button" class="button is-small is-danger" onclick="removeShare(' + i + ');">remove</button>' + '</div>' +
                    '</div>';
                }
            }

            // If we removed any entries update localStorage
            if (deletions) localStorage.setItem('recentShares', JSON.stringify(currentData));
        } else {
            recentHtml = '<em>No links copied yet!</em>';
        }
        recentContainer.innerHTML = recentHtml;
    }
}

// Add the data of the TTS we just copied to our recent shares
function addToRecentShares() {
    if (typeof(Storage) !== "undefined") {
        const now = new Date();
        var currentData = localStorage.getItem('recentShares');
        var voice = getSelectedVoice();
        var dataArray = [];

        var newData = {
            'time': now.getTime(),
            'voiceName': voice.getElementsByClassName('voice-name')[0].innerText,
            'message': document.getElementById('text').value.trim(),
            'audio': document.getElementById('audioplayer').src
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

// Clear local storage of all shares
function clearShares() {
    localStorage.removeItem('recentShares');
    updateRecentShares();
}

// Remove a share from storage
function removeShare(index) {
    var currentData = JSON.parse(localStorage.getItem('recentShares'));
    currentData.splice(index, 1);

    localStorage.setItem('recentShares', JSON.stringify(currentData));
    updateRecentShares();
}

// Relative time
function timeSince(thisDate, pastDate) {
    var secondsPast = (thisDate.getTime() - pastDate.getTime()) / 1000;
    if(secondsPast < 60){
        return parseInt(secondsPast) + ' seconds ago';
    }
    if(secondsPast < 3600){
        return parseInt(secondsPast/60) + ' minutes ago';
    }
    else {
        return parseInt(secondsPast/3600) + ' hours ago';
    }
}
