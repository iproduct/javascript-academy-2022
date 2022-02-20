class Person {
    static nextId = 0;
    id = ++Person.nextId;
    constructor(fName, lName, address) {
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }
    toString() {
        return `ID: ${this.id}, name: ${this.fName}, family: ${this.lName}, address: ${this.address}`;
    }
}


class User extends Person{
    constructor(fName, lName, address, username, password, role) {
        super(fName, lName, address);
        this.username = username;
        this.password = password;
        this.role = role;
    }
    toString() { // override
        return `${super.toString()}, username: ${this.username}, password: ${this.password}, role: ${this.role}`;
        // return this.__proto__.__proto__.toString.call(this) + `, username: ${this.username}, password: ${this.password}, role: ${this.role}`;
    }
}

// Person.nextId = 0;


const p1 = new Person('Georgi', 'Petrov', 'Sofia 1000')
const p2 = new User('Ivan', 'Petrov', 'Sofia 1000', 'ivan', 'ivan123', 'ADMIN')
const p3 = new User('John', 'Smith', 'London', 'john', 'john123', 'AUTHOR')
const persons = [p1, p2, p3]
persons.forEach((p, i) => {
    const message = `${i + 1}: ` + p.toString()
    console.log(message)
})
console.log(p3)
// console.log(Person)