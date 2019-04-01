const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let realPerson = {
    name: '',
    sayings: []
};

rl.question('what is the name of a real person? ', function(answer) {
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();
    rl.on('line', function(saying) {
        realPerson.sayings.push(saying.trim());
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        }
        else {
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
            rl.prompt();
        }
    })
});


rl.on('close', function() {
    console.log(`${realPerson.name} is a real person that say ${realPerson.sayings}`);
    process.exit();
})