// Amazon Polly voice list: https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
const ttsServices = {
    'Polly':
    {
        url: 'https://streamlabs.com/polly/speak',
        charLimit: 550,
        countBytes: true,
        voices: [
            {vid: 'Brian', name: 'Brian (English, British)', flag: 'GB'},
            {vid: 'Amy', name: 'Amy (English, British)', flag: 'GB'},
            {vid: 'Emma', name: 'Emma (English, British)', flag: 'GB'},
            {vid: 'Geraint', name: 'Geraint (English, Welsh)', flag: 'GB-WLS'},
            {vid: 'Russell', name: 'Russell (English, Australian)', flag: 'AU'},
            {vid: 'Nicole', name: 'Nicole (English, Australian)', flag: 'AU'},
            {vid: 'Joey', name: 'Joey (English, American)', flag: 'US'},
            {vid: 'Justin', name: 'Justin (English, American)', flag: 'US'},
            {vid: 'Matthew', name: 'Matthew (English, American)', flag: 'US'},
            {vid: 'Ivy', name: 'Ivy (English, American)', flag: 'US'},
            {vid: 'Joanna', name: 'Joanna (English, American)', flag: 'US'},
            {vid: 'Kendra', name: 'Kendra (English, American)', flag: 'US'},
            {vid: 'Kimberly', name: 'Kimberly (English, American)', flag: 'US'},
            {vid: 'Salli', name: 'Salli (English, American)', flag: 'US'},
            {vid: 'Raveena', name: 'Raveena (English, Indian)', flag: 'IN'},
            {vid: 'Zeina', name: 'Zeina (Arabic)', flag: ''},
            {vid: 'Zhiyu', name: 'Zhiyu (Chinese, Mandarin)', flag: 'CN'},
            {vid: 'Mads', name: 'Mads (Danish)', flag: 'DK'},
            {vid: 'Naja', name: 'Naja (Danish)', flag: 'DK'},
            {vid: 'Ruben', name: 'Ruben (Dutch)', flag: 'NL'},
            {vid: 'Lotte', name: 'Lotte (Dutch)', flag: 'NL'},
            {vid: 'Mathieu', name: 'Mathieu (French)', flag: 'FR'},
            {vid: 'Celine', name: 'Céline (French)', flag: 'FR'},
            {vid: 'Chantal', name: 'Chantal (French, Canadian)', flag: 'CA'},
            {vid: 'Hans', name: 'Hans (German)', flag: 'DE'},
            {vid: 'Marlene', name: 'Marlene (German)', flag: 'DE'},
            {vid: 'Vicki', name: 'Vicki (German)', flag: 'DE'},
            {vid: 'Aditi', name: 'Aditi (Hindi + English, Indian)', flag: 'IN'},
            {vid: 'Karl', name: 'Karl (Icelandic)', flag: 'IS'},
            {vid: 'Dora', name: 'Dóra (Icelandic)', flag: 'IS'},
            {vid: 'Giorgio', name: 'Giorgio (Italian)', flag: 'IT'},
            {vid: 'Carla', name: 'Carla (Italian)', flag: 'IT'},
            {vid: 'Bianca', name: 'Bianca (Italian)', flag: 'IT'},
            {vid: 'Takumi', name: 'Takumi (Japanese)', flag: 'JP'},
            {vid: 'Mizuki', name: 'Mizuki (Japanese)', flag: 'JP'},
            {vid: 'Seoyeon', name: 'Seoyeon (Korean)', flag: 'KR'},
            {vid: 'Liv', name: 'Liv (Norwegian)', flag: 'NO'},
            {vid: 'Jacek', name: 'Jacek (Polish)', flag: 'PL'},
            {vid: 'Jan', name: 'Jan (Polish)', flag: 'PL'},
            {vid: 'Ewa', name: 'Ewa (Polish)', flag: 'PL'},
            {vid: 'Maja', name: 'Maja (Polish)', flag: 'PL'},
            {vid: 'Ricardo', name: 'Ricardo (Portuguese, Brazilian)', flag: 'BR'},
            {vid: 'Vitoria', name: 'Vitória (Portuguese, Brazilian)', flag: 'BR'},
            {vid: 'Cristiano', name: 'Cristiano (Portuguese, European)', flag: 'PT'},
            {vid: 'Ines', name: 'Inês (Portuguese, European)', flag: 'PT'},
            {vid: 'Carmen', name: 'Carmen (Romanian)', flag: 'RO'},
            {vid: 'Maxim', name: 'Maxim (Russian)', flag: 'RU'},
            {vid: 'Tatyana', name: 'Tatyana (Russian)', flag: 'RU'},
            {vid: 'Enrique', name: 'Enrique (Spanish, European)', flag: 'ES'},
            {vid: 'Conchita', name: 'Conchita (Spanish, European)', flag: 'ES'},
            {vid: 'Lucia', name: 'Lucia (Spanish, European)', flag: 'ES'},
            {vid: 'Mia', name: 'Mia (Spanish, Mexican)', flag: 'MX'},
            {vid: 'Miguel', name: 'Miguel (Spanish, American)', flag: 'US'},
            {vid: 'Penelope', name: 'Penélope (Spanish, American)', flag: 'US'},
            {vid: 'Astrid', name: 'Astrid (Swedish)', flag: 'SE'},
            {vid: 'Filiz', name: 'Filiz (Turkish)', flag: 'TR'},
            {vid: 'Gwyneth', name: 'Gwyneth (Welsh)', flag: 'GB-WLS'},
        ],
    },
    'IBM Watson':
    {
        url: 'https://text-to-speech-demo.ng.bluemix.net/api/v1/synthesize?text=__TEXT__&voice=__VOICE__&accept=audio%2Fmp3',
        charLimit: 5000,
        countBytes: false,
        voices: [
            {vid: 'en-GB_KateVoice', name: 'Kate (English, British)', flag: 'GB'},
            {vid: 'en-US_AllisonVoice', name: 'Allison (English, American)', flag: 'US'},
            {vid: 'en-US_AllisonV2Voice', name: 'Allison V2 (English, American)', flag: 'US'},
            {vid: 'en-US_LisaVoice', name: 'Lisa (English, American)', flag: 'US'},
            {vid: 'en-US_LisaV2Voice', name: 'Lisa V2 (English, American)', flag: 'US'},
            {vid: 'en-US_MichaelVoice', name: 'Michael (English, American)', flag: 'US'},
            {vid: 'en-US_MichaelV2Voice', name: 'Michael V2 (English, American)', flag: 'US'},
            {vid: 'fr-FR_ReneeVoice', name: 'Renee (French)', flag: 'FR'},
            {vid: 'de-DE_BirgitVoice', name: 'Birgit (German)', flag: 'DE'},
            {vid: 'de-DE_BirgitV2Voice', name: 'Birgit V2 (German)', flag: 'DE'},
            {vid: 'de-DE_DieterVoice', name: 'Dieter (German)', flag: 'DE'},
            {vid: 'de-DE_DieterV2Voice', name: 'Dieter V2 (German)', flag: 'DE'},
            {vid: 'it-IT_FrancescaVoice', name: 'Francesca (Italian)', flag: 'IT'},
            {vid: 'it-IT_FrancescaV2Voice', name: 'Francesca V2 (Italian)', flag: 'IT'},
            {vid: 'ja-JP_EmiVoice', name: 'Emi (Japanese)', flag: 'JP'},
            {vid: 'pt-BR_IsabelaVoice', name: 'Isabela (Portuguese, Brazilian)', flag: 'BR'},
            {vid: 'es-ES_EnriqueVoice', name: 'Enrique (Spanish, European)', flag: 'ES'},
            {vid: 'es-ES_LauraVoice', name: 'Laura (Spanish, European)', flag: 'ES'},
            {vid: 'es-LA_SofiaVoice', name: 'Sofia (Spanish, Latin American)', flag: 'MX'},
            {vid: 'es-US_SofiaVoice', name: 'Sofia (Spanish, American)', flag: 'US'},
        ],
    },
    'Google Translate':
    {
        url: 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&client=tw-ob&prev=input&textlen=__LEN__&q=__TEXT__&tl=__LOCALE__&ttsspeed=__SPEED__',
        charLimit: 200,
        countBytes: false,
        voices: [
            {vid: 'en-gb', name: 'English (British)', flag: 'GB'},
            {vid: 'en-us', name: 'English (American)', flag: 'US'},
            {vid: 'en-au', name: 'English (Australian)', flag: 'AU'},
            {vid: 'en-in', name: 'English (Indian)', flag: 'IN'},
            {vid: 'ar', name: 'Arabic', flag: ''},
            {vid: 'bn-bd', name: 'Bengali', flag: 'BD'},
            {vid: 'zh-cn', name: 'Chinese', flag: 'CN'},
            {vid: 'cs-cz', name: 'Czech', flag: 'CZ'},
            {vid: 'da-dk', name: 'Danish', flag: 'DK'},
            {vid: 'nl-nl', name: 'Dutch', flag: 'NL'},
            {vid: 'et-ee', name: 'Estonian', flag: 'EE'},
            {vid: 'tl-ph', name: 'Filipino (Tagalog)', flag: 'PH'},
            {vid: 'fi-fi', name: 'Finnish', flag: 'FI'},
            {vid: 'fr-fr', name: 'French - France', flag: 'FR'},
            {vid: 'fr-ca', name: 'French - Canada', flag: 'CA'},
            {vid: 'de-de', name: 'German', flag: 'DE'},
            {vid: 'el-gr', name: 'Greek', flag: 'GR'},
            {vid: 'hi-in', name: 'Hindi', flag: 'IN'},
            {vid: 'hu-hu', name: 'Hungarian', flag: 'HU'},
            {vid: 'it-it', name: 'Italian', flag: 'IT'},
            {vid: 'id-id', name: 'Indonesian', flag: 'ID'},
            {vid: 'ja-jp', name: 'Japanese', flag: 'JP'},
            {vid: 'jw-id', name: 'Javanese', flag: 'ID'},
            {vid: 'km-kh', name: 'Khmer', flag: 'KH'},
            {vid: 'ko-kr', name: 'Korean', flag: 'KR'},
            {vid: 'la', name: 'Latin', flag: ''},
            {vid: 'ml-in', name: 'Malayalam', flag: 'IN'},
            {vid: 'mr-in', name: 'Marathi', flag: 'IN'},
            {vid: 'my-mm', name: 'Myanmar (Burmese)', flag: 'MM'},
            {vid: 'ne-np', name: 'Nepali', flag: 'NP'},
            {vid: 'nb-no', name: 'Norwegian', flag: 'NO'},
            {vid: 'pl-pl', name: 'Polish', flag: 'PL'},
            {vid: 'pt-pt', name: 'Portuguese - Europe', flag: 'PT'},
            {vid: 'pt-br', name: 'Portuguese - Brazil', flag: 'BR'},
            {vid: 'ro-ro', name: 'Romanian', flag: 'RO'},
            {vid: 'ru-ru', name: 'Russian', flag: 'RU'},
            {vid: 'si-lk', name: 'Sinhala', flag: 'LK'},
            {vid: 'sk-sk', name: 'Slovak', flag: 'SK'},
            {vid: 'es-es', name: 'Spanish - Spain', flag: 'ES'},
            {vid: 'es-mx', name: 'Spanish - Mexico', flag: 'MX'},
            {vid: 'su-sd', name: 'Sudanese', flag: 'SD'},
            {vid: 'sv-se', name: 'Swedish', flag: 'SE'},
            {vid: 'ta-in', name: 'Tamil', flag: 'IN'},
            {vid: 'te-in', name: 'Telugu', flag: 'IN'},
            {vid: 'th-th', name: 'Thai', flag: 'TH'},
            {vid: 'tr-tr', name: 'Turkish', flag: 'TR'},
            {vid: 'uk-ua', name: 'Ukrainian', flag: 'UA'},
            {vid: 'vi-vn', name: 'Vietnamese', flag: 'VN'},
        ],
    },
    'iSpeech':
    {
        url: 'https://www.ispeech.org/p/generic/getaudio?action=convert&pitch=100&voice=__VOICE__&speed=__SPEED__&text=__TEXT__',
        charLimit: 150,
        countBytes: true,
        voices: [
            {vid: 'ukenglishfemale', name: 'English (British) - Female', flag: 'GB'},
            {vid: 'ukenglishmale', name: 'English (British) - Male', flag: 'GB'},
            {vid: 'usenglishfemale', name: 'English (American) - Female', flag: 'US'},
            {vid: 'usenglishmale', name: 'English (American) - Male', flag: 'US'},
            {vid: 'auenglishfemale', name: 'English (Australian) - Female', flag: 'AU'},
            {vid: 'caenglishfemale', name: 'English (Canadian) - Female', flag: 'CA'},
            {vid: 'arabicmale', name: 'Arabic - Male', flag: 'EG'},
            {vid: 'chchinesefemale', name: 'Chinese (China) - Female', flag: 'CN'},
            {vid: 'hkchinesefemale', name: 'Chinese (Hong Kong) - Female', flag: 'HK'},
            //{vid: 'twchinesefemale', name: 'Chinese (Taiwan) - Female', flag: 'TW'}, // "invalid voice" as of May 2019
            {vid: 'eurczechfemale', name: 'Czech - Female', flag: 'CZ'},
            {vid: 'eurdanishfemale', name: 'Danish - Female', flag: 'DK'},
            {vid: 'eurdutchfemale', name: 'Dutch - Female', flag: 'NL'},
            {vid: 'eurfinnishfemale', name: 'Finnish - Female', flag: 'FI'},
            {vid: 'eurfrenchfemale', name: 'French (European) - Female', flag: 'FR'},
            {vid: 'eurfrenchmale', name: 'French (European) - Male', flag: 'FR'},
            {vid: 'cafrenchfemale', name: 'French (Canadian) - Female', flag: 'CA'},
            {vid: 'cafrenchmale', name: 'French (Canadian) - Male', flag: 'CA'},
            {vid: 'eurgermanfemale', name: 'German - Female', flag: 'DE'},
            {vid: 'eurgermanmale', name: 'German - Male', flag: 'DE'},
            {vid: 'eurgreekfemale', name: 'Greek - Female', flag: 'GR'},
            {vid: 'huhungarianfemale', name: 'Hungarian - Female', flag: 'HU'},
            {vid: 'euritalianfemale', name: 'Italian - Female', flag: 'IT'},
            {vid: 'euritalianmale', name: 'Italian - Male', flag: 'IT'},
            {vid: 'jpjapanesefemale', name: 'Japanese - Female', flag: 'JP'},
            {vid: 'krkoreanfemale', name: 'Korean - Female', flag: 'KR'},
            {vid: 'eurnorwegianfemale', name: 'Norwegian - Female', flag: 'NO'},
            {vid: 'eurpolishfemale', name: 'Polish - Female', flag: 'PL'},
            {vid: 'eurportuguesefemale', name: 'Portuguese (European) - Female', flag: 'PT'},
            {vid: 'eurportuguesemale', name: 'Portuguese (European) - Male', flag: 'PT'},
            {vid: 'brportuguesefemale', name: 'Portuguese (Brazilian) - Female', flag: 'BR'},
            {vid: 'rurussianfemale', name: 'Russian - Female', flag: 'RU'},
            {vid: 'rurussianmale', name: 'Russian - Male', flag: 'RU'},
            {vid: 'eurspanishfemale', name: 'Spanish (European) - Female', flag: 'ES'},
            {vid: 'eurspanishmale', name: 'Spanish (European) - Male', flag: 'ES'},
            {vid: 'usspanishfemale', name: 'Spanish (Latin American) - Female', flag: 'MX'},
            {vid: 'usspanishmale', name: 'Spanish (Latin American) - Male', flag: 'MX'},
            {vid: 'swswedishfemale', name: 'Swedish - Female', flag: 'SE'},
            {vid: 'eurturkishfemale', name: 'Turkish - Female', flag: 'TR'},
            {vid: 'eurturkishmale', name: 'Turkish - Male', flag: 'TR'},
        ],
    },
};

// Current URL paramaters
const url = new URL(window.location.href);
const urlParamVoice = url.searchParams.get('voice');
const urlParamApi = url.searchParams.get('service');
const urlParamText = url.searchParams.get('text');

// Iterate over each group of voices
var selectHtml = '';
var voiceCount = 0;
var selVoice = '';
for (var voiceGroup in ttsServices) {
    // Add an option group and iterate over each voice
    var voices = ttsServices[voiceGroup].voices;
    selectHtml += '<optgroup label="' + voiceGroup + ' (' + voices.length + ')">';
    for (var i = 0; i < voices.length; i++) {
        selVoice = (urlParamVoice == voices[i].vid) && (urlParamApi == voiceGroup) ? ' selected' : '';
        // Add the option
        selectHtml += '<option value="' + voices[i].vid + '" ' + selVoice + ' data-api="' + voiceGroup + '" data-charlimit="' + ttsServices[voiceGroup].charLimit + '">' + 
                      countryCodeToEmoji(voices[i].flag) + ' ' + voices[i].name +
                      '</option>';
    }
    selectHtml += '</optgroup>';
    voiceCount += voices.length;
}

// Insert <select> HTML into the DOM, and show exact voice count
var voiceSelect = document.getElementById('voice');
voiceSelect.innerHTML = selectHtml;
document.getElementById('voicecount').innerHTML = voiceCount;

// Add Event Listeners
voiceSelect.addEventListener('change', selectVoice);
document.getElementById('playbutton').addEventListener('click', generateTTSUrl);
document.getElementById('copylinkbutton').addEventListener('click', copyToClipboard);
document.getElementById('text').addEventListener('input', characterCount);

// If there is text present in the URL, put it in the textarea and play the audio
if (urlParamText !== null && decodeURIComponent(urlParamText).trim().length > 0) {
    document.getElementById('text').value = urlParamText;
    setCharLimit();
    characterCount();
    generateTTSUrl();
}


/** 
 * HELPER FUNCTIONS
 */


// When selecting a voice from the dropdown, set new char limit and URL
function selectVoice() {
    const selVoice = this.options[voice.selectedIndex];
    
    // Set character limit on textarea
    setCharLimit();
    
    // Change the URL parameters
    var newUrl = updateURLParameter(window.location.href, 'voice', selVoice.value);
    newUrl = updateURLParameter(newUrl, 'service', selVoice.dataset.api);
    
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

// Generate URL to TTS output
function generateTTSUrl() {
    const voice = document.getElementById('voice');
    const api = voice.options[voice.selectedIndex].dataset.api;
    const text = document.getElementById('text').value.trim() || 'Please enter some text.';
    var url = ttsServices[api].url;

    if (api === 'Polly') {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == '200') {
                console.log(response);
                if (response.success === true) {
                    showAudioPlayer(response.speak_url);
                } else if (response.error) {
                    showErrorMessage(response.error);
                }
            } else {
                console.error(response);
            }
        }
        xhr.open('POST', 'proxy.php', true);    // Use our own proxy to get around CORS issues
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('voice=' + encodeURIComponent(voice.value) + '&text=' + encodeURIComponent(text));
    } else if (api === 'Google Translate') {
        url = url.replace('__LEN__', text.length);
        url = url.replace('__TEXT__', encodeURIComponent(text));
        url = url.replace('__LOCALE__', voice.value);
        url = url.replace('__SPEED__', 1);
        showAudioPlayer(url);
    } else if (api === 'IBM Watson') {
        url = url.replace('__TEXT__', encodeURIComponent(text));
        url = url.replace('__VOICE__', voice.value);
        showAudioPlayer(url);
    }
     else if (api === 'iSpeech') {
        url = url.replace('__TEXT__', encodeURIComponent(text));
        url = url.replace('__VOICE__', voice.value);
        url = url.replace('__SPEED__', 0);
        showAudioPlayer(url);
    }
}

// Add <audio> player to the DOM
function showAudioPlayer(ttsUrl) {
    var audioHtml = '<audio autoplay controls id="audioplayer" preload="metadata" src="' + ttsUrl + '" title="TTS Audio Clip"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
    document.getElementById('tts-player').innerHTML = audioHtml;
    document.getElementById('tts-player').classList.remove('is-hidden');
    document.getElementById('copylinkbutton').classList.remove('is-hidden');
    
    // Update the URL in the address bar with the text to be spoken
    setNewUrl(updateURLParameter(window.location.href, 'text', encodeURIComponent(document.getElementById('text').value.trim())));
}

// Show error message
function showErrorMessage(message) {
    document.getElementById('tts-error-text').innerHTML = '<strong>Error:</strong> ' + message;
    document.getElementById('tts-error').classList.remove('is-hidden');
    setTimeout(() => {
        document.getElementById('tts-error').classList.add('is-hidden');
    }, 2500);
}

// Copy audio link to clipboard
function copyToClipboard() {
    var audioUrl = document.getElementById('audioplayer').src;

    // Create a temporary text <input> to contain the URL of the audio clip, which we can then select and copy
    var tempInput = document.createElement('input');
    tempInput.type = 'text';
    tempInput.value = audioUrl;
    tempInput.className = 'is-hidden';
    document.body.appendChild(tempInput);

    // Select and copy
    // on iOS? Need to do a hacky workaround for this to work
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        // Set input's contentEditable to true
        tempInput.contentEditable = true;

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
    var copyBtn = document.getElementById('copylinkbutton');
    const origText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    copyBtn.classList.add('is-success');

    setTimeout(() => {
        copyBtn.textContent = origText;
        copyBtn.classList.remove('is-success');
    }, 2000);
}

// Set character limit on textarea
function setCharLimit() {
    const voice = document.getElementById('voice');
    const selectedVoice = voice.options[voice.selectedIndex];
    const newCharLimit = selectedVoice.dataset.charlimit;
    document.getElementById('text').maxLength = newCharLimit;
    document.getElementById('charlimit').innerHTML = newCharLimit;
    document.getElementById('text').dispatchEvent(new Event('input'));
}

// Show character count/limit
function characterCount() {
    // Some services count bytes rather than characters
    const thisText = this.value === undefined ? document.getElementById('text').value : this.value;
    const voice = document.getElementById('voice');
    const api = voice.options[voice.selectedIndex].dataset.api;
    const curLength = ttsServices[api].countBytes === true ? byteCount(thisText.trim()) : thisText.trim().length;
    document.getElementById('chars').innerHTML = curLength;

    // if current length is near the max length change colour to red
    if (curLength > (this.maxLength - 10)) {
        document.getElementById('character-count').classList.add('has-text-danger');
    } else {
        document.getElementById('character-count').classList.remove('has-text-danger');
    }
}

// Count bytes of text string
// https://stackoverflow.com/a/12203648/403476
function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

// Convert country code (ISO 3166-1 alpha-2) to emoji flag
function countryCodeToEmoji(countryCode) {
    const offset = 127397;

    if (countryCode && countryCode.length >= 2) {
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

    return '\ud83c\udff3\ufe0f';
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