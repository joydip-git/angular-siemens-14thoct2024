var obj = {
    //value properties
    id: 1,
    name: 'joydip',
    salary: 1000,
    //functional property
    show: function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

//access members using dot operator (.)
console.log(joydipObj.name);
//access members using indexer ([])
console.log(joydipObj['salary']);

// obj.location = 'Bangalore'
// obj.show = function () {
//     return `${this.id}, ${this.name}, ${this.salary}, ${this.location}`
// }
console.log(joydipObj.show());

