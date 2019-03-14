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

class Student extends Person {
    constructor(options) {
        super(options);
        this._gpa = options.gpa;
    }

    get gpa() {
        return this._gpa;
    }

    set gpa(newGpa) {
        this._gpa = newGpa;
    }

    info() {
        return `The student is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa.toFixed(2)} in the university.`;
    }
}


const object = {
    name: "Tom",
    age: 44,
    gpa: 4.237,
}
const person = new Student(object);
console.log(person.info());