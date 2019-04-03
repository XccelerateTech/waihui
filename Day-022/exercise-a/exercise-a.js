function processArray(array, callback) {
    let result = callback(array);
    return result;
}

let oddArrOld = [1, 3, 5, 7, 9];
let evenArrOld = [2, 4, 6, 8, 10];

function mathFunc(array) {
    let arrNew = [];
    for (let i = 0; i < array.length; i++) {
        arrNew.push(array[i] * 3);
    }
    return arrNew;
}

let oddArrNew = processArray(oddArrOld, mathFunc);
let evenArrNew = processArray(evenArrOld, mathFunc);

console.log(oddArrNew);
console.log(evenArrNew);