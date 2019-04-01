const process = require('process');
const timer = require('./timer');

let interval1 = setInterval(function() {
    timer.start();
    if (timer.counter < 0) {
        process.exit();
    }
}, 1000);

let timeout1 = setTimeout(function() {
    timer.hold = true;
    timer.pause();
}, 5000);

let timeout2 = setTimeout(function() {
    timer.hold = false;
    timer.start();
}, 10000);


let timeout3 = setTimeout(function() {
    timer.hold = true;
    timer.counter = 20;
    timer.stop();
}, 15000);

let timeout4 = setTimeout(function() {
    timer.hold = false;
    timer.start();
}, 20000);