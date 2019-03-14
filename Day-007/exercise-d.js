class Monster {
    constructor(options) {
        this._name = options.name;
        this._type = options.type;
        this._health = 100;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

    wounded(value) {
        if (value > this._health) {
            value = this._health;
        }
        console.log(`${this._name} being attacked, lost ${value} ph`)
        this._health -= value;
        console.log(`${this._name} remaining ${this._health} ph`)
    }
}

const hero = (monster) => {
    let randomValue =  Math.floor((20 - 5 + 1) * Math.random()) + 5;
    monster.wounded(randomValue);
}

object = {name: "Rathalos", type: "Flying Wyvern"};
const monster1 = new Monster(object);



let bool = true;
let round = 1;
while (bool) {
    let monsterHealth = monster1.health;
    if (monsterHealth <= 0) {
        console.log(`${monster1.name} monster dead`);
        bool = false;
        break;
    }
    console.log(`---------- Round ${round} ----------`) 
    hero(monster1);
    console.log(`\n`);
    round++;
}
