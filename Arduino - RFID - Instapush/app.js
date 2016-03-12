var SerialPort = require("serialport").SerialPort;
serialPort = new SerialPort("/dev/tty.usbmodem1411", {
            baudrate: 9600,
            parser: serialport.parsers.readline("\n")
        });

    serialPort.on('open', function () {
        console.log('open');
        serialPort.on('data', function (data) {
         console.log("data")

        });
    });
