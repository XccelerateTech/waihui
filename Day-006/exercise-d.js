var marks = [
    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },
    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
]

const marksArray = [];
for (let i = 0, length = marks.length; i < length; i++) {
    marksArray.push(marks[i]["mark"]);
}

const reducer = marksArray.reduce((accumlator, currentValue) => {
    return accumlator + currentValue;
})

const average = reducer / marksArray.length;

console.log(average);