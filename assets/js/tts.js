// Amazon Polly voice list: https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
const ttsServices = {
    'Polly':
    {
        charLimit: 550,
        countBytes: true,
        voices: [
            {vid: 'Brian', name: 'Brian', flag: 'GB', lang: 'English', accent: 'British', sex: 'M'},
            {vid: 'Amy', name: 'Amy', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'Emma', name: 'Emma', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'Geraint', name: 'Geraint', flag: 'GB-WLS', lang: 'English', accent: 'Welsh', sex: 'M'},
            {vid: 'Russell', name: 'Russell', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: 'Nicole', name: 'Nicole', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            //{vid: 'Olivia', name: 'Olivia', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'Joey', name: 'Joey', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Justin', name: 'Justin', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            //{vid: 'Kevin', name: 'Kevin', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Matthew', name: 'Matthew', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Ivy', name: 'Ivy', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Joanna', name: 'Joanna', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Kendra', name: 'Kendra', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Kimberly', name: 'Kimberly', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Salli', name: 'Salli', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            //{vid: 'Aria', name: 'Aria', flag: 'NZ', lang: 'English', accent: 'New Zealand', sex: 'F'},
            //{vid: 'Ayanda', name: 'Ayanda', flag: 'ZA', lang: 'English', accent: 'South African', sex: 'F'},
            {vid: 'Raveena', name: 'Raveena', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: 'Zeina', name: 'Zeina', flag: 'ARAB', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: 'Zhiyu', name: 'Zhiyu', flag: 'CN', lang: 'Chinese', accent: 'Mandarin', sex: 'F'},
            {vid: 'Mads', name: 'Mads', flag: 'DK', lang: 'Danish', accent: '', sex: 'M'},
            {vid: 'Naja', name: 'Naja', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'Ruben', name: 'Ruben', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'Lotte', name: 'Lotte', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'Mathieu', name: 'Mathieu', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'Celine', name: 'Céline', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'Lea', name: 'Léa', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'Chantal', name: 'Chantal', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            //{vid: 'Gabrielle', name: 'Gabrielle', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
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
            {vid: 'Camila', name: 'Camila', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
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
            {vid: 'Lupe', name: 'Lupe', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
            {vid: 'Penelope', name: 'Penélope', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
            {vid: 'Astrid', name: 'Astrid', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
            {vid: 'Filiz', name: 'Filiz', flag: 'TR', lang: 'Turkish', accent: '', sex: 'M'},
            {vid: 'Gwyneth', name: 'Gwyneth', flag: 'GB-WLS', lang: 'Welsh', accent: '', sex: 'F'},
        ],
    },
    'CereProc':
    {
        charLimit: 2000,
        countBytes: true,
        voices: [
            {vid: 'Amy', name: 'Amy', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'Demon', name: 'Demon', flag: 'GB', lang: 'English', accent: 'England', sex: 'N', customEmoji: '\uD83D\uDE08'},
            {vid: 'Giles', name: 'Giles', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'Jack', name: 'Jack', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'Jess', name: 'Jess', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'Lauren', name: 'Lauren', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'Pixie', name: 'Pixie', flag: 'GB', lang: 'English', accent: 'England', sex: 'N', customEmoji: '\uD83E\uDDDA'},
            {vid: 'Robot', name: 'Robot', flag: 'GB', lang: 'English', accent: 'England', sex: 'N', customEmoji: '\uD83E\uDD16'},
            {vid: 'Sarah', name: 'Sarah', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'William', name: 'William', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'Goblin', name: 'Goblin', flag: 'GB', lang: 'English', accent: 'Black Country', sex: 'N', customEmoji: '\uD83D\uDC7A'},
            {vid: 'Sue', name: 'Sue', flag: 'GB', lang: 'English', accent: 'Black Country', sex: 'F'},
            {vid: 'Caitlin', name: 'Caitlin', flag: 'IE', lang: 'English', accent: 'Ireland', sex: 'F'},
            {vid: 'Andrew', name: 'Andrew', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'M'},
            {vid: 'Heather', name: 'Heather', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'F'},
            {vid: 'Kirsty', name: 'Kirsty', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'F'},
            {vid: 'Mairi', name: 'Mairi', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'F'},
            {vid: 'Stuart', name: 'Stuart', flag: 'GB-SCT', lang: 'English', accent: 'Scotland', sex: 'M'},
            {vid: 'Adam', name: 'Adam', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Andy', name: 'Andy', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Carolyn', name: 'Carolyn', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Ghost', name: 'Ghost', flag: 'US', lang: 'English', accent: 'American', sex: 'N', customEmoji: '\uD83D\uDC7B'},
            {vid: 'Hannah', name: 'Hannah', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Isabella', name: 'Isabella', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Jordan', name: 'Jordan', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Katherine', name: 'Katherine', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Megan', name: 'Megan', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'Nathan', name: 'Nathan', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'Nicole', name: 'Nicole', flag: 'FR', lang: 'English', accent: 'French', sex: 'F'},
            {vid: 'Rita', name: 'Rita', flag: 'ES-CA', lang: 'Catalan', accent: '', sex: 'F'},
            {vid: 'Mailin-CereWave', name: 'Mailin', flag: 'CN', lang: 'Chinese', accent: '', sex: 'F'},
            {vid: 'Marie-CereWave', name: 'Marie', flag: 'DK', lang: 'Danish', accent: '', sex: 'F'},
            {vid: 'Ada', name: 'Ada', flag: 'NL', lang: 'Dutch', accent: '', sex: 'F'},
            {vid: 'Laurent', name: 'Laurent', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'Suzanne', name: 'Suzanne', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'Florence', name: 'Florence', flag: 'CA', lang: 'French', accent: 'Canadian', sex: 'F'},
            {vid: 'Peig', name: 'Peig', flag: 'IE', lang: 'Gaelic', accent: 'Irish', sex: 'F'},
            {vid: 'Ceitidh', name: 'Ceitidh', flag: 'GB-SCT', lang: 'Gaelic', accent: 'Scottish', sex: 'F'},
            {vid: 'Alex', name: 'Alex', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'Gudrun', name: 'Gudrun', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'Leopold', name: 'Leopold', flag: 'AT', lang: 'German', accent: 'Austrian', sex: 'M'},
            {vid: 'Dario', name: 'Dario', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'Francesco-CereWave', name: 'Francesco', flag: 'IT', lang: 'Italian', accent: '', sex: 'M'},
            {vid: 'Laura', name: 'Laura', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'Yuki', name: 'Yuki', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'Clara', name: 'Clara', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'Hulda', name: 'Hulda', flag: 'NO', lang: 'Norwegian', accent: '', sex: 'F'},
            {vid: 'Pola', name: 'Pola', flag: 'PL', lang: 'Polish', accent: '', sex: 'F'},
            {vid: 'Gabriel', name: 'Gabriel', flag: 'BR', lang: 'Portuguese', accent: 'Brazil', sex: 'M'},
            {vid: 'Lucia', name: 'Lucia', flag: 'PT', lang: 'Portuguese', accent: 'Portugal', sex: 'F'},
            {vid: 'Daria', name: 'Daria', flag: 'RO', lang: 'Romanian', accent: '', sex: 'F'},
            {vid: 'Avrora', name: 'Avrora', flag: 'RU', lang: 'Russian', accent: '', sex: 'F'},
            {vid: 'Ana', name: 'Ana', flag: 'MX', lang: 'Spanish', accent: 'Mexico', sex: 'F'},
            {vid: 'Sara', name: 'Sara', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'F'},
            {vid: 'Ylva', name: 'Ylva', flag: 'SE', lang: 'Swedish', accent: '', sex: 'F'},
        ],
    },
    'TikTok':
    {
        charLimit: 300,
        countBytes: true,
        voices: [
            // ENGLISH
            {vid: 'en_uk_001', name: 'UK Male 1', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'en_uk_003', name: 'UK Male 2', flag: 'GB', lang: 'English', accent: 'England', sex: 'M'},
            {vid: 'en_female_emotional', name: 'UK Female', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'en_au_001', name: 'AU Female', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'en_au_002', name: 'AU Male', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'M'},
            {vid: 'en_us_001', name: 'US Female 1', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en_us_002', name: 'US Female 2', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en_us_006', name: 'US Male 1', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en_us_007', name: 'US Male 2', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en_us_009', name: 'US Male 3', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en_us_010', name: 'US Male 4', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en_male_narration', name: 'US Male Narrator', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en_male_funny', name: 'US Male Funny', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            // DISNEY
            {vid: 'en_us_ghostface', name: 'Ghost Face', flag: 'US', lang: 'English', accent: 'American', sex: 'N', customEmoji: '\uD83D\uDC7B'},
            {vid: 'en_us_chewbacca', name: 'Chewbacca', flag: '', lang: 'English', accent: '', sex: 'N', customEmoji: '\uD83D\uDC3B'},
            {vid: 'en_us_c3po', name: 'C-3PO', flag: '', lang: 'English', accent: '', sex: 'N', customEmoji: '\uD83E\uDD16'},
            {vid: 'en_us_stormtrooper', name: 'Stormtrooper', flag: 'US', lang: 'English', accent: 'American', sex: 'N', customEmoji: '\uD83D\uDC68\u200D\uD83D\uDE80'},
            {vid: 'en_us_stitch', name: 'Stitch', flag: '', lang: 'English', accent: '', sex: 'N', customEmoji: '\uD83D\uDC28'},
            {vid: 'en_us_rocket', name: 'Rocket', flag: 'US', lang: 'English', accent: 'American', sex: 'N', customEmoji: '\uD83E\uDD9D'},
            // ENGLISH SINGING
            {vid: 'en_female_f08_salut_damour', name: 'Song - Salut d\'amour', flag: 'US', lang: 'English', accent: '', sex: 'F'},
            {vid: 'en_female_f08_warmy_breeze', name: 'Song - Warmy Breeze', flag: 'US', lang: 'English', accent: '', sex: 'F'},
            {vid: 'en_male_m03_lobby', name: 'Song - Lobby', flag: 'US', lang: 'English', accent: '', sex: 'M'},
            {vid: 'en_male_m03_sunshine_soon', name: 'Song - Sunshine Soon', flag: 'US', lang: 'English', accent: '', sex: 'M'},
            // FRENCH
            {vid: 'fr_001', name: 'French Male 1', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'fr_002', name: 'French Male 2', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            // GERMAN
            {vid: 'de_001', name: 'German Female', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'de_002', name: 'German Male', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            // INDONESIAN
            {vid: 'id_001', name: 'Indonesian Female', flag: 'ID', lang: 'Indonesian', accent: '', sex: 'F'},
            // JAPANESE
            {vid: 'jp_001', name: 'Japanese Female 1', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'jp_003', name: 'Japanese Female 2', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'jp_005', name: 'Japanese Female 3', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'jp_006', name: 'Japanese Male', flag: 'JP', lang: 'Japanese', accent: '', sex: 'M'},
            // KOREAN
            {vid: 'kr_002', name: 'Korean Male', flag: 'KR', lang: 'Korean', accent: '', sex: 'M'},
            {vid: 'kr_004', name: 'Korean Male', flag: 'KR', lang: 'Korean', accent: '', sex: 'M'},
            {vid: 'kr_003', name: 'Korean Female', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            // PORTUGUESE
            //{vid: 'br_001', name: 'Brazilian Female 1', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'br_003', name: 'Brazilian Female 1', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'br_004', name: 'Brazilian Female 2', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'br_005', name: 'Brazilian Male', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'M'},
            // SPANISH
            {vid: 'es_002', name: 'Spanish Male', flag: 'ES', lang: 'Spanish', accent: 'Spain', sex: 'M'},
            {vid: 'es_mx_002', name: 'Mexican Male', flag: 'MX', lang: 'Spanish', accent: 'Mexico', sex: 'M'},
        ],
    },
    'IBM Watson':
    {
        charLimit: 5000,
        countBytes: false,
        voices: [
            {vid: 'en-GB_CharlotteV3Voice', name: 'Charlotte', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'en-GB_JamesV3Voice', name: 'James', flag: 'GB', lang: 'English', accent: 'British', sex: 'M'},
            {vid: 'en-GB_KateV3Voice', name: 'Kate', flag: 'GB', lang: 'English', accent: 'British', sex: 'F'},
            {vid: 'en-US_AllisonV3Voice', name: 'Allison', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_EmilyVoice', name: 'Emily', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_HenryV3Voice', name: 'Henry', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en-US_KevinV3Voice', name: 'Kevin', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en-US_LisaV3Voice', name: 'Lisa', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-US_MichaelV3Voice', name: 'Michael', flag: 'US', lang: 'English', accent: 'American', sex: 'M'},
            {vid: 'en-US_OliviaV3Voice', name: 'Olivia', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'ar-AR_OmarVoice', name: 'Omar', flag: 'ARAB', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: 'zh-CN_LiNaVoice', name: 'LiNa', flag: 'CN', lang: 'Chinese', accent: '', sex: 'F'},
            {vid: 'zh-CN_WangWeiVoice', name: 'WangWei', flag: 'CN', lang: 'Chinese', accent: '', sex: 'M'},
            {vid: 'zh-CN_ZhangJingVoice', name: 'ZhangJing', flag: 'CN', lang: 'Chinese', accent: '', sex: 'F'},
            {vid: 'nl-NL_EmmaVoice', name: 'Emma', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'nl-NL_LiamVoice', name: 'Liam', flag: 'NL', lang: 'Dutch', accent: '', sex: 'M'},
            {vid: 'fr-FR_NicolasV3Voice', name: 'Nicolas', flag: 'FR', lang: 'French', accent: '', sex: 'M'},
            {vid: 'fr-FR_ReneeV3Voice', name: 'Renee', flag: 'FR', lang: 'French', accent: '', sex: 'F'},
            {vid: 'de-DE_DieterV3Voice', name: 'Dieter', flag: 'DE', lang: 'German', accent: '', sex: 'M'},
            {vid: 'de-DE_ErikaV3Voice', name: 'Erika', flag: 'DE', lang: 'German', accent: '', sex: 'F'},
            {vid: 'it-IT_FrancescaV3Voice', name: 'Francesca', flag: 'IT', lang: 'Italian', accent: '', sex: 'F'},
            {vid: 'ja-JP_EmiV3Voice', name: 'Emi', flag: 'JP', lang: 'Japanese', accent: '', sex: 'F'},
            {vid: 'ko-KR_YoungmiVoice', name: 'Youngmi', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: 'ko-KR_YunaVoice', name: 'Yuna', flag: 'KR', lang: 'Korean', accent: '', sex: 'F'},
            {vid: 'pt-BR_IsabelaV3Voice', name: 'Isabela', flag: 'BR', lang: 'Portuguese', accent: 'Brazilian', sex: 'F'},
            {vid: 'es-ES_EnriqueV3Voice', name: 'Enrique', flag: 'ES', lang: 'Spanish', accent: 'Castilian', sex: 'M'},
            {vid: 'es-ES_LauraV3Voice', name: 'Laura', flag: 'ES', lang: 'Spanish', accent: 'Castilian', sex: 'F'},
            {vid: 'es-LA_SofiaV3Voice', name: 'Sofia', flag: 'MX', lang: 'Spanish', accent: 'Latin American', sex: 'F'},
            {vid: 'es-US_SofiaV3Voice', name: 'Sofia', flag: 'US', lang: 'Spanish', accent: 'American', sex: 'F'},
        ],
    },
    'Acapela':
    {
        charLimit: 2000,
        countBytes: false,
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
            {vid: 'laia22k', name: 'Laia', flag: 'ES-CA', lang: 'Catalan', accent: '', sex: 'F'},
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
        charLimit: 600,
        countBytes: false,
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
            {vid: '2-2-27', name: 'Laila', flag: 'ARAB', lang: 'Arabic', accent: '', sex: 'F'},
            {vid: '1-4-27', name: 'Maged', flag: 'ARAB', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: '1-2-27', name: 'Tarik', flag: 'ARAB', lang: 'Arabic', accent: '', sex: 'M'},
            {vid: '1-4-22', name: 'Arantxa', flag: 'ES-EU', lang: 'Basque', accent: '', sex: 'F'},
            {vid: '3-2-5', name: 'Empar', flag: 'ES-CA', lang: 'Catalan', accent: 'Valencian', sex: 'F'},
            {vid: '2-2-5', name: 'Jordi', flag: 'ES-CA', lang: 'Catalan', accent: '', sex: 'M'},
            {vid: '1-2-5', name: 'Montserrat', flag: 'ES-CA', lang: 'Catalan', accent: '', sex: 'F'},
            {vid: '1-4-5', name: 'Nuria', flag: 'ES-CA', lang: 'Catalan', accent: '', sex: 'F'},
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
            {vid: '1-2-31', name: 'Ludoviko', flag: 'ESPER', lang: 'Esperanto', accent: '', sex: 'M'},
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
            {vid: '1-2-15', name: 'Carmela', flag: 'ES-GA', lang: 'Galician', accent: '', sex: 'F'},
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
    'Google Translate':
    {
        charLimit: 200,
        countBytes: false,
        voices: [
            {vid: 'en-gb', name: '', flag: 'GB', lang: 'English', accent: 'England', sex: 'F'},
            {vid: 'en-us', name: '', flag: 'US', lang: 'English', accent: 'American', sex: 'F'},
            {vid: 'en-au', name: '', flag: 'AU', lang: 'English', accent: 'Australian', sex: 'F'},
            {vid: 'en-in', name: '', flag: 'IN', lang: 'English', accent: 'Indian', sex: 'F'},
            {vid: 'ar', name: '', flag: 'ARAB', lang: 'Arabic', accent: '', sex: 'F'},
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
};

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
        buttonsHtml += '<button type="button" class="button button-voice ' + styles.button_fg + ' is-rounded' + selVoice + '" data-vid="' + voices[i].vid + '" data-api="' + voiceGroup + '" data-lang="' + voices[i].lang + '" data-sex="' + voices[i].sex + '" data-charlimit="' + ttsServices[voiceGroup].charLimit + '">' +
                      '<span class="voice-flag">' + countryCodeToEmoji(voices[i].flag) + '</span><span class="voice-name">' + voiceName +
                      '</span><span class="voice-sex">' + genderLetterToEmoji(voices[i]) + '</span></button>' + "\n";

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

// Sexes
var sexes = ['Male', 'Female', 'Novelty'];
var selSex = !urlParamSex || urlParamSex.toUpperCase() == 'A' ? ' is-active' : '';
var filterSexHtml = '<li class="tab tab-sex has-text-weight-bold' + selSex + '" id="tab-A"><a>All</a></li>';
for (var i = 0; i < sexes.length; i++) {
    selSex = (urlParamSex && urlParamSex.toUpperCase() == sexes[i].charAt(0)) ? ' is-active' : '';
    filterSexHtml += '<li class="tab tab-sex' + selSex +'" id="tab-' + sexes[i].charAt(0) + '"><a>' + sexes[i] + '</a></li>';
}

// Insert API and Sex filters
document.getElementById('filter-api').innerHTML = '<ul><li class="tab"><a class="has-text-weight-bold no-hover" disabled>API</a></li>' + filterApiHtml + '</ul>';
document.getElementById('filter-sex').innerHTML = '<ul><li class="tab"><a class="has-text-weight-bold no-hover" disabled>Sex</a></li>' + filterSexHtml + '</ul>';

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
            ((lang != 'All' && b[i].getAttribute('data-lang') == lang) || lang == 'All' || b[i].getAttribute('data-lang') == null) &&
            ((api != 'All' && b[i].getAttribute('data-api') == api) || api == 'All') &&
            ((sex != 'A' && b[i].getAttribute('data-sex') == sex) || sex == 'A' || b[i].getAttribute('data-sex') == null)
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
    };
    xhr.open('POST', 'proxy.php', true);
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
    // Windows (as of Windows 10) still doesn't support flag emojis so we'll display an image instead
    // There are also some edge cases for languages without a flag emoji (Arabic, Catalan, Basque...)

    var emoji = '\ud83c\udff3\ufe0f';   // white flag (default)
    var noFlag = (countryCode == 'ARAB' || countryCode == 'ES-CA' || countryCode == 'ES-GA' || countryCode == 'ES-EU' || countryCode == 'ESPER');   // "country" codes with no flag emoji
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

        case 'ES-EU':   // Basque - flag not currently in flag-icon-css
            imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_the_Basque_Country.svg';
            break;

        case 'ESPER':   // Esperanto - international language with no nation so won't ever be in flag-icon-css
            imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Esperanto.svg';
            break;

        default:
            imgUrl = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/' + countryCode.toLowerCase() + '.svg';
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
