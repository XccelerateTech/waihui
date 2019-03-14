const middle = (array) => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const middleNumber = array.filter( (element) => {
        if(element === max || element === min) {
            return false;
        }
        else {
            return true;
        }
    })
    const position = array.indexOf(Number(middleNumber));
    return `${position} -> ${middleNumber} at index ${position} lies between ${max} and ${min}`
}

console.log(middle([2,3,1]));
console.log(middle([88, 7, 55]));