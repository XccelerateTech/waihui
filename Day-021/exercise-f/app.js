const referee = require('./referee');
const Computer = require('./computer');
const User = require('./user');

let user = new User(referee);
let computer = new Computer(referee);

// the order of choosing is not a matter
computer.randomChoose();
user.choose('paper');