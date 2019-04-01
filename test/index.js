const english = require('./english');
const german = require('./german');

module.exports.language = {
    english: english.greet,
    german: german.greet
}