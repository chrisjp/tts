<?php

namespace ChrisJP\TTS;

trait ReturnObjectTrait
{
    /**
     * Builds an object containing every possible field we'll want to return in a JSON format to the frontend.
     * If $curlInfo is present it will override $info. We don't have any cases where both are needed to be shown.
     *
     * @param boolean $success
     * @param string|null $audioUrl
     * @param string|null $info
     * @param array $curlInfo
     * @param string|null $errorMessage
     * @param string|null $serviceResponse
     * @param object|null $originalRequest
     * @return object
     */
    public function buildReturnObject(bool $success, string $audioUrl = null, string $info = null, array|null $curlInfo = [], string $errorMessage = null, string $serviceResponse = null, object $originalRequest = null): object
    {
        if (is_array($curlInfo) && array_key_exists('http_code', $curlInfo) && array_key_exists('total_time', $curlInfo)) {
            $info = 'HTTP status: ' . $curlInfo['http_code'] . '; Total transfer time: ' . $curlInfo['total_time'] . ' seconds.';
        }

        return (object)[
            'success'          => $success,
            'audio_url'        => $audioUrl,
            'info'             => $info,
            'error_msg'        => $errorMessage,
            'service_response' => $serviceResponse,
            'original_request' => $originalRequest
        ];
    }
}