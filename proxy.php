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
else if ($postData['service'] === 'CereProc') {
    $json = [];
    $audioFormat = 'mp3';           // valid types: mp3, ogg, wav
    $sampleRate = 48000;            // Sample rate in hz, defaults to 48000 which is this best so no need to change it. Valid values: 8000, 11025, 16000, 22050, 32000, 44100, 48000
    $accountId = 1;                 // Assuming this extra digit is the account ID, 1 seems to be used for their demo.

    // Before we send a request to CereProc we can check if the audio file already exists
    // because we know the format of the resulting URL
    $resultUrl = 'https://cerevoice.s3.amazonaws.com/' . $postData['voice'] . $sampleRate . $accountId . md5($postData['text']) . '.' . $audioFormat;

    // Check for existence of file (200 response)
    $ch = curl_init($resultUrl);
    curl_setopt($ch, CURLOPT_NOBODY, true);
    curl_exec($ch);
    $retcode = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);

    // If we get a 200 response the file exists so we can simply return this URL in the JSON
    if ($retcode == 200) {
        $json = [
            'success' => true,
            'speak_url' => $resultUrl,
            'info' => 'Audio file already existed.'
        ];
        exit(json_encode($json));
    }

    // If not then we'll generate a request to send to their server
    mt_srand(date('Ymd'));
    $cookieKey = base_convert(mt_rand(), 10, 16);       // this can be anything as long as the value sent with the XML matches the value in the cookie
                                                        // they generate in JS with Math.random().toString(36).substr(2) - this PHP is equivalent for emulating a similar value
    $xmlData = '<speakExtended key=\'' . $cookieKey . '\'><voice>' . $postData['voice'] . '</voice><text>' . $postData['text'] . '</text><audioFormat>' . $audioFormat . '</audioFormat>' . "\n" . '</speakExtended>';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://www.cereproc.com/support/live_demo');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $xmlData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLINFO_HEADER_OUT, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [  'content-type: text/plain;charset=UTF-8',
                                            'user-agent: ' . $_SERVER['HTTP_USER_AGENT'],
                                            'cookie: Drupal.visitor.liveDemo=' . $cookieKey,
                                            'referer: https://www.cereproc.com/',
                                            'origin: https://www.cereproc.com',
                                        ]);
    $response = curl_exec($ch);
    $info = curl_getinfo($ch);
    curl_close($ch);

    // $response will be in XML format, but since we can't access the name of the root element
    // which is either <url> or <error>, from a SimpleXMLElement object, we have to manually check
    $xml = simplexml_load_string($response);

    if ($info['http_code'] == 200) {
        if (strpos($response, "<url>") > 0) {
            $json = [
                    'success' => true,
                    'speak_url' => (string)$xml,
                    'info' => 'Audio file generated successfully.'
            ];
        } else {
            $json = [
                    'success' => false,
                    'error' => (string)$xml
            ];
        }
    } else {
        $json = [
                'success' => false,
                'error' => $info['http_code'] . ' error.'
        ];
    }

    exit(json_encode($json));
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
else if ($postData['service'] == 'ReadSpeaker') {
    // construct POST data
    $postFields = [
        'v' => $postData['voice'],
        't' => $postData['text'],
        'f' => 'mp3',
    ];

    // Now we can make the request
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://demo.readspeaker.com/proxy.php');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postFields));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLINFO_HEADER_OUT, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [  'Content-Type: application/x-www-form-urlencoded;charset=UTF-8',
                                            'User-Agent: ' . $_SERVER['HTTP_USER_AGENT'],
                                            'Referer: https://www.readspeaker.com/text-to-speech-demo/',
                                        ]);
    $response = curl_exec($ch);
    curl_close($ch);

    $res = json_decode($response);
    if (empty($res->links->mp3)) {
        $json = [
                'success' => false,
                'error' => 'Unknown error.',
        ];
    } else {
        $json = [
                'success' => true,
                'speak_url' => $res->links->mp3,
        ];
    }

    exit(json_encode($json));
}
