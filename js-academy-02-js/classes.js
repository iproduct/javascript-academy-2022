'use strict'
class Person {
    constructor(fName, lName, address) {
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }
    toString(){
        return `name: ${this.fName + ' ' + this.lName}, address: ${this.address}`;
    }
}

class User extends Person {
    constructor(fName, lName, address, username, password, roles = ['READER']){
        super(fName, lName, address);
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
    toString(){
        return `${super.toString()}, username: ${this.username}, password: ${this.password}, roles: ${this.roles}`;
    }
}

const p1 = new Person('Georgi', 'Petrov', 'Sofia 1000');
console.log(p1.toString());
const u1 = new User('Georgi', 'Petrov', 'Sofia 1000', 'george', 'gworge123');
console.log(u1.toString());