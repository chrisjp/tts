# Text-to-Speech (TTS) Demo App
A simple web app demonstrating how text sounds in different TTS voices.

Convert your text to speech using voices provided by a variety of TTS services, the full list including their limitations can be found further down this readme.

## About
This project originally came about from a desire to emulate how messages will sound when donating to [Twitch.tv](https://twitch.tv) streamers, many of whom use Streamlabs/StreamElements TTS features to have donations read aloud (often by 'Brian') during their streams. ![FeelsGoodMan](https://cdn.frankerfacez.com/emoticon/109777/1)

It was inspired by Peter Cunha's [similar tool](https://github.com/petercunha/tts). I wanted to build it using only vanilla JS, as well as improve it with UI/UX enhancements and by providing a massive selection of voices, including **all** those offered by Amazon Polly and other services. The project has grown somewhat bigger than the single file demo it was initially, and is now effectively a full PHP library and demo website.


## Features
- Over 1000 different high-quality voices
- Lightning fast
- Copy link to TTS URL to clipboard for sharing with others
- Save audio locally for a configurable amount of time
- Plain old HTML5 and vanilla JavaScript (PHP >=8 required for full functionality)
- Conversations - create a conversation using multiple TTS voices and share it as a playlist of TTS audio clips.

## Usage notes
Many of the services used aren't intended for professional/commercial use or are utilising a live demo, and as such they have limitations. As a reminder: You should only be using this to test how your text sounds in various voices. If you need to use TTS for commercial purposes please check out the services' respective websites linked above for more information.

Regarding URL validity, it is recommended you enable local saving in `config.php` if you'll be requiring access to the audio again in the near future. The same advice goes for services that return the audio as a data URI, as this can be inconvenient for sharing when message length is a concern.

### TTS Services/APIs included (and their limitations)

#### [Amazon Polly](https://aws.amazon.com/polly/) (via StreamElements or Streamlabs APIs)
- (StreamElements) 3000 byte text limit
- (StreamElements) Generated audio (MP3) is returned as a data URI
- (Streamlabs) 550 byte text limit
- (Streamlabs) TTS URLs are valid for only 5 minutes
#### [Google Cloud Text-to-Speech](https://cloud.google.com/text-to-speech) (via StreamElements API)
- 3000 byte text limit
#### [CereProc](https://cereproc.com/)
- 2000 byte text limit
#### [TikTok](https://tiktok.com/)
- 300 character text limit
- valid session ID cookie required (see `config.php` for details on how to get one)
- API is undocumented and not all voice IDs are known
- Generated audio (MP3) is returned as a data URI
#### [IBM Watson](https://www.ibm.com/products/text-to-speech)
- Generated audio (MP3) is returned as a data URI
#### [Acapela](https://www.acapela-group.com/demos/)
- 2000 character text limit
- Light background noise plays throughout the audio
#### [Oddcast](https://www.oddcast.com/ttsdemo/)
- 600 character text limit
#### [Microsoft Azure Speech](https://learn.microsoft.com/en-us/azure/cognitive-services/Speech-Service/) (via [Bing Translator](https://www.bing.com/translator))
- 3000 byte text limit
- Generated audio (MP3) is returned as a data URI
#### [Google Translate](https://translate.google.com/)
- 200 character limit
- Generated audio (MP3) is returned as a data URI


## Demo website
Head over to [LazyPy.ro/tts](https://lazypy.ro/tts) for a live demo of all the available voices.
