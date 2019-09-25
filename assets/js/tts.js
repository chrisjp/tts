// Amazon Polly voice list: https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
const ttsServices = {
    'Polly':
    {
        url: 'https://streamlabs.com/polly/speak',
        charLimit: 550,
        countBytes: true,
        voices: [
            {vid: 'Brian', name: 'Brian (English, British)', flag: 'GB', lang: 'English', accent: 'British', sex: 'M'},
            {vid: 'Amy', name: 'Amy (English, British)', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'Emma', name: 'Emma (English, British)', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'Geraint', name: 'Geraint (English, Welsh)', flag: 'GB-WLS', lang: 'English', accent: 'Welsh', sex: 'M'},
            {vid: 'Russell', name: 'Russell (English, Australian)', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: 'Nicole', name: 'Nicole (English, Australian)', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'Joey', name: 'Joey (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Justin', name: 'Justin (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Matthew', name: 'Matthew (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Ivy', name: 'Ivy (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Joanna', name: 'Joanna (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Kendra', name: 'Kendra (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Kimberly', name: 'Kimberly (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Salli', name: 'Salli (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Raveena', name: 'Raveena (English, Indian)', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: 'Zeina', name: 'Zeina (Arabic)', flag: '', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: 'Zhiyu', name: 'Zhiyu (Chinese, Mandarin)', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: 'Mads', name: 'Mads (Danish)', flag: 'DK', lang: 'Danish', accent: '', sex: 'M'},
            {vid: 'Naja', name: 'Naja (Danish)', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'Ruben', name: 'Ruben (Dutch)', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'Lotte', name: 'Lotte (Dutch)', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'Mathieu', name: 'Mathieu (French)', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'Celine', name: 'Céline (French)', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'Chantal', name: 'Chantal (French, Canadian)', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'Hans', name: 'Hans (German)', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'Marlene', name: 'Marlene (German)', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'Vicki', name: 'Vicki (German)', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'Aditi', name: 'Aditi (Hindi + English, Indian)', flag: 'IN', lang: 'Hindi', accent: '', sex: 'F'},
            {vid: 'Karl', name: 'Karl (Icelandic)', flag: 'IS', lang: 'Icelandic', accent: '', sex: 'M'},
            {vid: 'Dora', name: 'Dóra (Icelandic)', flag: 'IS', lang: 'Icelandic', accent: '', sex: 'F'},
            {vid: 'Giorgio', name: 'Giorgio (Italian)', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'Carla', name: 'Carla (Italian)', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'Bianca', name: 'Bianca (Italian)', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'Takumi', name: 'Takumi (Japanese)', flag: 'JP', lang: 'Japanese', accent: '', sex: 'M'},
            {vid: 'Mizuki', name: 'Mizuki (Japanese)', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'Seoyeon', name: 'Seoyeon (Korean)', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: 'Liv', name: 'Liv (Norwegian)', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'Jacek', name: 'Jacek (Polish)', flag: 'PL', lang: 'Polish', accent: '', sex: 'M'},
            {vid: 'Jan', name: 'Jan (Polish)', flag: 'PL', lang: 'Polish', accent: '', sex: 'M'},
            {vid: 'Ewa', name: 'Ewa (Polish)', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'Maja', name: 'Maja (Polish)', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'Ricardo', name: 'Ricardo (Portuguese, Brazilian)', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'M'},
            {vid: 'Vitoria', name: 'Vitória (Portuguese, Brazilian)', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'Cristiano', name: 'Cristiano (Portuguese, European)', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'M'},
            {vid: 'Ines', name: 'Inês (Portuguese, European)', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'F'},
            {vid: 'Carmen', name: 'Carmen (Romanian)', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: 'Maxim', name: 'Maxim (Russian)', flag: 'RU', lang: 'Russian', accent: '', sex: 'M'},
            {vid: 'Tatyana', name: 'Tatyana (Russian)', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'Enrique', name: 'Enrique (Spanish, European)', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'M'},
            {vid: 'Conchita', name: 'Conchita (Spanish, European)', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'F'},
            {vid: 'Lucia', name: 'Lucia (Spanish, European)', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'F'},
            {vid: 'Mia', name: 'Mia (Spanish, Mexican)', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'F'},
            {vid: 'Miguel', name: 'Miguel (Spanish, American)', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'M'},
            {vid: 'Penelope', name: 'Penélope (Spanish, American)', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
            {vid: 'Astrid', name: 'Astrid (Swedish)', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'Filiz', name: 'Filiz (Turkish)', flag: 'TR', lang: 'Turkish', accent: '', sex: 'M'},
            {vid: 'Gwyneth', name: 'Gwyneth (Welsh)', flag: 'GB-WLS', lang: 'Welsh', accent: '', sex: 'F'},
        ],
    },
    'IBM Watson':
    {
        url: 'https://text-to-speech-demo.ng.bluemix.net/api/v1/synthesize?text=__TEXT__&voice=__VOICE__&accept=audio%2Fmp3',
        charLimit: 5000,
        countBytes: false,
        voices: [
            {vid: 'en-GB_KateVoice', name: 'Kate (English, British)', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'en-US_AllisonVoice', name: 'Allison (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_AllisonV2Voice', name: 'Allison V2 (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_LisaVoice', name: 'Lisa (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_LisaV2Voice', name: 'Lisa V2 (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_MichaelVoice', name: 'Michael (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en-US_MichaelV2Voice', name: 'Michael V2 (English, American)', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'fr-FR_ReneeVoice', name: 'Renee (French)', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'de-DE_BirgitVoice', name: 'Birgit (German)', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'de-DE_BirgitV2Voice', name: 'Birgit V2 (German)', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'de-DE_DieterVoice', name: 'Dieter (German)', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'de-DE_DieterV2Voice', name: 'Dieter V2 (German)', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'it-IT_FrancescaVoice', name: 'Francesca (Italian)', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'it-IT_FrancescaV2Voice', name: 'Francesca V2 (Italian)', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'ja-JP_EmiVoice', name: 'Emi (Japanese)', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'pt-BR_IsabelaVoice', name: 'Isabela (Portuguese, Brazilian)', flag: 'BR', lang: 'Portuguese', accent: 'Brazil', sex: 'F'},
            {vid: 'es-ES_EnriqueVoice', name: 'Enrique (Spanish, European)', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'M'},
            {vid: 'es-ES_LauraVoice', name: 'Laura (Spanish, European)', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'F'},
            {vid: 'es-LA_SofiaVoice', name: 'Sofia (Spanish, Latin American)', flag: 'MX', lang: 'Spanish', accent: 'Latin American', sex: 'F'},
            {vid: 'es-US_SofiaVoice', name: 'Sofia (Spanish, American)', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
        ],
    },
    'Google Translate':
    {
        url: 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&client=tw-ob&prev=input&textlen=__LEN__&q=__TEXT__&tl=__LOCALE__&ttsspeed=__SPEED__',
        charLimit: 200,
        countBytes: false,
        voices: [
            {vid: 'en-gb', name: 'English (British)', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'en-us', name: 'English (American)', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-au', name: 'English (Australian)', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'en-in', name: 'English (Indian)', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: 'ar', name: 'Arabic', flag: '', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: 'bn-bd', name: 'Bengali', flag: 'BD', lang: 'Bengali', accent: '', sex: 'M'},
            {vid: 'zh-cn', name: 'Chinese', flag: 'CN', lang: 'Chinese', accent: '', sex: 'F'},
            {vid: 'cs-cz', name: 'Czech', flag: 'CZ', lang: 'Czech', accent: '', sex: 'F'},
            {vid: 'da-dk', name: 'Danish', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'nl-nl', name: 'Dutch', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'et-ee', name: 'Estonian', flag: 'EE', lang: 'Estonian', accent: '', sex: 'M'},
            {vid: 'tl-ph', name: 'Filipino (Tagalog)', flag: 'PH', lang: 'Filipino', accent: '', sex: 'F'},
            {vid: 'fi-fi', name: 'Finnish', flag: 'FI', lang: 'Finnish', accent: '', sex: 'F'},
            {vid: 'fr-fr', name: 'French - France', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'fr-ca', name: 'French - Canada', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'de-de', name: 'German', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'el-gr', name: 'Greek', flag: 'GR', lang: 'Greek', accent: '', sex: 'F'},
            {vid: 'hi-in', name: 'Hindi', flag: 'IN', lang: 'Hindi', accent: '', sex: 'F'},
            {vid: 'hu-hu', name: 'Hungarian', flag: 'HU', lang: 'Hungarian', accent: '', sex: 'F'},
            {vid: 'it-it', name: 'Italian', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'id-id', name: 'Indonesian', flag: 'ID', lang: 'Indonesian', accent: '', sex: 'F'},
            {vid: 'ja-jp', name: 'Japanese', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'jw-id', name: 'Javanese', flag: 'ID', lang: 'Javanese', accent: '', sex: 'F'},
            {vid: 'km-kh', name: 'Khmer', flag: 'KH', lang: 'Khmer', accent: '', sex: 'F'},
            {vid: 'ko-kr', name: 'Korean', flag: 'KR', lang: 'Korean', accent: '', sex: 'M'},
            {vid: 'la', name: 'Latin', flag: '', lang: 'Latin', accent: '', sex: 'M'},
            {vid: 'ml-in', name: 'Malayalam', flag: 'IN', lang: 'Malayalam', accent: '', sex: 'M'},
            {vid: 'mr-in', name: 'Marathi', flag: 'IN', lang: 'Marathi', accent: '', sex: 'F'},
            {vid: 'my-mm', name: 'Myanmar (Burmese)', flag: 'MM', lang: 'Myanmar (Burmese)', accent: '', sex: 'F'},
            {vid: 'ne-np', name: 'Nepali', flag: 'NP', lang: 'Nepali', accent: '', sex: 'F'},
            {vid: 'nb-no', name: 'Norwegian', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'pl-pl', name: 'Polish', flag: 'PL', lang: 'Polish', accent: '', sex: 'M'},
            {vid: 'pt-pt', name: 'Portuguese - Europe', flag: 'PT', lang: 'Portuguese', accent: 'Europe', sex: 'F'},
            {vid: 'pt-br', name: 'Portuguese - Brazil', flag: 'BR', lang: 'Portuguese', accent: 'Brazil', sex: 'F'},
            {vid: 'ro-ro', name: 'Romanian', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: 'ru-ru', name: 'Russian', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'si-lk', name: 'Sinhala', flag: 'LK', lang: 'Sinhala', accent: '', sex: 'F'},
            {vid: 'sk-sk', name: 'Slovak', flag: 'SK', lang: 'Slovak', accent: '', sex: 'F'},
            {vid: 'es-es', name: 'Spanish - Spain', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'F'},
            {vid: 'es-mx', name: 'Spanish - Mexico', flag: 'MX', lang: 'Spanish', accent: 'Mexico', sex: 'F'},
            {vid: 'su-sd', name: 'Sudanese', flag: 'SD', lang: 'Sudanese', accent: '', sex: 'F'},
            {vid: 'sv-se', name: 'Swedish', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'ta-in', name: 'Tamil', flag: 'IN', lang: 'Tamil', accent: '', sex: 'F'},
            {vid: 'te-in', name: 'Telugu', flag: 'IN', lang: 'Telugu', accent: '', sex: 'F'},
            {vid: 'th-th', name: 'Thai', flag: 'TH', lang: 'Thai', accent: '', sex: 'F'},
            {vid: 'tr-tr', name: 'Turkish', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
            {vid: 'uk-ua', name: 'Ukrainian', flag: 'UA', lang: 'Ukrainian', accent: '', sex: 'F'},
            {vid: 'vi-vn', name: 'Vietnamese', flag: 'VN', lang: 'Vietnamese', accent: '', sex: 'F'},
        ],
    },
    'iSpeech':
    {
        url: 'https://www.ispeech.org/p/generic/getaudio?action=convert&pitch=100&voice=__VOICE__&speed=__SPEED__&text=__TEXT__',
        charLimit: 150,
        countBytes: true,
        voices: [
            {vid: 'ukenglishfemale', name: 'English (British) - Female', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'ukenglishmale', name: 'English (British) - Male', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'usenglishfemale', name: 'English (American) - Female', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'usenglishmale', name: 'English (American) - Male', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'auenglishfemale', name: 'English (Australian) - Female', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'caenglishfemale', name: 'English (Canadian) - Female', flag: 'CA', lang: 'English', accent: 'Canadian', sex: 'F'},
            {vid: 'arabicmale', name: 'Arabic - Male', flag: 'EG', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: 'chchinesefemale', name: 'Chinese (China) - Female', flag: 'CN', lang: 'Chinese', accent: '', sex: 'F'},
            {vid: 'hkchinesefemale', name: 'Chinese (Hong Kong) - Female', flag: 'HK', lang: 'Chinese', accent: 'Hong Kong', sex: 'F'},
            //{vid: 'twchinesefemale', name: 'Chinese (Taiwan) - Female', flag: 'TW', lang: 'Chinese', accent: 'Taiwan', sex: 'F'}, // "invalid voice" as of May 2019
            {vid: 'eurczechfemale', name: 'Czech - Female', flag: 'CZ', lang: 'Czech', accent: '', sex: 'F'},
            {vid: 'eurdanishfemale', name: 'Danish - Female', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'eurdutchfemale', name: 'Dutch - Female', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'eurfinnishfemale', name: 'Finnish - Female', flag: 'FI', lang: 'Finnish', accent: '', sex: 'F'},
            {vid: 'eurfrenchfemale', name: 'French (European) - Female', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'eurfrenchmale', name: 'French (European) - Male', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'cafrenchfemale', name: 'French (Canadian) - Female', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'cafrenchmale', name: 'French (Canadian) - Male', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'M'},
            {vid: 'eurgermanfemale', name: 'German - Female', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'eurgermanmale', name: 'German - Male', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'eurgreekfemale', name: 'Greek - Female', flag: 'GR', lang: 'Greek', accent: '', sex: 'F'},
            {vid: 'huhungarianfemale', name: 'Hungarian - Female', flag: 'HU', lang: 'Hungarian', accent: '', sex: 'F'},
            {vid: 'euritalianfemale', name: 'Italian - Female', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'euritalianmale', name: 'Italian - Male', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'jpjapanesefemale', name: 'Japanese - Female', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'krkoreanfemale', name: 'Korean - Female', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: 'eurnorwegianfemale', name: 'Norwegian - Female', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'eurpolishfemale', name: 'Polish - Female', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'eurportuguesefemale', name: 'Portuguese (European) - Female', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'F'},
            {vid: 'eurportuguesemale', name: 'Portuguese (European) - Male', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'M'},
            {vid: 'brportuguesefemale', name: 'Portuguese (Brazilian) - Female', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'rurussianfemale', name: 'Russian - Female', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'rurussianmale', name: 'Russian - Male', flag: 'RU', lang: 'Russian', accent: '', sex: 'M'},
            {vid: 'eurspanishfemale', name: 'Spanish (European) - Female', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'F'},
            {vid: 'eurspanishmale', name: 'Spanish (European) - Male', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'M'},
            {vid: 'usspanishfemale', name: 'Spanish (Latin American) - Female', flag: 'MX', lang: 'Spanish', accent: 'Latin American', sex: 'F'},
            {vid: 'usspanishmale', name: 'Spanish (Latin American) - Male', flag: 'MX', lang: 'Spanish', accent: 'Latin American', sex: 'M'},
            {vid: 'swswedishfemale', name: 'Swedish - Female', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'eurturkishfemale', name: 'Turkish - Female', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
            {vid: 'eurturkishmale', name: 'Turkish - Male', flag: 'TR', lang: 'Turkish', accent: '', sex: 'M'},
        ],
    },
};

// Current URL paramaters
const url = new URL(window.location.href);
var urlParamVoice = url.searchParams.get('voice');
var urlParamApi = url.searchParams.get('service');
var urlParamLang = url.searchParams.get('lang');
var urlParamSex = url.searchParams.get('s');
var urlParamText = url.searchParams.get('text');

// Iterate over each group of voices
var buttonsHtml = '', selVoice, voiceCount = 0, voicesPerColumn = 0, columns = 3, langs = [];
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
    buttonsHtml += '<a class="button button-voice button-heading has-background-lighter has-text-left has-text-weight-bold is-fullwidth no-hover" data-api="' + voiceGroup + '">' + voiceGroup + '</a>' + "\n";
    
    // Loop through this API's voices
    for (var i = 0; i < voices.length; i++) { 
        // Add button
        selVoice = ((urlParamVoice == voices[i].vid) && (urlParamApi == voiceGroup)) || ( (!urlParamApi || !urlParamVoice) && (defaultVoice == voices[i].vid) && (defaultApi == voiceGroup) ) ? ' is-success selected-voice' : '';
        buttonsHtml += '<button type="button" class="button button-voice is-light is-rounded' + selVoice + '" data-vid="' + voices[i].vid + '" data-api="' + voiceGroup + '" data-lang="' + voices[i].lang + '" data-sex="' + voices[i].sex + '" data-charlimit="' + ttsServices[voiceGroup].charLimit + '">' + 
                      countryCodeToEmoji(voices[i].flag) + ' ' + voices[i].name +
                      '</button>' + "\n";

        // Add language to array if necessary
        if (voices[i].lang && langs.indexOf(voices[i].lang) === -1) langs.push(voices[i].lang);
    }

    voiceCount += voices.length;
}

// Loop through languages
langs.sort();
var selLang = urlParamLang == 'All' ? ' is-success selected-lang' : ' is-light is-hidden';
var langHtml = '<button type="button" class="button button-lang is-light is-rounded has-text-weight-bold' + selLang + '" data-lang="All">All</button>' + "\n"; 
for (var i = 0; i < langs.length; i++) {
    selLang = (urlParamLang == langs[i]) || ( !urlParamLang && (defaultLang == langs[i]) ) ? ' is-success selected-lang' : ' is-light is-hidden';
    langHtml += '<button type="button" class="button button-lang is-light is-rounded' + selLang + '" data-lang="' + langs[i] + '">' + langs[i] + '</button>' + "\n";
}

// Sexes
var sexes = ['Male', 'Female', 'Novelty'];
var selSex = !urlParamSex || urlParamSex.toUpperCase() == 'A' ? ' is-active' : '';
var filterSexHtml = '<li class="tab tab-sex has-text-weight-bold' + selSex + '" id="tab-A"><a>All</a></li>';
for (var i = 0; i < sexes.length; i++) {
    selSex = (urlParamSex && urlParamSex.toUpperCase() == sexes[i].charAt(0)) ? ' is-active' : '';
    filterSexHtml += '<li class="tab tab-sex' + selSex +'" id="tab-' + sexes[i].charAt(0) + '"><a>' + sexes[i] + '</a></li>';
}

// Insert API and Sex filters
document.getElementById('filter-api').innerHTML = '<ul><li class="tab"><a class="has-text-weight-bold has-background-grey-lighter no-hover" disabled>API</a></li>' + filterApiHtml + '</ul>';
document.getElementById('filter-sex').innerHTML = '<ul><li class="tab"><a class="has-text-weight-bold has-background-grey-lighter no-hover" disabled>Sex</a></li>' + filterSexHtml + '</ul>';

// Insert buttons
document.getElementById('voice-selection').innerHTML = buttonsHtml;
document.getElementById('lang-selection').innerHTML = '<button id="toggleLangs" class="button has-background-grey-lighter has-text-weight-bold is-outlined" onclick="toggleLangs();">Language (show/hide)</button>' + langHtml;

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
var sexTabs = document.getElementsByClassName('tab-sex');
for (var i = 0; i < sexTabs.length; i++) {
    sexTabs[i].addEventListener('click', selectSex);
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
function getSelectedSex() {
    var selSex = document.querySelectorAll('.tab-sex.is-active')[0];
    
    return selSex ? selSex : document.getElementById('tab-A');          // Return All as a fallback
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

// Change selected sex
function selectSex(e, tabName) {
    var tabs = document.querySelectorAll(".tab-sex");
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
    const sex = getSelectedSex().textContent.charAt(0);
    const lang = getSelectedLang().innerHTML;
        
    // Get all the buttons
    var b = document.querySelectorAll('.button-voice');
    
    // Loop through buttons and unhide any that match our filters, hide the rest
    for (var i = 0; i < b.length; i++) {
        if ( 
            ((lang != 'All' && b[i].getAttribute('data-lang') == lang) || lang == 'All' || b[i].getAttribute('data-lang') == null)
            && ((api != 'All' && b[i].getAttribute('data-api') == api) || api == 'All')
            && ((sex != 'A' && b[i].getAttribute('data-sex') == sex) || sex == 'A' || b[i].getAttribute('data-sex') == null)
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
    newUrl = updateURLParameter(newUrl, 's', getSelectedSex().textContent.charAt(0));
    
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
    characterCount(textarea);
}

// Generate URL to TTS output
function generateTTSUrl() {
    const voice = getSelectedVoice();
    const api = voice.dataset.api;
    const text = document.getElementById('text').value.trim() || 'Please enter some text.';
    var url = ttsServices[api].url;
    
    // Change the URL parameters
    changeUrl(voice);

    // Send request to the server
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
        url = url.replace('__LOCALE__', voice.dataset.vid);
        url = url.replace('__SPEED__', 1);
        showAudioPlayer(url);
    } else if (api === 'IBM Watson') {
        url = url.replace('__TEXT__', encodeURIComponent(text));
        url = url.replace('__VOICE__', voice.dataset.vid);
        showAudioPlayer(url);
    }
     else if (api === 'iSpeech') {
        url = url.replace('__TEXT__', encodeURIComponent(text));
        url = url.replace('__VOICE__', voice.dataset.vid);
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
    const selectedVoice = getSelectedVoice();
    const newCharLimit = selectedVoice.dataset.charlimit;
    document.getElementById('text').maxLength = newCharLimit;
    document.getElementById('charlimit').innerHTML = newCharLimit;
    document.getElementById('text').dispatchEvent(new Event('input'));
}

// Show character count/limit
function characterCount(textarea) {
    // Some services count bytes rather than characters
    const thisText = textarea.value;
    const voice = getSelectedVoice();
    const api = voice.dataset.api;
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