import { Developer } from "./models/developer"
import { Hr } from "./models/hr"
import { EmployeeManager } from "./services/employeemanager";

//4. UI logic

//4.a: creating instances of employee types
const vinodDev = new Developer(1, 'vinod', 1500, 2500, 3500, 4500)
const anilHr = new Hr(3, 'joydip', 2500, 3500, 4500, 5500)
const sunilDev = new Developer(4, 'sunil', 2000, 3000, 4000, 5000)
const ramHr = new Hr(2, 'ram', 1000, 2000, 3000, 4000)

//4.b: adding one employee at a time
const manager = new EmployeeManager()
manager.add(vinodDev)
manager.add(anilHr)
manager.add(sunilDev)
manager.add(ramHr)

//4.c: calcuating salary
manager.generateSalaryAmount()

//4.d: printing every employee detail
console.log("\n all employees\n");
function printEmployees() {
    const records = manager.getAll()
    records.forEach(
        e => console.log(e.toString())
    )
}
printEmployees()

//4.e: filtering employees with salary more than 12000
console.log("\n\n filtered employees\n");
manager
    .filterBySalary(12000)
    .forEach(e => console.log(e.toString()))