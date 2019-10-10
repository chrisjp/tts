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
