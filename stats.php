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
                        <b>Total files: <?php echo $stats->total_files; ?></b><br />
                        <b>Total playlists: <?php echo $stats->total_playlists; ?></b><br />
                    </div>

                    <div class="column">
                        <p><b>Services used:</b></p>

<?php
foreach ($stats->by_service as $serviceName => $servNumUses) {
    echo $serviceName . ': ' . $servNumUses . '<br />' . PHP_EOL;
}
?>
                    </div>

                    <div class="column">
                        <p><b>Voices used:</b></p>

<?php
foreach ($stats->by_voice as $voiceId => $voiceNumUses) {
    echo $voiceId . ': ' . $voiceNumUses . '<br />' . PHP_EOL;
}
?>
                    </div>

                </div>

                <p class="is-italic is-size-7">
                    Last generated on <?php echo date(DATE_RFC2822, $stats->gen_time); ?> (updated hourly)<br />
                    Files are held on the server for <?php echo HOURS_TO_KEEP; ?> hours before being purged. Figures will fluctuate accordingly.
                </p>
            </div>
<?php
include 'include/footer.php';