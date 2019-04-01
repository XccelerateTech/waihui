const procee = require('process');
const timer = require('./timer');

setInterval(function() {
    timer.countdown();
    if (timer.counter < 0) {
        console.log('kaboom');
        procee.exit();
    }
}, 1000);