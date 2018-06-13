# hq-notifier
A simple program which tells you when an HQ Trivia show is live.

## Installing
```shell
git clone https://github.com/plusreed/hq-notifier
cd hq-notifier
npm i
node notifier
```

## Configuring
You can configure the notifier with the `config.json` and the `strings.json`.

The only thing you can change with the `config.json` is the interval. The interval is one second by default, and is converted to milliseconds automatically.

`strings.json` allows you to change (most) of the strings with the notifier:
* `READY`: The initial text in the console when you start the notifier.
* `NOT_LIVE`: The message in the console that tells you when HQ is not live.
* `LIVE`: The message in the console that tells you when HQ is live.
* `NOTIFIER_TITLE`: The title of the notification you get. 
* `NOTIFIER_MESSAGE`: The message that is shown in the notification.

## License
This software is licensed under the GNU GPLv3.
