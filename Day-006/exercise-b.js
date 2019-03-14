const convert = (number) => {
    let string = number.toString();
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(Number(string[i]));
    }
    array.reverse();
    return array;
}

const result = convert(12345);
console.log(result);