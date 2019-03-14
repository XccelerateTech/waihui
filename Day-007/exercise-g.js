class FlyAnimal {
    constructor(options) {
        this._type = options.type;
    }

    fly() {
        return `A ${this._type} can fly`;
    }
}

class SwimAnimal {
    constructor(options) {
        this._type = options.type;
    }

    swim() {
        return `A ${this._type} can swim`;
    }
}

class Bat extends FlyAnimal {
    constructor(options) {
        super(options);
    }

    feed() {
        return `A ${this._type} is feeding milk`;
    }
}

class Bird extends FlyAnimal {
    constructor(options) {
        super(options);
    }

    lay() {
        return `A ${this._type} is laying eggs`;
    }
}

class Fish extends SwimAnimal {
    constructor(options) {
        super(options);
    }

    lay() {
        return `A ${this._type} is laying eggs`;
    }
}

class Whale extends SwimAnimal {
    constructor(options) {
        super(options);
    }
    
    feed() {
        return `A ${this._type} is feeding milk`;
    }
}

batAnimal = {type: "bat"};
fishAnimal = {type: "fish"};
whaleAnimal = {type: "whale"};
birdAnimal = {type: "bird"};

const bat = new Bat(batAnimal);
const fish = new Fish(fishAnimal);
const whale = new Whale(whaleAnimal);
const bird = new Bird(birdAnimal);

console.log(bat.fly(), bat.feed());
console.log(fish.swim(), fish.lay());
console.log(whale.swim(), whale.feed());
console.log(bird.fly(), bird.lay());