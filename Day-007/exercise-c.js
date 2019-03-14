function Gambler(name, cash, bet) {
    this.name = name
    this.cash = cash;
    this.bet = bet;
}

Gambler.prototype.lostMoney = function() {
    this.cash -= this.bet;
    console.log(`Gamblar ${this.name} lost HKD ${this.bet} and remaining HKD ${this.cash}`)
}

Gambler.prototype.winMoney = function() {
    this.cash += this.bet * 0.5;
    console.log(`Gamblar ${this.name} win HKD ${this.bet} and remaining HKD ${this.cash}`)
}

Gambler.prototype.checkCash = function() {
    if (this.cash < this.bet) {
        this.bet = this.cash;
    }
}

let bob = new Gambler("Bob", 100, 15);
let jim = new Gambler("Jim", 100, 20);
let roundNumber = 1;

const casino = () => {
    console.log(`\n\n---------- Round ${roundNumber} ----------`)
    let randomChance = Math.random();
    const bobWinChance = 0.6;   // Bob have 60% chance win
    const jimWinChance = 0.4;   // Jim have 40% chance win
    bob.checkCash();
    jim.checkCash();
    if (bob.cash > 0 && randomChance < bobWinChance) {
        bob.winMoney();
    }
    else if (bob.cash > 0 && randomChance > bobWinChance) {
        bob.lostMoney();
    }

    if (jim.cash > 0 && randomChance < jimWinChance) {
        jim.winMoney();
    }
    else if (jim.cash > 0 && randomChance > jimWinChance) {
        jim.lostMoney();
    }
    roundNumber++;
}

console.log(`---------- Gambler Information ----------`)
console.log(`${bob.name} have HKD ${bob.cash}`);
console.log(`${jim.name} have HKD ${jim.cash}`);

while (bob.cash > 0 || jim.cash > 0) {
    casino();
}

console.log(`---------- Final Result ----------`)
console.log(`${bob.name} remaining HKD ${bob.cash}`);
console.log(`${jim.name} remaining HKD ${jim.cash}`);
