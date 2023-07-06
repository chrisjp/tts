<?php

namespace ChrisJP\TTS\Services;


interface Service
{

    public function getName(): string;

    public function getShortName(): string;

    public function getDefaultVoice(): string;

    public function requestTTS(string $voice, string $text): object;

}
