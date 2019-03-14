class Person {
    constructor(options) {
        this._name = options.name;
        this._age = options.age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    info() {
        return `The person is called ${this.name} and is ${this.age} years old`
    }
}


const object = {
    name: "Tom",
    age: 44,
}
const person = new Person(object);
console.log(person.info());