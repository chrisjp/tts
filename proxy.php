<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') exit;

$baseUrl = 'https://streamlabs.com/polly/speak';
$postData = [
            'voice' => $_REQUEST['voice'],
            'text'  => $_REQUEST['text'],
            ];
header('Content-Type: application/json');
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $baseUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
exit($response);