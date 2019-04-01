const EventEmitter = require('events');
const timerFunc = require('./timer-util');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.counter = 20;
        this.hold = false;
    }

    start() {
        if (this.hold === false) {
            this.emit('start');
        }
    }

    pause() {
        this.emit('pause');
    }

    stop() {
        this.emit('stop');
    }
}

let timer = new Timer();
timer.on('start', timerFunc.funcStart);
timer.on('pause', timerFunc.funcPause);
timer.on('stop', timerFunc.funcStop);

module.exports = timer;