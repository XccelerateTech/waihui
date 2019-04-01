const random = function() {
    let randNumber = Math.floor(Math.random() * 26 + 1);
    return randNumber;
}

module.exports.random = random;