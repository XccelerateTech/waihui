const module1 = require('./module1');
const module2 = require('./module2');
const module3 = require('./module3');

let number = module1.random();
let letter = module2.engLetter(number);
let sentence = module3.printSentence(number, letter);
console.log(sentence);