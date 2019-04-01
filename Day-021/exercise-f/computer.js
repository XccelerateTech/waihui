const EventEmitter = require('events');

class Computer extends EventEmitter {
    constructor(referee) {
        super();
        this.referee = referee;
        // this.on('computerChoose', function() {
        //     this.randomChoose();
        // })
    }
    
    randomChoose() {
        let chooseArray = ['rock', 'paper', 'scissors'];
        let randon = Math.floor(Math.random() * 3 );
        this.referee.emit('computerFinish', chooseArray[randon]);
    }
}

module.exports = Computer;