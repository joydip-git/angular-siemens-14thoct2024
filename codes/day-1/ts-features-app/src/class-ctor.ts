class Person {
    /*
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    */
    constructor(public id: number, public name: string, public salary: number) {

    }
    show() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}


const joydipObj = new Person(1, 'joydip', 1000)
//access members using dot operator (.)
console.log(joydipObj.name);
//access members using indexer ([])
console.log(joydipObj['salary']);

// obj.location = 'Bangalore'
// obj.show = function () {
//     return `${this.id}, ${this.name}, ${this.salary}, ${this.location}`
// }
console.log(joydipObj.show());

