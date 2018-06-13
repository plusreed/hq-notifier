const notifier = require('node-notifier');
const fetch = require('node-fetch');
const strings = require('./strings.json');
const config = require('./config.json');

console.log(strings.READY);

/**
 * getHQStatus() pings the HQ Trivia API every x seconds.
 * (x being defined in config.json)
 * This allows it to determine if an HQ Trivia show is active.
 */
function getHQStatus() {
    setTimeout(() => {
        fetch('https://api-quiz.hype.space/shows/now?type=hq')
            .then(response => response.json())
            .then(json => {
                if (json.active == true) {
                    console.log(strings.LIVE);
                    notifier.notify({
                        title: strings.NOTIFIER_TITLE,
                        message: strings.NOTIFIER_MESSAGE,
                        icon: './assets/HQ.png',
                    }, () => process.exit(0))
                } else console.log(strings.NOT_LIVE);
            });
        getHQStatus();
    }, config.interval * 1000);
}

getHQStatus();
