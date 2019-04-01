let interval = 3;
interval *= 1000;
let intervalTimer = setInterval(function() {
    console.log(`Alarm ringing at ${new Date()}`);
}, interval);