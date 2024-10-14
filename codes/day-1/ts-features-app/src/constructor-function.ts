//constructor function
function person(id: number, name: string, salary: number) {
    this.id = id
    this.name = name
    this.salary = salary
    this.show = function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}
const joydipObj = new person(1, 'joydip', 1000)
//access members using dot operator (.)
console.log(joydipObj.name);
//access members using indexer ([])
console.log(joydipObj['salary']);

// obj.location = 'Bangalore'
// obj.show = function () {
//     return `${this.id}, ${this.name}, ${this.salary}, ${this.location}`
// }
console.log(joydipObj.show());

