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
else if ($postData['service'] == 'Oddcast') {
    // IDs used by their demo site
    $accountID = 5883747;
    $secretID = 'uetivb9tb8108wfj';
    $is_utf8 = 1;
    $ext = 'mp3';

    // Extract voice, engine and language IDs
    $voiceParts = explode('-', $postData['voice']);
    list($voiceId, $engineId, $languageId) = count($voiceParts) == 3 ? $voiceParts : null;

    if (null === $voiceId || null === $engineId || null == $languageId) {
        // If any of these IDs are missing audio generation will fail
        $json = [
                'success' => false,
                'error' => "Malformed voice ID: missing voice ID, engine ID, or language ID",
        ];
    } else {
        // Concatenate a string of all the variables
        $checksumData = $engineId . $languageId . $voiceId . $postData['text'] . $is_utf8 . $ext . $accountID . $secretID;
        $fxParams = '&FNAME=';  // not yet supporting voice effects

        // Calculate MD5 hash
        $checksumData = md5($checksumData);

        // Add all the variables into the URL and include checksum needed to generate the audio file when requested by the browser
        $resultUrl = 'https://cache-a.oddcast.com/tts/gen.php?EID=' . $engineId . '&LID=' . $languageId . '&VID=' . $voiceId . '&TXT=' . rawurlencode($postData['text']) . '&IS_UTF8=' . $is_utf8 . '&EXT=' . $ext . $fxParams . '&ACC=' . $accountID . '&API=&SESSION=&CS=' . $checksumData;

        $json = [
                'success' => true,
                'speak_url' => $resultUrl,
        ];
    }

    exit(json_encode($json));
}
else if ($postData['service'] == 'Acapela') {
    // Get session vars
    $get = curl_init();
    curl_setopt($get, CURLOPT_URL, 'https://www.acapela-group.com/www/static/website/demoOptionsDef_voicedemo.php');
    curl_setopt($get, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($get, CURLOPT_HTTPHEADER, [  'User-Agent: ' . $_SERVER['HTTP_USER_AGENT'],
                                            'Referer: https://www.acapela-group.com/demos/',
                                            'Origin: https://www.acapela-group.com/demos/',
                                        ]);
    $response = curl_exec($get);
    curl_close($get);

    $response = str_replace(['var vaasOptions = ', '};'], ['', '}'], $response);    // the JSON is returned as a JavaScript variable
    $vaasOptions = json_decode($response);

    // construct POST data from the vaasOptions
    $postFields = [
        'cl_login' => $vaasOptions->login,
        'cl_app' => $vaasOptions->app,
        'session_start' => $vaasOptions->session->start,
        'session_time' => $vaasOptions->session->time,
        'session_key' => $vaasOptions->session->key,
        'req_voice' => $postData['voice'],
        'req_text' => $postData['text'],
    ];

    // Now we can make the request
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $vaasOptions->json_service_url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postFields));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLINFO_HEADER_OUT, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [  'Content-Type: application/x-www-form-urlencoded;charset=UTF-8',
                                            'User-Agent: ' . $_SERVER['HTTP_USER_AGENT'],
                                            'Referer: https://www.acapela-group.com/demos/',
                                            'Origin: https://www.acapela-group.com/demos/',
                                        ]);
    $response = curl_exec($ch);
    curl_close($ch);

    $res = json_decode($response);
    if ($res->res == 'NOK') {
        $json = [
                'success' => false,
                'error' => $res->err_code . ': ' . urldecode($res->err_msg),
        ];
    } elseif ($res->res == 'OK') {
        $json = [
                'success' => true,
                'speak_url' => $res->snd_url,
        ];
    }

    exit(json_encode($json));
}
