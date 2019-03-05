for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Hong Kong');
    }
    else if (i % 3 ===0) {
        console.log('Hong');
    }
    else if (i % 5 === 0) {
        console.log('Kong');
    }
    else {
        console.log(i);
    }
}

const multiplyNumber = (input) => {
    let result = input;
    if (isNaN(result) || result <= 0) {
        return 'Error';
    }
    while (result < 1000000) {
        result *= 10
    }
    return result;
}
console.log(multiplyNumber('Hello'));
console.log(multiplyNumber(10));
console.log(multiplyNumber(66));

const maya = (number) => {
    if (number < 100 || number > 999999) {
        return 'Invalid Number!';
    }
    let string = number.toString();
    let result = '';
    for (let i = 0; i < string.length; i++) {
        switch (parseInt(string[i])) {
            case 0:
                result += 'o';
                break;
            case 1:
                result += 'b';
                break;
            case 2:
                result += 'l';
                break;
            case 3:
                result += 'i';
                break;
            case 4:
                result += 'e';
                break;
            case 5:
                result += 't';
                break;
            case 6:
                result += 'a';
                break;
            case 7:
                result += 'd';
                break;
            case 8:
                result += 'n';
                break;
            case 9:
                result += 'm';
                break;
            default:
                result += '';
                break;
        }
    }
    return result;
}
console.log(maya(15728));
console.log(maya(99));
console.log(maya(1000000));

const countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
          if (string[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar("fizzbuzz","z"));
console.log(countChar("Fancy fifth fly aloof","f"));