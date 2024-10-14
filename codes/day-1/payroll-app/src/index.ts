//1. models
class Employee {
    totalSalary: number = 0;

    constructor(public id: number, public name: string, public basicPayment: number, public daPayment: number, public hraPayment: number) {
        //this.totalSalary = 0
    }
    calculateSalary(): void {
        this.totalSalary = this.basicPayment + this.daPayment + this.hraPayment
    }

    toString(): string {
        return `Name=${this.name}, Id=${this.id}, Total Salary=${this.totalSalary}`
    }
}

class Developer extends Employee {
    constructor(id: number, name: string, basicPayment: number, daPayment: number, hraPayment: number, public incentivePayment: number) {
        super(id, name, basicPayment, daPayment, hraPayment)
    }
    calculateSalary(): void {
        super.calculateSalary()
        this.totalSalary += this.incentivePayment
    }
}
class Hr extends Employee {
    constructor(id: number, name: string, basicPayment: number, daPayment: number, hraPayment: number, public gratuityPayment: number) {
        super(id, name, basicPayment, daPayment, hraPayment)
    }
    calculateSalary(): void {
        super.calculateSalary()
        this.totalSalary += this.gratuityPayment
    }
}

//2. repository
const employees: Employee[] = []

//3. business logic methods:
//method to add an employee in the array
function add(e: Employee): void {
    employees.push(e)
}
//method to calcule salary of every employee
function generateSalaryAmount(): void {
    employees.forEach(e => e.calculateSalary())
}
//method to filter the employees based on total salary
function filterBySalary(): Employee[] {
    return employees
        .filter(e => e.totalSalary > 12000)
}

//4. UI logic

//4.a: creating instances of employee types
const vinodDev = new Developer(1, 'vinod', 1500, 2500, 3500, 4500)
const anilHr = new Hr(3, 'joydip', 2500, 3500, 4500, 5500)
const sunilDev = new Developer(4, 'sunil', 2000, 3000, 4000, 5000)
const ramHr = new Hr(2, 'ram', 1000, 2000, 3000, 4000)

//4.b: adding one employee at a time
add(vinodDev)
add(anilHr)
add(sunilDev)
add(ramHr)

//4.c: calcuating salary
generateSalaryAmount()

//4.d: printing every employee detail
console.log("\n all employees\n");
function printEmployees() {
    employees.forEach(
        e => console.log(e.toString())
    )
}
printEmployees()

//4.e: filtering employees with salary more than 12000
console.log("\n\n filtered employees\n");
filterBySalary()
    .forEach(e => console.log(e.toString()))