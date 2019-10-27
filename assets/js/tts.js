// Amazon Polly voice list: https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
const ttsServices = {
    'Polly':
    {
        url: 'https://streamlabs.com/polly/speak',
        charLimit: 550,
        countBytes: true,
        needsProxy: true,
        voices: [
            {vid: 'Brian', name: 'Brian', flag: 'GB', lang: 'English', accent: 'British', sex: 'M'},
            {vid: 'Amy', name: 'Amy', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'Emma', name: 'Emma', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'Geraint', name: 'Geraint', flag: 'GB-WLS', lang: 'English', accent: 'Welsh', sex: 'M'},
            {vid: 'Russell', name: 'Russell', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: 'Nicole', name: 'Nicole', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'Joey', name: 'Joey', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Justin', name: 'Justin', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Matthew', name: 'Matthew', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Ivy', name: 'Ivy', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Joanna', name: 'Joanna', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Kendra', name: 'Kendra', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Kimberly', name: 'Kimberly', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Salli', name: 'Salli', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Raveena', name: 'Raveena', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: 'Zeina', name: 'Zeina', flag: '', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: 'Zhiyu', name: 'Zhiyu', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: 'Mads', name: 'Mads', flag: 'DK', lang: 'Danish', accent: '', sex: 'M'},
            {vid: 'Naja', name: 'Naja', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'Ruben', name: 'Ruben', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'Lotte', name: 'Lotte', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'Mathieu', name: 'Mathieu', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'Celine', name: 'Céline', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'Chantal', name: 'Chantal', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'Hans', name: 'Hans', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'Marlene', name: 'Marlene', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'Vicki', name: 'Vicki', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'Aditi', name: 'Aditi (+English)', flag: 'IN', lang: 'Hindi', accent: '', sex: 'F'},
            {vid: 'Karl', name: 'Karl', flag: 'IS', lang: 'Icelandic', accent: '', sex: 'M'},
            {vid: 'Dora', name: 'Dóra', flag: 'IS', lang: 'Icelandic', accent: '', sex: 'F'},
            {vid: 'Giorgio', name: 'Giorgio', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'Carla', name: 'Carla', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'Bianca', name: 'Bianca', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'Takumi', name: 'Takumi', flag: 'JP', lang: 'Japanese', accent: '', sex: 'M'},
            {vid: 'Mizuki', name: 'Mizuki', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'Seoyeon', name: 'Seoyeon', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: 'Liv', name: 'Liv', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'Jacek', name: 'Jacek', flag: 'PL', lang: 'Polish', accent: '', sex: 'M'},
            {vid: 'Jan', name: 'Jan', flag: 'PL', lang: 'Polish', accent: '', sex: 'M'},
            {vid: 'Ewa', name: 'Ewa', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'Maja', name: 'Maja', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'Ricardo', name: 'Ricardo', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'M'},
            {vid: 'Vitoria', name: 'Vitória', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'Cristiano', name: 'Cristiano', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'M'},
            {vid: 'Ines', name: 'Inês', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'F'},
            {vid: 'Carmen', name: 'Carmen', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: 'Maxim', name: 'Maxim', flag: 'RU', lang: 'Russian', accent: '', sex: 'M'},
            {vid: 'Tatyana', name: 'Tatyana', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'Enrique', name: 'Enrique', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'M'},
            {vid: 'Conchita', name: 'Conchita', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'F'},
            {vid: 'Lucia', name: 'Lucia', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'F'},
            {vid: 'Mia', name: 'Mia', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'F'},
            {vid: 'Miguel', name: 'Miguel', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'M'},
            {vid: 'Penelope', name: 'Penélope', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
            {vid: 'Astrid', name: 'Astrid', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'Filiz', name: 'Filiz', flag: 'TR', lang: 'Turkish', accent: '', sex: 'M'},
            {vid: 'Gwyneth', name: 'Gwyneth', flag: 'GB-WLS', lang: 'Welsh', accent: '', sex: 'F'},
        ],
    },
    'CereProc':
    {
        url: 'https://www.cereproc.com/livedemo.php',
        charLimit: 2000,
        countBytes: true,
        needsProxy: true,
        voices: [
            {vid: 'Demon', name: 'Demon', flag: 'GB', lang: 'English', accent: 'England', sex: 'N', customEmoji: '\uD83D\uDE08'},
            {vid: 'Giles', name: 'Giles', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'Jack', name: 'Jack', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'Jess', name: 'Jess', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'Lauren', name: 'Lauren', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'Pixie', name: 'Pixie', flag: 'GB', lang: 'English', accent: 'England', sex: 'N', customEmoji: '\uD83E\uDDDA'},
            {vid: 'Robot', name: 'Robot', flag: 'GB', lang: 'English', accent: 'England', sex: 'N', customEmoji: '\uD83E\uDD16'},
            {vid: 'Sarah', name: 'Sarah', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'William', name: 'William', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'Claire', name: 'Claire', flag: 'GB', lang: 'English', accent: 'Lancashire', sex: 'F'},
            {vid: 'Goblin', name: 'Goblin', flag: 'GB', lang: 'English', accent: 'Black Country', sex: 'N', customEmoji: '\uD83D\uDC7A'},
            {vid: 'Sue', name: 'Sue', flag: 'GB', lang: 'English', accent: 'Black Country', sex: 'F'},
            {vid: 'Caitlin', name: 'Caitlin', flag: 'IE', lang: 'English', accent: 'Ireland', sex: 'F'},
            {vid: 'Andrew', name: 'Andrew', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'M'},
            {vid: 'Dodo', name: 'Dodo', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'F'},
            {vid: 'Heather', name: 'Heather', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'F'},
            {vid: 'Kirsty', name: 'Kirsty', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'F'},
            {vid: 'Mairi', name: 'Mairi', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'F'},
            {vid: 'Stuart', name: 'Stuart', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'M'},
            {vid: 'Adam', name: 'Adam', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Andy', name: 'Andy', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Ghost', name: 'Ghost', flag: 'US', lang: 'English', accent: 'American', sex: 'N', customEmoji: '\uD83D\uDC7B'},
            {vid: 'Hannah', name: 'Hannah', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Isabella', name: 'Isabella', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Jordan', name: 'Jordan', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Katherine', name: 'Katherine', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Megan', name: 'Megan', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Nathan', name: 'Nathan', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Rita', name: 'Rita', flag: 'ES', lang: 'Catalan', accent: '', sex: 'F'},
            {vid: 'Mailin', name: 'Mailin', flag: 'CN', lang: 'Chinese', accent: '', sex: 'F'},
            {vid: 'Ada', name: 'Ada', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'Laurent', name: 'Laurent', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'Nicole', name: 'Nicole', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'Suzanne', name: 'Suzanne', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'Florence', name: 'Florence', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'Peig', name: 'Peig', flag: 'IE', lang: 'Gaelic', accent: 'Irish', sex: 'F'},
            {vid: 'Ceitidh', name: 'Ceitidh', flag: 'GB-SCT', lang: 'Gaelic', accent: 'Scottish', sex: 'F'},
            {vid: 'Alex', name: 'Alex', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'Gudrun', name: 'Gudrun', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'Leopold', name: 'Leopold', flag: 'AT', lang: 'German', accent: 'Austrian', sex: 'M'},
            {vid: 'Laura', name: 'Laura', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'Yuki', name: 'Yuki', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'Pola', name: 'Pola', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'Gabriel', name: 'Gabriel', flag: 'BR', lang: 'Portuguese', accent: 'Brazil', sex: 'M'},
            {vid: 'Lucia', name: 'Lucia', flag: 'PT', lang: 'Portuguese', accent: 'Portugal', sex: 'F'},
            {vid: 'Livia', name: 'Livia', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: 'Avrora', name: 'Avrora', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'Ana', name: 'Ana', flag: 'MX', lang: 'Spanish', accent: 'Mexico', sex: 'F'},
            {vid: 'Sara', name: 'Sara', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'F'},
            {vid: 'Ylva', name: 'Ylva', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
        ],
    },
    'IBM Watson':
    {
        url: 'https://text-to-speech-demo.ng.bluemix.net/api/v1/synthesize?text=__TEXT__&voice=__VOICE__&accept=audio%2Fmp3',
        charLimit: 5000,
        countBytes: false,
        voices: [
            {vid: 'en-GB_KateVoice', name: 'Kate', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'en-US_AllisonVoice', name: 'Allison', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_AllisonV2Voice', name: 'Allison V2', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_LisaVoice', name: 'Lisa', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_LisaV2Voice', name: 'Lisa V2', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_MichaelVoice', name: 'Michael', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en-US_MichaelV2Voice', name: 'Michael V2', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'fr-FR_ReneeVoice', name: 'Renee', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'de-DE_BirgitVoice', name: 'Birgit', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'de-DE_BirgitV2Voice', name: 'Birgit V2', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'de-DE_DieterVoice', name: 'Dieter', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'de-DE_DieterV2Voice', name: 'Dieter V2', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'it-IT_FrancescaVoice', name: 'Francesca', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'it-IT_FrancescaV2Voice', name: 'Francesca V2', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'ja-JP_EmiVoice', name: 'Emi', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'pt-BR_IsabelaVoice', name: 'Isabela', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'es-ES_EnriqueVoice', name: 'Enrique', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'M'},
            {vid: 'es-ES_LauraVoice', name: 'Laura', flag: 'ES', lang: 'Spanish', accent: 'European', sex: 'F'},
            {vid: 'es-LA_SofiaVoice', name: 'Sofia', flag: 'MX', lang: 'Spanish', accent: 'Latin American', sex: 'F'},
            {vid: 'es-US_SofiaVoice', name: 'Sofia', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
        ],
    },
    'Acapela':
    {
        url: '',
        charLimit: 2000,
        countBytes: false,
        needsProxy: true,
        voices: [
            {vid: 'graham22k', name: 'Graham', flag: 'GB', lang: 'English', accent: '', sex: 'M'},
            {vid: 'harry22k', name: 'Harry', flag: 'GB', lang: 'English', accent: '', sex: 'M'},
            {vid: 'lucy22k', name: 'Lucy', flag: 'GB', lang: 'English', accent: '', sex: 'F'},
            {vid: 'peter22k', name: 'Peter', flag: 'GB', lang: 'English', accent: '', sex: 'M'},
            {vid: 'peterhappy22k', name: 'Peter, Happy', flag: 'GB', lang: 'English', accent: '', sex: 'M'},
            {vid: 'petersad22k', name: 'Peter, Sad', flag: 'GB', lang: 'English', accent: '', sex: 'M'},
            {vid: 'queenelizabeth22k', name: 'Queen Elizabeth', flag: 'GB', lang: 'English', accent: '', sex: 'F'},
            {vid: 'rachel22k', name: 'Rachel', flag: 'GB', lang: 'English', accent: '', sex: 'F'},
            {vid: 'rosie22k', name: 'Rosie', flag: 'GB', lang: 'English', accent: '', sex: 'F'},
            {vid: 'rhona22k', name: 'Rhona', flag: 'GB-SCT', lang: 'English', accent: 'Scottish', sex: 'F'},
            {vid: 'liam22k', name: 'Liam', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: 'lisa22k', name: 'Lisa', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'olivia22k', name: 'Olivia', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'tyler22k', name: 'Tyler', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: 'deepa22k', name: 'Deepa', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: 'ella22k', name: 'Ella', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'emilioenglish22k', name: 'Emilio', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'josh22k', name: 'Josh', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'karen22k', name: 'Karen', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'kenny22k', name: 'Kenny', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'laura22k', name: 'Laura', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'micah22k', name: 'Micah', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'nelly22k', name: 'Nelly', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'rod22k', name: 'Rod', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'ryan22k', name: 'Ryan', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'saul22k', name: 'Saul', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'scott22k', name: 'Scott', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'sharon22k', name: 'Sharon', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'tracy22k', name: 'Tracy', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'valeriaenglish22k', name: 'Valeria', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'will22k', name: 'Will', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'willhappy22k', name: 'Will, Happy', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'willsad22k', name: 'Will, Sad', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'willfromafar22k', name: 'Will, From Afar', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'willupclose22k', name: 'Will, Up Close', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'willbadguy22k', name: 'Will, Bad Guy', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'willoldman22k', name: 'Will, Old Man', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'willlittlecreature22k', name: 'Will, Little Creature', flag: 'US', lang: 'English', accent: '', sex: 'M'},
            {vid: 'leila22k', name: 'Leila', flag: 'SA', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: 'mehdi22k', name: 'Mehdi', flag: 'SA', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: 'nizar22k', name: 'Nizar', flag: 'SA', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: 'salma22k', name: 'Salma', flag: 'SA', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: 'laia22k', name: 'Laia', flag: 'ES', lang: 'Catalan', accent: '', sex: 'F'},
            {vid: 'lulu22k', name: 'Lulu', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: 'eliska22k', name: 'Eliska', flag: 'CZ', lang: 'Czech', accent: '', sex: 'F'},
            {vid: 'mette22k', name: 'Mette', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'rasmus22k', name: 'Rasmus', flag: 'DK', lang: 'Danish', accent: '', sex: 'M'},
            {vid: 'daan22k', name: 'Daan', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'femke22k', name: 'Femke', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'jasmijn22k', name: 'Jasmijn', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'max22k', name: 'Max', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'jeroen22k', name: 'Jeroen', flag: 'BE', lang: 'Dutch', accent: 'Belgian', sex: 'M'},
            {vid: 'jeroenhappy22k', name: 'Jeroen, Happy', flag: 'BE', lang: 'Dutch', accent: 'Belgian', sex: 'M'},
            {vid: 'jeroensad22k', name: 'Jeroen, Sad', flag: 'BE', lang: 'Dutch', accent: 'Belgian', sex: 'M'},
            {vid: 'sofie22k', name: 'Sofie', flag: 'BE', lang: 'Dutch', accent: 'Belgian', sex: 'F'},
            {vid: 'zoe22k', name: 'Zoe', flag: 'BE', lang: 'Dutch', accent: 'Belgian', sex: 'F'},
            {vid: 'hanna22k', name: 'Hanna', flag: 'FO', lang: 'Faroese', accent: '', sex: 'F'},
            {vid: 'hanus22k', name: 'Hanus', flag: 'FO', lang: 'Faroese', accent: '', sex: 'M'},
            {vid: 'sanna22k', name: 'Sanna', flag: 'FI', lang: 'Finnish', accent: '', sex: 'F'},
            {vid: 'alice22k', name: 'Alice', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'anais22k', name: 'Anais', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'antoine22k', name: 'Antoine', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'antoinehappy22k', name: 'Antoine, Happy', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'antoinesad22k', name: 'Antoine, Sad', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'antoinefromafar22k', name: 'Antoine, From Afar', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'antoineupclose22k', name: 'Antoine, Up Close', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'bruno22k', name: 'Bruno', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'claire22k', name: 'Claire', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'elise22k', name: 'Elise', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'julie22k', name: 'Julie', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'manon22k', name: 'Manon', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'margaux22k', name: 'Margaux', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'margauxhappy22k', name: 'Margaux, Happy', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'margauxsad22k', name: 'Margaux, Sad', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'valentin22k', name: 'Valentin', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'louise22k', name: 'Louise', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'alice-be22k', name: 'Alice', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'anais-be22k', name: 'Anais', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'antoine-be22k', name: 'Antoine', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'M'},
            {vid: 'antoinehappy-be22k', name: 'Antoine, Happy', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'M'},
            {vid: 'antoinesad-be22k', name: 'Antoine, Sad', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'M'},
            {vid: 'antoinefromafar-be22k', name: 'Antoine, From Afar', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'M'},
            {vid: 'antoineupclose-be22k', name: 'Antoine, Up Close', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'M'},
            {vid: 'bruno-be22k', name: 'Bruno', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'M'},
            {vid: 'claire-be22k', name: 'Claire', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'elise-be22k', name: 'Elise', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'julie-be22k', name: 'Julie', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'manon-be22k', name: 'Manon', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'margaux-be22k', name: 'Margaux', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'margauxhappy-be22k', name: 'Margaux, Happy', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'margauxsad-be22k', name: 'Margaux, Sad', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'F'},
            {vid: 'valentin-be22k', name: 'Valentin', flag: 'BE', lang: 'French', accent: 'Belgian', sex: 'M'},
            {vid: 'robot22k', name: 'Robot', flag: 'FR', lang: 'French', accent: '', sex: 'N', customEmoji: '\uD83E\uDD16'},
            {vid: 'andreas22k', name: 'Andreas', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'claudia22k', name: 'Claudia', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'claudiasmile22k', name: 'Claudia, Happy', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'jonas22k', name: 'Jonas', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'julia22k', name: 'Julia', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'klaus22k', name: 'Klaus', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'lea22k', name: 'Lea', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'sarah22k', name: 'Sarah', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'dimitris22k', name: 'Dimitris', flag: 'GR', lang: 'Greek', accent: '', sex: 'M'},
            {vid: 'dimitrishappy22k', name: 'Dimitris, Happy', flag: 'GR', lang: 'Greek', accent: '', sex: 'M'},
            {vid: 'dimitrissad22k', name: 'Dimitris, Sad', flag: 'GR', lang: 'Greek', accent: '', sex: 'M'},
            {vid: 'alessio22k', name: 'Alessio', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'aurora22k', name: 'Aurora', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'chiara22k', name: 'Chiara', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'fabiana22k', name: 'Fabiana', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'vittorio22k', name: 'Vittorio', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'sakura22k', name: 'Sakura', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'minji22k', name: 'Minji', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: 'bente22k', name: 'Bente', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'elias22k', name: 'Elias', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'M'},
            {vid: 'emilie22k', name: 'Emilie', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'kari22k', name: 'Kari', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'olav22k', name: 'Olav', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'M'},
            {vid: 'ania22k', name: 'Ania', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'celia22k', name: 'Celia', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'F'},
            {vid: 'marcia22k', name: 'Marcia', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'alyona22k', name: 'Alyona', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'antonio22k', name: 'Antonio', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'M'},
            {vid: 'ines22k', name: 'Ines', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'F'},
            {vid: 'maria22k', name: 'Maria', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'F'},
            {vid: 'emilio22k', name: 'Emilio', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'M'},
            {vid: 'rodrigo22k', name: 'Rodrigo', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'M'},
            {vid: 'rosa22k', name: 'Rosa', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
            {vid: 'valeria22k', name: 'Valeria', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
            {vid: 'elin22k', name: 'Elin', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'emil22k', name: 'Emil', flag: 'SE', lang: 'Swedish', accent: '', sex: 'M'},
            {vid: 'emma22k', name: 'Emma', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'erik22k', name: 'Erik', flag: 'SE', lang: 'Swedish', accent: '', sex: 'M'},
            {vid: 'filip22k', name: 'Filip', flag: 'SE', lang: 'Swedish', accent: '', sex: 'M'},
            {vid: 'freja22k', name: 'Freja', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'kal22k', name: 'Kal', flag: 'SE', lang: 'Swedish', accent: 'Gothenburg', sex: 'M'},
            {vid: 'mia22k', name: 'Mia', flag: 'SE', lang: 'Swedish', accent: 'Scanian', sex: 'F'},
            {vid: 'samuel22k', name: 'Samuel', flag: 'FI', lang: 'Swedish', accent: 'Finland', sex: 'F'},
            {vid: 'ipek22k', name: 'Ipek', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
        ],
    },
    'Oddcast':
    {
        url: 'https://cache-a.oddcast.com/tts/gen.php?EID=__EID__&LID=__LID__&VID=__VOICE__&TXT=__TEXT__&IS_UTF8=1&EXT=mp3&FNAME=&ACC=__ACC__&API=&SESSION=&CS=__CHECKSUM__',
        charLimit: 600,
        countBytes: false,
        needsProxy: true,   // Not actually required but it's faster to calculate the md5 checksum in PHP
        voices: [           // Voice IDs are not unique as they belong to an engine and a language. Our IDs are in the format 'voiceId-engineId-languageId'
            {vid: '4-3-1', name: 'Bridget', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: '6-2-1', name: 'Catherine', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: '5-4-1', name: 'Daniel', flag: 'GB', lang: 'English', accent: 'British', sex: 'M'},
            {vid: '4-2-1', name: 'Elizabeth', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: '5-3-1', name: 'Hugh', flag: 'GB', lang: 'English', accent: 'British', sex: 'M'},
            {vid: '7-4-1', name: 'Serena', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: '5-2-1', name: 'Simon', flag: 'GB', lang: 'English', accent: 'British', sex: 'M'},
            {vid: '12-4-1', name: 'Fiona', flag: 'GB-SCT', lang: 'English', accent: 'Scottish', sex: 'F'},
            {vid: '8-4-1', name: 'Moira', flag: 'IE', lang: 'English', accent: 'Irish', sex: 'F'},
            {vid: '9-2-1', name: 'Alan', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: '10-2-1', name: 'Grace', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: '4-4-1', name: 'Karen', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: '10-4-1', name: 'Lee', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: '13-4-1', name: 'Tessa', flag: 'ZA', lang: 'English', accent: 'South African', sex: 'F'},
            {vid: '9-4-1', name: 'Sangeeta', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: '11-2-1', name: 'Veena', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: '7-2-1', name: 'Allison', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: '6-3-1', name: 'Ashley', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: '8-3-1', name: 'Beth', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: '2-2-1', name: 'Dave', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: '7-3-1', name: 'James', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: '2-4-1', name: 'Jill', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: '3-3-1', name: 'Julie', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: '1-3-1', name: 'Kate', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: '2-3-1', name: 'Paul', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: '11-4-1', name: 'Samantha', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: '8-2-1', name: 'Steven', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: '1-2-1', name: 'Susan', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: '3-4-1', name: 'Tom', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: '2-2-27', name: 'Laila', flag: '', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: '1-4-27', name: 'Maged', flag: '', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: '1-2-27', name: 'Tarik', flag: '', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: '1-4-22', name: 'Arantxa', flag: 'ES', lang: 'Basque', accent: '', sex: 'F'},
            {vid: '3-2-5', name: 'Empar', flag: 'ES', lang: 'Catalan', accent: 'Valencian', sex: 'F'},
            {vid: '2-2-5', name: 'Jordi', flag: 'ES', lang: 'Catalan', accent: '', sex: 'M'},
            {vid: '1-2-5', name: 'Montserrat', flag: 'ES', lang: 'Catalan', accent: '', sex: 'F'},
            {vid: '1-4-5', name: 'Nuria', flag: 'ES', lang: 'Catalan', accent: '', sex: 'F'},
            {vid: '3-3-10', name: 'Hui', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: '5-3-10', name: 'Kiang', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'M'},
            {vid: '4-3-10', name: 'Liang', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'M'},
            {vid: '1-2-10', name: 'Linlin', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: '2-2-10', name: 'Lisheng', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: '4-4-10', name: 'Ting-Ting', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: '6-3-10', name: 'Kaho', flag: 'HK', lang: 'Chinese', accent: 'Cantonese', sex: 'M'},
            {vid: '7-3-10', name: 'Kayan', flag: 'HK', lang: 'Chinese', accent: 'Cantonese', sex: 'F'},
            {vid: '1-4-10', name: 'Sin-Ji', flag: 'HK', lang: 'Chinese', accent: 'Cantonese', sex: 'F'},
            {vid: '2-4-10', name: 'Ya-Ling', flag: 'TW', lang: 'Chinese', accent: 'Taiwanese', sex: 'F'},
            {vid: '8-3-10', name: 'Yafang', flag: 'TW', lang: 'Chinese', accent: 'Taiwanese', sex: 'F'},
            {vid: '1-4-18', name: 'Zuzana', flag: 'CZ', lang: 'Czech', accent: '', sex: 'F'},
            {vid: '1-2-19', name: 'Frida', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: '1-4-19', name: 'Ida', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: '2-2-19', name: 'Magnus', flag: 'DK', lang: 'Danish', accent: '', sex: 'M'},
            {vid: '2-4-11', name: 'Claire', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: '3-4-11', name: 'Laura', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: '2-2-11', name: 'Saskia', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: '1-2-11', name: 'Willem', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: '4-4-11', name: 'Xander', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: '1-4-11', name: 'Ellen', flag: 'BE', lang: 'Dutch', accent: 'Belgian', sex: 'F'},
            {vid: '1-2-31', name: 'Ludoviko', flag: '', lang: 'Esperanto', accent: '', sex: 'M'},
            {vid: '2-2-23', name: 'Marko', flag: 'FI', lang: 'Finnish', accent: '', sex: 'M'},
            {vid: '1-4-23', name: 'Mikko', flag: 'FI', lang: 'Finnish', accent: '', sex: 'M'},
            {vid: '1-2-23', name: 'Milla', flag: 'FI', lang: 'Finnish', accent: '', sex: 'F'},
            {vid: '2-2-4', name: 'Bernard', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: '5-2-4', name: 'Charlotte', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: '4-2-4', name: 'Florence', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: '3-2-4', name: 'Jolie', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: '4-3-4', name: 'Louis', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: '6-2-4', name: 'Olivier', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: '3-3-4', name: 'Roxane', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: '3-4-4', name: 'Sebastien', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: '5-4-4', name: 'Thomas', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: '4-4-4', name: 'Virginie', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: '1-3-4', name: 'Chloe', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: '1-4-4', name: 'Felix', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'M'},
            {vid: '2-4-4', name: 'Julie', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: '2-3-4', name: 'Leo', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'M'},
            {vid: '1-2-15', name: 'Carmela', flag: 'ES', lang: 'Galician', accent: '', sex: 'F'},
            {vid: '3-4-3', name: 'Anna', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: '3-2-3', name: 'Katrin', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: '1-3-3', name: 'Lena', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: '2-2-3', name: 'Stefan', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: '1-4-3', name: 'Steffi', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: '2-3-3', name: 'Tim', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: '2-4-3', name: 'Yannick', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: '1-2-8', name: 'Afroditi', flag: 'GR', lang: 'Greek', accent: '', sex: 'F'},
            {vid: '1-4-8', name: 'Alexandros', flag: 'GR', lang: 'Greek', accent: '', sex: 'M'},
            {vid: '3-2-8', name: 'Nikos', flag: 'GR', lang: 'Greek', accent: '', sex: 'M'},
            {vid: '1-4-24', name: 'Lekha', flag: 'IN', lang: 'Hindi', accent: '', sex: 'F'},
            {vid: '1-4-29', name: 'Eszter', flag: 'HU', lang: 'Hungarian', accent: '', sex: 'F'},
            {vid: '1-4-28', name: 'Damayanti', flag: 'ID', lang: 'Indonesian', accent: '', sex: 'F'},
            {vid: '1-3-7', name: 'Elisa', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: '10-2-7', name: 'Federica', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: '9-2-7', name: 'Giulia', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: '5-2-7', name: 'Luca', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: '6-2-7', name: 'Marcello', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: '8-2-7', name: 'Matteo', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: '1-2-7', name: 'Paola', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: '1-4-7', name: 'Paolo', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: '7-2-7', name: 'Raffaele', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: '2-3-7', name: 'Roberto', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: '2-2-7', name: 'Silvana', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: '2-4-7', name: 'Silvia', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: '3-2-7', name: 'Valentina', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: '6-3-12', name: 'Haruka', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: '5-3-12', name: 'Hikari', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: '1-4-12', name: 'Kyoko', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: '3-3-12', name: 'Misaki', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: '7-3-12', name: 'Ryo', flag: 'JP', lang: 'Japanese', accent: '', sex: 'M'},
            {vid: '4-3-12', name: 'Sayaka', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: '2-3-12', name: 'Show', flag: 'JP', lang: 'Japanese', accent: '', sex: 'M'},
            {vid: '8-3-12', name: 'Takeru', flag: 'JP', lang: 'Japanese', accent: '', sex: 'M'},
            {vid: '7-3-13', name: 'Dayoung', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: '4-3-13', name: 'Hyeryun', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: '8-3-13', name: 'Hyuna', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: '10-3-13', name: 'Jihun', flag: 'KR', lang: 'Korean', accent: '', sex: 'M'},
            {vid: '5-3-13', name: 'Jimin', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: '2-3-13', name: 'Junwoo', flag: 'KR', lang: 'Korean', accent: '', sex: 'M'},
            {vid: '1-4-13', name: 'Narae', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: '6-3-13', name: 'Sena', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: '1-3-13', name: 'Yumi', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: '9-3-13', name: 'Yura', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: '2-7-20', name: 'Bjorg', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'M'},
            {vid: '1-7-20', name: 'Dagrun', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: '2-2-20', name: 'Henrik', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'M'},
            {vid: '2-4-20', name: 'Stine', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: '1-2-20', name: 'Vilde', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: '1-4-14', name: 'Agata', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: '2-2-14', name: 'Krzysztof', flag: 'PL', lang: 'Polish', accent: '', sex: 'M'},
            {vid: '1-2-14', name: 'Zosia', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: '2-2-6', name: 'Amalia', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'F'},
            {vid: '3-2-6', name: 'Eusebio', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'M'},
            {vid: '3-4-6', name: 'Joana', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'F'},
            {vid: '1-3-6', name: 'Helena', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: '2-3-6', name: 'Rafael', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'M'},
            {vid: '2-4-6', name: 'Raquel', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: '1-7-6', name: 'Ana', flag: 'PT', lang: 'Portuguese', accent: '', sex: 'F'},
            {vid: '2-7-6', name: 'Antonio', flag: 'PT', lang: 'Portuguese', accent: '', sex: 'M'},
            {vid: '3-7-6', name: 'Leonor', flag: 'PT', lang: 'Portuguese', accent: '', sex: 'F'},
            {vid: '4-7-6', name: 'Tiago', flag: 'PT', lang: 'Portuguese', accent: '', sex: 'M'},
            {vid: '1-2-30', name: 'Ioana', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: '1-4-30', name: 'Simona', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: '2-2-21', name: 'Dmitri', flag: 'RU', lang: 'Russian', accent: '', sex: 'M'},
            {vid: '2-4-21', name: 'Milena', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: '1-2-21', name: 'Olga', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: '1-2-2', name: 'Carmen', flag: 'ES', lang: 'Spanish', accent: 'Castilian', sex: 'F'},
            {vid: '6-2-2', name: 'Jorge', flag: 'ES', lang: 'Spanish', accent: 'Castilian', sex: 'M'},
            {vid: '2-2-2', name: 'Juan', flag: 'ES', lang: 'Spanish', accent: 'Castilian', sex: 'M'},
            {vid: '9-2-2', name: 'Leonor', flag: 'ES', lang: 'Spanish', accent: 'Castilian', sex: 'F'},
            {vid: '4-3-2', name: 'Lola', flag: 'ES', lang: 'Spanish', accent: 'Castilian', sex: 'F'},
            {vid: '5-3-2', name: 'Manuel', flag: 'ES', lang: 'Spanish', accent: 'Castilian', sex: 'M'},
            {vid: '1-4-2', name: 'Duardo', flag: 'ES', lang: 'Spanish', accent: '', sex: 'M'},
            {vid: '3-4-2', name: 'Monica', flag: 'ES', lang: 'Spanish', accent: '', sex: 'F'},
            {vid: '1-3-2', name: 'Violeta', flag: 'ES', lang: 'Spanish', accent: '', sex: 'F'},
            {vid: '10-2-2', name: 'Ximena', flag: 'ES', lang: 'Spanish', accent: '', sex: 'F'},
            {vid: '7-2-2', name: 'Carlos', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'M'},
            {vid: '8-2-2', name: 'Soledad', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
            {vid: '4-2-2', name: 'Diego', flag: 'AR', lang: 'Spanish', accent: 'Argentine', sex: 'M'},
            {vid: '3-2-2', name: 'Francisca', flag: 'CL', lang: 'Spanish', accent: 'Chilean', sex: 'F'},
            {vid: '5-2-2', name: 'Esperanza', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'F'},
            {vid: '2-3-2', name: 'Francisco', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'M'},
            {vid: '3-3-2', name: 'Gloria', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'F'},
            {vid: '5-4-2', name: 'Javier', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'M'},
            {vid: '4-4-2', name: 'Paulina', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'F'},
            {vid: '1-4-9', name: 'Alva', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: '1-2-9', name: 'Annika', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: '1-7-9', name: 'Astrid', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: '2-7-9', name: 'Gustav', flag: 'SE', lang: 'Swedish', accent: '', sex: 'M'},
            {vid: '3-4-9', name: 'Oskar', flag: 'SE', lang: 'Swedish', accent: '', sex: 'M'},
            {vid: '2-2-9', name: 'Sven', flag: 'SE', lang: 'Swedish', accent: '', sex: 'M'},
            {vid: '1-4-26', name: 'Narisa', flag: 'TH', lang: 'Thai', accent: '', sex: 'F'},
            {vid: '1-3-26', name: 'Sarawut', flag: 'TH', lang: 'Thai', accent: '', sex: 'M'},
            {vid: '2-3-26', name: 'Somsi', flag: 'TH', lang: 'Thai', accent: '', sex: 'F'},
            {vid: '1-4-16', name: 'Aylin', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
            {vid: '1-2-16', name: 'Kerem', flag: 'TR', lang: 'Turkish', accent: '', sex: 'M'},
            {vid: '3-2-16', name: 'Selin', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
            {vid: '2-2-16', name: 'Zeynep', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
        ],
    },
    'ReadSpeaker':
    {
        url: 'https://demo.readspeaker.com/proxy.php',
        charLimit: 250,
        countBytes: false,
        needsProxy: true,
        voices: [
            {vid: 'English (British) - male', name: '', flag: 'GB', lang: 'English', accent: 'British', sex: 'M'},
            {vid: 'English (British) - female', name: '', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'English (Scottish) - female', name: '', flag: 'GB-SCT', lang: 'English', accent: 'Scottish', sex: 'F'},
            {vid: 'English (Australian) - male', name: '', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: 'English (South African) - female', name: '', flag: 'ZA', lang: 'English', accent: 'South African', sex: 'F'},
            {vid: 'English (American) - male', name: '', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'English (American) - female', name: '', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'English (Indian) - female', name: '', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: 'Arabic - male', name: '', flag: '', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: 'Arabic - female', name: '', flag: '', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: 'Basque - female', name: '', flag: 'ES', lang: 'Basque', accent: '', sex: 'F'},
            {vid: 'Catalan - male', name: '', flag: 'ES', lang: 'Catalan', accent: '', sex: 'M'},
            {vid: 'Chinese (Cantonese) - male', name: '', flag: 'CN', lang: 'Chinese', accent: 'Cantonese', sex: 'M'},
            {vid: 'Chinese (Cantonese) - female', name: '', flag: 'CN', lang: 'Chinese', accent: 'Cantonese', sex: 'F'},
            {vid: 'Chinese (Mandarin) - male', name: '', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'M'},
            {vid: 'Chinese (Mandarin) - female', name: '', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: 'Chinese (Taiwanese Mandarin) - female', name: '', flag: 'TW', lang: 'Chinese', accent: 'Taiwanese Mandarin', sex: 'F'},
            {vid: 'Croatian - female', name: '', flag: 'HR', lang: 'Croatian', accent: '', sex: 'F'},
            {vid: 'Czech - female', name: '', flag: 'CZ', lang: 'Czech', accent: '', sex: 'F'},
            {vid: 'Danish - female', name: '', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'Dutch - male', name: '', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'Dutch - female', name: '', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'Farsi - male', name: '', flag: 'IR', lang: 'Farsi', accent: '', sex: 'M'},
            {vid: 'Farsi - female', name: '', flag: 'IR', lang: 'Farsi', accent: '', sex: 'F'},
            {vid: 'Finnish - female', name: '', flag: 'FI', lang: 'Finnish', accent: '', sex: 'F'},
            {vid: 'Flemish - female', name: '', flag: 'BE', lang: 'Flemish', accent: '', sex: 'F'},
            {vid: 'French - male', name: '', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'French - female', name: '', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'French (Canadian) - male', name: '', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'M'},
            {vid: 'French (Canadian) - female', name: '', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'Frisian - male', name: '', flag: 'NL', lang: 'Frisian', accent: '', sex: 'M'},
            {vid: 'Galician - female', name: '', flag: 'ES', lang: 'Galician', accent: '', sex: 'F'},
            {vid: 'German - male', name: '', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'German - female', name: '', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'Greek - female', name: '', flag: 'GR', lang: 'Greek', accent: '', sex: 'F'},
            {vid: 'Hebrew - female', name: '', flag: 'IL', lang: 'Hebrew', accent: '', sex: 'F'},
            {vid: 'Hindi - female', name: '', flag: 'IN', lang: 'Hindi', accent: '', sex: 'F'},
            {vid: 'Hungarian - female', name: '', flag: 'HU', lang: 'Hungarian', accent: '', sex: 'F'},
            {vid: 'Icelandic - male', name: '', flag: 'IS', lang: 'Icelandic', accent: '', sex: 'M'},
            {vid: 'Indonesian - female', name: '', flag: 'ID', lang: 'Indonesian', accent: '', sex: 'F'},
            {vid: 'Italian - male', name: '', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'Italian - female', name: '', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'Japanese - male', name: '', flag: 'JP', lang: 'Japanese', accent: '', sex: 'M'},
            {vid: 'Japanese - female', name: '', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'Korean - male', name: '', flag: 'KR', lang: 'Korean', accent: '', sex: 'M'},
            {vid: 'Korean - female', name: '', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: 'Norwegian (Bokmål) - female', name: '', flag: 'NO', lang: 'Norwegian', accent: 'Bokmål', sex: 'F'},
            {vid: 'Polish - male', name: '', flag: 'PL', lang: 'Polish', accent: '', sex: 'M'},
            {vid: 'Polish - female', name: '', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'Portuguese - male', name: '', flag: 'PT', lang: 'Portuguese', accent: 'Europe', sex: 'M'},
            {vid: 'Portuguese - female', name: '', flag: 'PT', lang: 'Portuguese', accent: 'Europe', sex: 'F'},
            {vid: 'Portuguese (Brazilian) - female', name: '', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'Romanian - female', name: '', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: 'Russian - male', name: '', flag: 'RU', lang: 'Russian', accent: '', sex: 'M'},
            {vid: 'Russian - female', name: '', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'Slovak - female', name: '', flag: 'SK', lang: 'Slovak', accent: '', sex: 'F'},
            {vid: 'Spanish - male', name: '', flag: 'ES', lang: 'Spanish', accent: '', sex: 'M'},
            {vid: 'Spanish - female', name: '', flag: 'ES', lang: 'Spanish', accent: '', sex: 'F'},
            {vid: 'Spanish (American) - male', name: '', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'M'},
            {vid: 'Spanish (American) - female', name: '', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
            {vid: 'Spanish (Mexican) - male', name: '', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'M'},
            {vid: 'Spanish (Mexican) - female', name: '', flag: 'MX', lang: 'Spanish', accent: 'Mexican', sex: 'F'},
            {vid: 'Swedish - male', name: '', flag: 'SE', lang: 'Swedish', accent: '', sex: 'M'},
            {vid: 'Swedish - female', name: '', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'Thai - female', name: '', flag: 'TH', lang: 'Thai', accent: '', sex: 'F'},
            {vid: 'Turkish - male', name: '', flag: 'TR', lang: 'Turkish', accent: '', sex: 'M'},
            {vid: 'Turkish - female', name: '', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
            {vid: 'Valencian - female', name: '', flag: 'ES', lang: 'Valencian', accent: '', sex: 'F'},
            {vid: 'Welsh - male', name: '', flag: 'GB-WLS', lang: 'Welsh', accent: '', sex: 'M'},
            {vid: 'Welsh - female', name: '', flag: 'GB-WLS', lang: 'Welsh', accent: '', sex: 'F'},
        ],
    },
    'Google Translate':
    {
        url: 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&client=tw-ob&prev=input&textlen=__LEN__&q=__TEXT__&tl=__LOCALE__&ttsspeed=__SPEED__',
        charLimit: 200,
        countBytes: false,
        voices: [
            {vid: 'en-gb', name: '', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'en-us', name: '', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-au', name: '', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'en-in', name: '', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: 'ar', name: '', flag: '', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: 'bn-bd', name: '', flag: 'BD', lang: 'Bengali', accent: '', sex: 'M'},
            {vid: 'zh-cn', name: '', flag: 'CN', lang: 'Chinese', accent: '', sex: 'F'},
            {vid: 'cs-cz', name: '', flag: 'CZ', lang: 'Czech', accent: '', sex: 'F'},
            {vid: 'da-dk', name: '', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'nl-nl', name: '', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'et-ee', name: '', flag: 'EE', lang: 'Estonian', accent: '', sex: 'M'},
            {vid: 'tl-ph', name: '', flag: 'PH', lang: 'Filipino (Tagalog)', accent: '', sex: 'F'},
            {vid: 'fi-fi', name: '', flag: 'FI', lang: 'Finnish', accent: '', sex: 'F'},
            {vid: 'fr-fr', name: '', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'fr-ca', name: '', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'de-de', name: '', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'el-gr', name: '', flag: 'GR', lang: 'Greek', accent: '', sex: 'F'},
            {vid: 'hi-in', name: '', flag: 'IN', lang: 'Hindi', accent: '', sex: 'F'},
            {vid: 'hu-hu', name: '', flag: 'HU', lang: 'Hungarian', accent: '', sex: 'F'},
            {vid: 'it-it', name: '', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'id-id', name: '', flag: 'ID', lang: 'Indonesian', accent: '', sex: 'F'},
            {vid: 'ja-jp', name: '', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'jw-id', name: '', flag: 'ID', lang: 'Javanese', accent: '', sex: 'F'},
            {vid: 'km-kh', name: '', flag: 'KH', lang: 'Khmer', accent: '', sex: 'F'},
            {vid: 'ko-kr', name: '', flag: 'KR', lang: 'Korean', accent: '', sex: 'M'},
            {vid: 'la', name: '', flag: '', lang: 'Latin', accent: '', sex: 'M'},
            {vid: 'ml-in', name: '', flag: 'IN', lang: 'Malayalam', accent: '', sex: 'M'},
            {vid: 'mr-in', name: '', flag: 'IN', lang: 'Marathi', accent: '', sex: 'F'},
            {vid: 'my-mm', name: '', flag: 'MM', lang: 'Myanmar (Burmese)', accent: '', sex: 'F'},
            {vid: 'ne-np', name: '', flag: 'NP', lang: 'Nepali', accent: '', sex: 'F'},
            {vid: 'nb-no', name: '', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'pl-pl', name: '', flag: 'PL', lang: 'Polish', accent: '', sex: 'M'},
            {vid: 'pt-pt', name: '', flag: 'PT', lang: 'Portuguese', accent: 'Europe', sex: 'F'},
            {vid: 'pt-br', name: '', flag: 'BR', lang: 'Portuguese', accent: 'Brazil', sex: 'F'},
            {vid: 'ro-ro', name: '', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: 'ru-ru', name: '', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'si-lk', name: '', flag: 'LK', lang: 'Sinhala', accent: '', sex: 'F'},
            {vid: 'sk-sk', name: '', flag: 'SK', lang: 'Slovak', accent: '', sex: 'F'},
            {vid: 'es-es', name: '', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'F'},
            {vid: 'es-mx', name: '', flag: 'MX', lang: 'Spanish', accent: 'Mexico', sex: 'F'},
            {vid: 'su-sd', name: '', flag: 'SD', lang: 'Sudanese', accent: '', sex: 'F'},
            {vid: 'sv-se', name: '', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'ta-in', name: '', flag: 'IN', lang: 'Tamil', accent: '', sex: 'F'},
            {vid: 'te-in', name: '', flag: 'IN', lang: 'Telugu', accent: '', sex: 'F'},
            {vid: 'th-th', name: '', flag: 'TH', lang: 'Thai', accent: '', sex: 'F'},
            {vid: 'tr-tr', name: '', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
            {vid: 'uk-ua', name: '', flag: 'UA', lang: 'Ukrainian', accent: '', sex: 'F'},
            {vid: 'vi-vn', name: '', flag: 'VN', lang: 'Vietnamese', accent: '', sex: 'F'},
        ],
    },
    'iSpeech':
    {
        url: 'https://www.ispeech.org/p/generic/getaudio?action=convert&pitch=100&voice=__VOICE__&speed=__SPEED__&text=__TEXT__',
        charLimit: 150,
        countBytes: true,
        voices: [
            {vid: 'ukenglishfemale', name: '', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'ukenglishmale', name: '', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'usenglishfemale', name: '', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'usenglishmale', name: '', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'auenglishfemale', name: '', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'caenglishfemale', name: '', flag: 'CA', lang: 'English', accent: 'Canadian', sex: 'F'},
            {vid: 'arabicmale', name: '', flag: 'EG', lang: 'Arabic', accent: 'Egypt', sex: 'M'},
            {vid: 'chchinesefemale', name: '', flag: 'CN', lang: 'Chinese', accent: '', sex: 'F'},
            {vid: 'hkchinesefemale', name: '', flag: 'HK', lang: 'Chinese', accent: 'Hong Kong', sex: 'F'},
            //{vid: 'twchinesefemale', name: '', flag: 'TW', lang: 'Chinese', accent: 'Taiwan', sex: 'F'}, // "invalid voice" as of May 2019
            {vid: 'eurczechfemale', name: '', flag: 'CZ', lang: 'Czech', accent: '', sex: 'F'},
            {vid: 'eurdanishfemale', name: '', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'eurdutchfemale', name: '', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'eurfinnishfemale', name: '', flag: 'FI', lang: 'Finnish', accent: '', sex: 'F'},
            {vid: 'eurfrenchfemale', name: '', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'eurfrenchmale', name: '', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'cafrenchfemale', name: '', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'cafrenchmale', name: '', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'M'},
            {vid: 'eurgermanfemale', name: '', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'eurgermanmale', name: '', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'eurgreekfemale', name: '', flag: 'GR', lang: 'Greek', accent: '', sex: 'F'},
            {vid: 'huhungarianfemale', name: '', flag: 'HU', lang: 'Hungarian', accent: '', sex: 'F'},
            {vid: 'euritalianfemale', name: '', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'euritalianmale', name: '', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'jpjapanesefemale', name: '', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'krkoreanfemale', name: '', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: 'eurnorwegianfemale', name: '', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'eurpolishfemale', name: '', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'eurportuguesefemale', name: '', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'F'},
            {vid: 'eurportuguesemale', name: '', flag: 'PT', lang: 'Portuguese', accent: 'European', sex: 'M'},
            {vid: 'brportuguesefemale', name: '', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'rurussianfemale', name: '', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'rurussianmale', name: '', flag: 'RU', lang: 'Russian', accent: '', sex: 'M'},
            {vid: 'eurspanishfemale', name: '', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'F'},
            {vid: 'eurspanishmale', name: '', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'M'},
            {vid: 'usspanishfemale', name: '', flag: 'MX', lang: 'Spanish', accent: 'Latin American', sex: 'F'},
            {vid: 'usspanishmale', name: '', flag: 'MX', lang: 'Spanish', accent: 'Latin American', sex: 'M'},
            {vid: 'swswedishfemale', name: '', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'eurturkishfemale', name: '', flag: 'TR', lang: 'Turkish', accent: '', sex: 'F'},
            {vid: 'eurturkishmale', name: '', flag: 'TR', lang: 'Turkish', accent: '', sex: 'M'},
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
    buttonsHtml += '<a class="button button-voice button-heading has-background-lighter has-text-left has-text-weight-bold is-fullwidth no-hover" data-api="' + voiceGroup + '">' + voiceGroup + '</a>' + "\n";

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
        buttonsHtml += '<button type="button" class="button button-voice is-light is-rounded' + selVoice + '" data-vid="' + voices[i].vid + '" data-api="' + voiceGroup + '" data-lang="' + voices[i].lang + '" data-sex="' + voices[i].sex + '" data-charlimit="' + ttsServices[voiceGroup].charLimit + '">' +
                      '<span class="voice-flag">' + countryCodeToEmoji(voices[i].flag) + '</span><span class="voice-name">' + voiceName +
                      '</span><span class="voice-sex">' + genderLetterToEmoji(voices[i]) + '</span></button>' + "\n";

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

    // Send request to the server if it needs proxying to get around CORS issues
    if (ttsServices[api].needsProxy) {
        // Show a loading spinner while the proxy sends/receives the request
        document.getElementById('playbutton').classList.add('is-loading');

        // Send request to our proxy script
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == '200') {
                //console.log(response);
                if (response.success === true) {
                    showAudioPlayer(response.speak_url);
                } else if (response.error) {
                    showErrorMessage(response.error);
                }
            } else {
                console.error(response);
            }

            // Remove loading spinner
            document.getElementById('playbutton').classList.remove('is-loading');
        }
        xhr.open('POST', 'proxy.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('service=' + encodeURIComponent(api) + '&voice=' + encodeURIComponent(voice.dataset.vid) + '&text=' + encodeURIComponent(text));
    } else {
        // No need to proxy we can just replace some URL parameters

        // Google's default speed is 1, iSpeech uses 0, no other service has such a variable
        var speed = (api === 'Google Translate') ? 1 : 0;

        // Perform possible rext replacements for this api
        url = url.replace('__LEN__', text.length);
        url = url.replace('__TEXT__', encodeURIComponent(text));
        url = url.replace('__LOCALE__', voice.dataset.vid);
        url = url.replace('__VOICE__', voice.dataset.vid);
        url = url.replace('__SPEED__', speed);

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
    copyBtn.classList.add('is-success');

    setTimeout(() => {
        copyBtn.textContent = origText;
        copyBtn.classList.remove('is-success');
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
function characterCount(textarea) {
    // Some services count bytes rather than characters
    const thisText = textarea.value;
    const voice = getSelectedVoice();
    const api = voice.dataset.api;
    const curLength = ttsServices[api].countBytes === true ? byteCount(thisText.trim()) : thisText.trim().length;
    document.getElementById('chars').innerHTML = curLength;

    // if current length is near the max length change colour to red
    if (curLength > (textarea.maxLength - 10)) {
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

// Convert gender letter to Emoji
function genderLetterToEmoji(voice) {
    if (voice.sex == 'M') {
        return '\u2642';
    } else if (voice.sex == 'F') {
        return '\u2640';
    } else if (voice.sex == 'N') {
        if (voice.customEmoji) return voice.customEmoji;
        return '\u2753';
    }

    return '\u2753';
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
                    ' <button type="button" class="button is-small is-outlined" onclick="copyToClipboard(null, this, \'' + currentData[i].audio + '\');">copy URL</button>' +
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
            'voiceName': voice.dataset.vid,
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
