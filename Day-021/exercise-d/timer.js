const EventEmitter = require('events');
const util = require('util');

function Timer() {
    this.counter = 20;
}

util.inherits(Timer, EventEmitter);

Timer.prototype.countdown = function(number) {
    this.emit('tick', number);
}

let timer = new Timer();
timer.on('tick', function() {
    console.log(`Time remianing: ${this.counter}`);
    this.counter--;
})

module.exports = timer;