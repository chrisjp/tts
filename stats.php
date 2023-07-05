<?php
// Grab all the stuff we need
require './vendor/autoload.php';

use ChrisJP\TTS\Stats;

// Instantiate the TTS Stats class
$tts = new Stats();
$stats = $tts->stats();

include 'include/header.php';
?>
            <div class="box">
                <h2 id="stats" class="subtitle is-4">Statistics</h2>

                <div class="columns my-2">

                    <div class="column">
                        <table class="table table-stats">
                            <tbody>
                                <tr><td class="has-text-weight-bold">Total files</td><td class="has-text-weight-bold"><?php echo $stats->total_files; ?></td></tr>
                                <tr><td class="has-text-weight-bold">Total playlists</td><td class="has-text-weight-bold"><?php echo $stats->total_playlists; ?></td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="column">
                        <p><b>Services used:</b></p>
                        <table class="table table-stats">
                            <tbody>

<?php
// Put data into an array and sort it in descending order
$serviceStats = [];
foreach ($stats->by_service as $serviceName => $servNumUses) {
    $serviceStats[$serviceName] = $servNumUses;
}
arsort($serviceStats);
$pos = 0;
foreach ($serviceStats as $serviceName => $servNumUses) {
    $pos++;
    echo '<tr><td>' . $pos . '.</td><td>'. $serviceName . '</td><td>' . $servNumUses . '</td></tr>' . PHP_EOL;
}
?>
                            </tbody>
                        </table>
                    </div>

                    <div class="column">
                        <p><b>Voices used:</b></p>
                        <table class="table table-stats">
                            <tbody>

<?php
// Put data into an array and sort it in descending order
$voiceStats = [];
foreach ($stats->by_voice as $voiceId => $voiceNumUses) {
    $voiceStats[$voiceId] = $voiceNumUses;
}
arsort($voiceStats);
$pos = 0;
foreach ($voiceStats as $voiceId => $voiceNumUses) {
    $pos++;
    $voiceParts = explode(' - ', $voiceId);
    $hiddenRow = $pos > 10 ? ' is-hidden' : '';
    echo '<tr class="table-row-voice' . $hiddenRow . '" data-pos="' . $pos . '"><td>' . $pos . '.</td><td>'. $voiceParts[1] . '<br /><span class="is-size-7">' . $voiceParts[0] . '</span></td><td>' . $voiceNumUses . '</td></tr>' . PHP_EOL;
}
?>
                            </tbody>
                            <tfoot>
                                <tr><td colspan="3"><a id="stats-voices-toggle">Show/Hide full table</a></td></tr>
                            </tfoot>
                        </table>
                    </div>

                </div>

                <p class="is-italic is-size-7">
                    Last generated on <?php echo date(DATE_RFC2822, $stats->gen_time); ?> (updated hourly)<br />
                    Files are held on the server for <?php echo HOURS_TO_KEEP; ?> hours before being purged. Figures will fluctuate accordingly.
                </p>
            </div>
<?php
include 'include/footer.php';