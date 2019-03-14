var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"},
]

const myFunc_1 = (array) => {
    const filterResult = array.filter( (element) => {
        return element["club"] === "FC Barcelona";
    })
    const filterNmae = [];
    for (let i = 0; i < filterResult.length; i++) {
        filterNmae.push(filterResult[i]["name"]);
    }
    return filterNmae;
}
console.log(myFunc_1(players));


const myFunc_2 = (array) => {
    const nameArray = array.map( (element) => {
        return element["name"]; 
    })
    return nameArray;
}
console.log(myFunc_2(players));