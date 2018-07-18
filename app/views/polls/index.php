<!DOCTYPE html>
<html lang="de">
    <head>
        <!-- Required meta tags always come first -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
        <title>Stud.IP-Cliqr: <?= htmlReady($course->name) ?></title>
        <?
        $PLGNURL = $plugin->getPluginURL();
        $ASSETS = $PLGNURL . '/assets/';

        $cliqrConfig = array_map('htmlReady', [
            'PLUGIN_URL' => current(explode('?', $controller->url_for(''))),
            'ASSETS_URL' => $PLGNURL . '/',
            'CID' => $cid
        ]);
        ?>
        <link rel="stylesheet" href="<?= $ASSETS ?>vendor/bulma/bulma.css">
        <link rel="stylesheet" href="<?= $ASSETS ?>vendor/rangeslider-2.3.2/rangeslider.min.css" />

        <script>
        var STUDIP = {
            ABSOLUTE_URI_STUDIP: "<?= $GLOBALS['ABSOLUTE_URI_STUDIP'] ?>",
            ASSETS_URL: "<?= $GLOBALS['ASSETS_URL'] ?>",
            STUDIP_SHORT_NAME: "<?= Config::get()->STUDIP_SHORT_NAME ?>"
        };

        var cliqr = {
            bootstrap: <?= json_encode(studip_utf8encode($json)) ?>,
            config: <?= json_encode(studip_utf8encode($cliqrConfig)) ?>
        };
        </script>
    </head>
    <body>

        <!-- BEGIN CLIQR PAGE -->
        <div id="cliqr-poll-container"></div>
        <?= $this->render_partial('_noscript') ?>
        <!-- END CLIQR PAGE -->

        <script src="<?= $ASSETS ?>vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
        <script src="<?= $ASSETS ?>vendor/rangeslider-2.3.2/rangeslider.min.js"></script>
        <script src="<?= \Assets::javascript_path('mathjax/MathJax.js?config=TeX-AMS_HTML,default') ?>"></script>

        <? if (defined('WDS_ACTIVATED') && constant('WDS_ACTIVATED')) { ?>
            <script charset="utf-8" src="https://localhost:8081/polls.js"></script>
        <? } else { ?>
            <script charset="utf-8" src="<?= $PLGNURL ?>/static/polls.js"></script>
        <? } ?>

    </body>
</html>
