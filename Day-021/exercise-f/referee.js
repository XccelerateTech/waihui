const EventEmitter = require('events');

class Referee extends EventEmitter {
    constructor() {
        super();
        this.userValue = null;
        this.computerValue = null;
    }

    comapare(userValue, computerValue) {
        if (userValue === computerValue) {
            console.log(`There are no winner \n`);
            console.log(`You choose ${userValue}`);
            console.log(`Computer choose ${computerValue}`);
        }
        else if (computerValue === 'rock' && userValue === 'scissors') {
            console.log(`Computer is the winnner \n`);
            console.log(`You choose ${userValue}`);
            console.log(`Computer choose ${computerValue}`);
        }
        else if (computerValue === 'paper' && userValue === 'rock') {
            console.log(`Computer is the winnner \n`);
            console.log(`You choose ${userValue}`);
            console.log(`Computer choose ${computerValue}`);
        }
        else if (computerValue === 'scissors' && userValue === 'paper') {
            console.log(`Computer is the winnner \n`);
            console.log(`You choose ${userValue}`);
            console.log(`Computer choose ${computerValue}`);
        }
        else {
            console.log(`You is the winnner \n`);
            console.log(`You choose ${userValue}`);
            console.log(`Computer choose ${computerValue}`);
        }
    }
}

let referee = new Referee();
referee.on('userFinish', function(input) {
    this.userValue = input;
    this.emit('check');
})
referee.on('computerFinish', function(input) {
    this.computerValue = input;
    this.emit('check');
})
referee.on('check', function() {
    if (this.userValue !== null && this.computerValue !== null) {
        this.comapare(this.userValue, this.computerValue);
    }
})

module.exports = referee;