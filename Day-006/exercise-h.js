const move = (string) => {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let ascii = string.charCodeAt(i) + 10;
        if (ascii > 122) {
            newString += String.fromCharCode(ascii - 26);
        }
        else {
            newString += String.fromCharCode(ascii);
        }
    }
    return newString;
}

console.log(move("abcdefghijklmnopqrstuvwxyz"));