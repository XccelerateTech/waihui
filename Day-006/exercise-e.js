const uefaEuro2016 = (teamsArray, scoreArray) => {
    const teamOneScore = scoreArray[0];
    const teamtwoScore = scoreArray[1];
    if (teamOneScore > teamtwoScore) {
        return `At match ${teamsArray[0]} - ${teamsArray[1]}, ${teamsArray[0]} won!`;
    }
    else if (teamOneScore < teamtwoScore) {
        return `At match ${teamsArray[0]} - ${teamsArray[1]}, ${teamsArray[1]} won!`;
    }
    else {
        return `At match ${teamsArray[0]} - ${teamsArray[1]}, teams played draw.!`;
    }

}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]));
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]));