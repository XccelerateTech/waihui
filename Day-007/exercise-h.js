class FlyAnimal {
    constructor(options) {
        this._type = options.type;
    }

    fly() {
        return `A ${this._type} can fly`;
    }
}

class FeedAnimal {
    constructor(options) {
        this._type = options.type;
    }

    feed() {
        return `A ${this._type} is feeding milk`;
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

class LayAnimal {
    constructor(options) {
        this._type = options.type;
    }
    lay() {
        return `A ${this._type} is laying eggs`;
    }
}

class Bat {
    constructor(options) {
        this.feature1 = new FlyAnimal(options);
        this.feature2 = new FeedAnimal(options);
    }
}

class Fish {
    constructor(options) {
        this.feature1 = new SwimAnimal(options);
        this.feature2 = new LayAnimal(options);
    }
}

class Whale {
    constructor(options) {
        this.feature1 = new SwimAnimal(options);
        this.feature2 = new FeedAnimal(options);
    }
}

class Bird {
    constructor(options) {
        this.feature1 = new FlyAnimal(options);
        this.feature2 = new LayAnimal(options);
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

console.log(bat.feature1.fly(), bat.feature2.feed());
console.log(fish.feature1.swim(), fish.feature2.lay());
console.log(whale.feature1.swim(), whale.feature2.feed());
console.log(bird.feature1.fly(), bird.feature2.lay());