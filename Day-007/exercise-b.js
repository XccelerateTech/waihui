function Player(name, health) {
    this.name = name;
    this.health = health;
}

Player.prototype.attack = function(opponent) {
    opponent.health -= 10;
}

Player.prototype.addHealth = function() {
    this.health += 5;
    console.log(`\n${this.name} add health`)
    console.log(`${this.name} remaining ${this.health} ph\n`)
}

let player1 = new Player("Genghis Khan", 100);
let player2 = new Player("Julius Caesar", 100);

let player1ThreeTimes = 0;
let player2ThreeTimes = 0;
const attacker = () => {
    let randomChance = Math.random();
    console.log(randomChance);
    if (randomChance >= 0.5) {
        console.log(`${player1.name} attacks ${player2.name}`);
        player1.attack(player2);
        console.log(`${player1.name} remaining ${player1.health} ph`)
        console.log(`${player2.name} remaining ${player2.health} ph\n`);
        player2ThreeTimes++;
        player1ThreeTimes = 0;
        if (player2ThreeTimes === 3 && player2.health > 0) {
            player2.addHealth();
            player2ThreeTimes = 0
        }

    }
    else {
        console.log(`${player2.name} attacks ${player1.name}`);
        player2.attack(player1);;
        console.log(`${player1.name} remaining ${player1.health} ph`)
        console.log(`${player2.name} remaining ${player2.health} ph\n`);
        player1ThreeTimes++;
        player2ThreeTimes = 0;
        if (player1ThreeTimes === 3 && player1.health > 0) {
            player1.addHealth();
            player2ThreeTimes = 0;
        }
    }
}

while (player1.health > 0 && player2.health > 0) {
    attacker();
}

if (player1.health > player2.health) {
    console.log(`\n${player1.name} win ${player2.name}`);
    console.log(`${player1.name} remaining ${player1.health} ph`);
    console.log(`${player2.name} remaining ${player2.health} ph`);
}
else {
    console.log(`\n${player2.name} win ${player1.name}`);
    console.log(`${player2.name} remaining ${player2.health} ph`);
    console.log(`${player1.name} remaining ${player1.health} ph`);
}