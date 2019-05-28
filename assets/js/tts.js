// Amazon Polly voice list: https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
const ttsServices = {
    'Polly':
    {
        url: 'https://streamlabs.com/polly/speak',
        charLimit: 550,
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
    'Google Translate':
    {
        url: 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&client=tw-ob&prev=input&textlen=__LEN__&q=__TEXT__&tl=__LOCALE__&ttsspeed=__SPEED__',
        charLimit: 200,
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
};

// Iterate over each group of voices
var selectHtml = '';
for (var voiceGroup in ttsServices) {
    // Add an option group and iterate over each voice
    var voices = ttsServices[voiceGroup].voices;
    selectHtml += '<optgroup label="' + voiceGroup + ' (' + voices.length + ')">';
    for (var i = 0; i < voices.length; i++) {
        // Add the option
        selectHtml += '<option value="' + voices[i].vid + '" data-api="' + voiceGroup + '" data-charlimit="' + ttsServices[voiceGroup].charLimit + '">' + 
                      countryCodeToEmoji(voices[i].flag) + ' ' + voices[i].name +
                      '</option>';
    }
    selectHtml += '</optgroup>';
}

// Insert <select> HTML into the DOM
var voiceSelect = document.getElementById("voice");
voiceSelect.innerHTML = selectHtml;

// Add Event Listeners
voiceSelect.addEventListener('change', setCharLimit);
document.getElementById('playbutton').addEventListener('click', generateTTSUrl);
document.getElementById('copylinkbutton').addEventListener('click', copyToClipboard);
document.getElementById('text').addEventListener('input', characterCount);

// Generate URL to TTS output
function generateTTSUrl() {
    const voice = document.getElementById('voice');
    const api = voice.options[voice.selectedIndex].dataset.api;
    const text = document.getElementById('text').value.trim() || 'Please enter some text.';

    if (api === 'Polly') {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == '200') {
                console.log(response);
                if (response.success === true) showAudioPlayer(response.speak_url);
            } else {
                console.error(response);
            }
        }
        xhr.open('POST', 'proxy.php', true);    // Use our own proxy to get around CORS issues
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('voice=' + encodeURIComponent(voice.value) + '&text=' + encodeURIComponent(text));
    } else if (api === 'Google Translate') {
        var url = ttsServices[api].url;
        url = url.replace('__LEN__', text.length);
        url = url.replace('__TEXT__', encodeURIComponent(text));
        url = url.replace('__LOCALE__', voice.value);
        url = url.replace('__SPEED__', 1);
        showAudioPlayer(url);
    }
}

// Add <audio> player to the DOM
function showAudioPlayer(ttsUrl) {
    var audioHtml = '<audio autoplay controls id="audioplayer" preload="metadata" src="' + ttsUrl + '" title="TTS Audio Clip"><p>Your browser does not support the <code>audio</code> element.</p></audio>';
    document.getElementById('tts-player').innerHTML = audioHtml;
    document.getElementById('audiocontainer').classList.remove('is-hidden');
    document.getElementById('copylinkbutton').classList.remove('is-hidden');
}

// Copy audio link to clipboard
function copyToClipboard() {
    var audioUrl = document.getElementById('audioplayer').src;

    // Create a temporary <input> to contain the above text, which we can the select and copy
    var tempInput = document.createElement('input');
    tempInput.type = 'text';
    tempInput.value = audioUrl;
    document.body.appendChild(tempInput);

    // Select and copy
    tempInput.select();
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
    const newCharLimit = this.options[voice.selectedIndex].dataset.charlimit;
    document.getElementById('text').maxLength = newCharLimit;
    document.getElementById('charlimit').innerHTML = newCharLimit;
}

// Show character count/limit
function characterCount() {
    const curLength = this.value.trim().length;
    document.getElementById('chars').innerHTML = curLength;

    // if current length is near the max length change colour to red
    if (curLength > (this.maxLength - 10)) {
        document.getElementById('character-count').classList.add('has-text-danger');
    } else {
        document.getElementById('character-count').classList.remove('has-text-danger');
    }
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