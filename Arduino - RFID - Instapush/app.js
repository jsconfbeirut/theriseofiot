var serialport = require("serialport");
var instapush = require("instapush");
var name = "Nicolas";

var SerialPort = serialport.SerialPort;

var insta_conf = {
    id: '56e440425659e368087b23c6',
    secret: 'd43b8a748127b52e8722b00323a4f3bd',
    token: '56ce2acb5659e35f7cc56c64'
};

    instapush.settings({
        id: insta_conf.id,
        secret: insta_conf.secret,
        token: insta_conf.token
    });

    var notify = function (user, text) {
            instapush.notify({
                "event": "checkin_",
                "trackers": {
                    "name": name
                }
            }, function (err, response) {
                console.log(err, response);
            });

        }

serialPort = new SerialPort("/dev/tty.usbmodem1411", {
            baudrate: 9600,
            parser: serialport.parsers.readline("\n")
        });

    serialPort.on('open', function () {
        console.log('open');
        serialPort.on('data', function (data) {
         console.log(data)
        var notification = data.split(':')[1];



 notify(name , "checked in");




        });
    });
