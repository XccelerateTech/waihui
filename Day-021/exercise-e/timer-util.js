const funcStart = function() {
    console.log(`Time remaining: ${this.counter}`);
    this.counter--;
}

const funcPause = function() {
    console.log(`Time remaining: ${this.counter}`);
}

const funcStop = function() {
    console.log(`Time remaining: ${this.counter}`);
}

module.exports.funcStart = funcStart;
module.exports.funcPause = funcPause;
module.exports.funcStop = funcStop;