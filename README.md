# Text-to-Speech (TTS) Demo App
A simple web app demonstrating how text sounds in different TTS voices.

This web app will convert your text to speech using voices provided by a variety of TTS services including [Amazon Polly](https://aws.amazon.com/polly/), [CereProc](https://cereproc.com/), [IBM Watson](https://www.ibm.com/cloud/watson-text-to-speech), [Acapela](https://www.acapela-group.com/demos/), [Oddcast](https://www.oddcast.com/ttsdemo/), [Bing Translator](https://www.bing.com/translator) and [Google Translate](https://translate.google.com/).

[Streamlabs'](https://streamlabs.com/) API is used to process TTS with Amazon Polly voices. This can be used to emulate how messages will sound when donating to [Twitch.tv](https://twitch.tv) streamers who have the feature enabled. ![FeelsGoodMan](https://cdn.frankerfacez.com/emoticon/109777/1)

Inspired by [Peter Cunha's](https://github.com/petercunha/tts) very similar tool, I wanted to build this using only vanilla JS, as well as improve it with small UI/UX enhancements and by providing a massive selection of voices, including **all** those offered by Polly and other services. The project has grown somewhat bigger than the single file demo it was initially, and is now effectively a full PHP library and demo website.

## Features
- Over 1000 different high-quality voices
- Lightning fast
- Copy link to TTS URL to clipboard for sharing with others
- Save audio locally for a configurable amount of time
- Simple HTML5 and vanilla JavaScript (PHP >=8 required for full functionality)
- Conversations - create a conversation using multiple TTS voices and share it as a playlist of TTS audio clips.

## Limitations
Many of the services used aren't intended for professional/commercial use or are utilising a live demo, and as such they have limitations. As a reminder: You should only be using this to test how your text sounds in various voices. If you need to use TTS for commercial purposes please check out the services' respective websites linked above for more information.

Regarding URL validity, it is recommended you enable local saving in `config.php` if you'll be requiring access to the audio again in the near future. The same advice goes for services that return the audio as a data URI, as this can be inconvenient for sharing when message length is a concern.

#### Streamlabs (Amazon Polly)
- 550 byte limit for TTS processing with Amazon Polly voices
- TTS URLs are valid for only 5 minutes
#### CereProc
- 2000 byte limit
#### TikTok
- 300 character limit
- valid session ID cookie required
- API is undocumented and not all voice IDs are known
- Generated audio (MP3) is returned as a data URI
#### IBM Watson
- Generated audio (MP3) is returned as a data URI
#### Acapela
- 2000 character limit
- Light background noise plays throughout the audio
#### Oddcast
- 600 character limit
#### Bing Translator (Microsoft Azure Speech service)
- 3000 byte limit
- Generated audio (MP3) is returned as a data URI
#### Google Translate
- 200 character limit
- Generated audio (MP3) is returned as a data URI


## Demo
Demo website for testing can be found at [**LazyPy.ro/tts**](https://lazypy.ro/tts)  
