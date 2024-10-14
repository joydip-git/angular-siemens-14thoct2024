class Person {
    constructor(public id: number, public name: string, public salary: number) {

    }
    show() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}
class Trainer extends Person {
    constructor(id: number, name: string, salary: number, public subject: string) {
        super(id, name, salary)
    }
    show(): string {
        return `${super.show()}, ${this.subject}`
    }
}

const joydipObj = new Trainer(1, 'joydip', 1000, 'JavaScript')
//access members using dot operator (.)
console.log(joydipObj.name);
//access members using indexer ([])
console.log(joydipObj['salary']);

// obj.location = 'Bangalore'
// obj.show = function () {
//     return `${this.id}, ${this.name}, ${this.salary}, ${this.location}`
// }
console.log(joydipObj.show());

