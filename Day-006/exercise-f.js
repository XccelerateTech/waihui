const transform = (string) => {
    const numArray = string.split("").sort();
    const charArray = numArray.map( (element) => {
        let asciiCode = Number(element) + 96;
        if(asciiCode === 96) {
            asciiCode += 10;
        }
        return String.fromCharCode(asciiCode);
    })
    return charArray.join("");
}

console.log(transform('213'));