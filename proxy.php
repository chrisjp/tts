<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') exit;

// We'll always return JSON from this script
header('Content-Type: application/json');

$postData = [
            'service' => $_REQUEST['service'],
            'voice' => $_REQUEST['voice'],
            'text'  => $_REQUEST['text'],
            ];

if ($postData['service'] === 'Polly') {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://streamlabs.com/polly/speak');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    exit($response);
}
