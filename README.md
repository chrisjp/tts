# Text-to-Speech (TTS) Demo App
A simple web app demonstrating how text sounds in different TTS voices.

This web app will convert your text to speech using any one of 100+ different voices provided by [Amazon Polly](https://aws.amazon.com/polly/) and [Google Translate](https://translate.google.com/).
[Streamlabs'](https://streamlabs.com/) (unofficial) API is used to process TTS with Amazon Polly voices (called via the proxy.php file to work around CORS restrictions). This can be used to emulate how messages will sound when donating to [Twitch.tv](https://twitch.tv) streamers who have the feature enabled.
Google Translate voices use a publicly available URL like those generated when using their translate tool (clicking the little speaker icon to hear your translation).

Inspired by [Peter Cunha's](https://github.com/petercunha/tts) very similar tool, I wanted to build this using only vanilla JS, as well as improve it with small UI/UX enhancements and by providing a massive choice of voices, including **all** those offered by Polly and Google.

## Features
- Over 100 different high-quality voices
- Lightning fast
- Copy link to TTS URL to clipboard for sharing with others
- Simple HTML5 and JavaScript, with no dependencies, frameworks, libraries etc. required

## Limitations
- Streamlabs has a 550 byte limit for TTS processing with Amazon Polly voices
- Streamlabs TTS is outputted in ogg vorbis which is unsupported in web browsers on iOS, though can be played in third-party apps
- Streamlabs TTS URLs are valid for only 5 minutes.
- Google Translate has a 200 character limit
- Google Translate TTS URLs are _not_ served over https; the secure URLs require a valid token, which while technically possible to generate, is not something I want to spend time on just for a simple demo app

## Demo
Can be found at [**TTS.cool**](https://tts.cool)