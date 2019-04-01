const engLetter = function(number) {
    let char = String.fromCharCode(96 + number);
    return char;
}

module.exports.engLetter = engLetter;