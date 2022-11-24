import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 250);
const invTwo = new Invoice('luigi', 300);
console.log(invOne, invTwo);
const person = {
    name: 'John',
    age: 30,
    getAge() {
        return this.age;
    }
};
console.log(person.getAge());
