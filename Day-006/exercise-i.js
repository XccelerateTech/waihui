const suitsArray = ["diamonds", "clubs", "hearts", "spades"];
const valueArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardsArray = [];

for (let i = 0; i < suitsArray.length; i++) {
    for (let j = 0; j < valueArray.length; j++) {
        let card = [suitsArray[i], valueArray[j]];
        cardsArray.push(card);
    }
}

const takeCard = () => {
    const randomNumber = Math.floor(Math.random() * cardsArray.length);
    const card = cardsArray[randomNumber];
    cardsArray.splice(randomNumber, 1);
    return card;
}

console.log(takeCard());
console.log(cardsArray.length);
console.log(takeCard());
console.log(cardsArray.length);
console.log(takeCard());
console.log(cardsArray.length);

// const check = () => {
//     let bool = true;
//     do {
//         let randomNumber = Math.floor(Math.random() * cardsArray.length);
//         const biggestCard = ["spades", "K"];
//         const card = cardsArray[randomNumber];
//         console.log(card);
//         // console.log(randomNumber);
//         // console.log(randomNumber);
//         if (JSON.stringify(biggestCard) === JSON.stringify(card)) {
//             bool = false;
//         }
//     } while (bool);
// }
// check();