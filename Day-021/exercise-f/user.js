const EventEmitter = require('events');

class User extends EventEmitter {
    constructor(referee) {
        super();
        this.referee = referee;
    }

    choose(input) {
        this.referee.emit('userFinish', input)
    }
}

module.exports = User;