let str = 'abcdefg';


let newStr = '';

for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    for (let j = 0; j < newStr.length; j++) {
        if (newStr.charAt(j) === str[i]) {
            console.log(false);
        }
        else {
            console.log(true);
        }
    }
}