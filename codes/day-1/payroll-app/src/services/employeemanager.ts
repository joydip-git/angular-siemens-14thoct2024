import { injectable } from "inversify"
import { Employee } from "../models/employee"
import { employees } from "../repository/employees"
import { Manager } from "./abstraction/manager"

@injectable()
export class EmployeeManager implements Manager<Employee, number> {
    //method to add an employee in the array
    add(e: Employee): void {
        employees.push(e)
    }
    //method to calcule salary of every employee
    generateSalaryAmount(): void {
        employees.forEach(e => e.calculateSalary())
    }
    //method to filter the employees based on total salary
    filterRecords(value: number): Readonly<Employee[]> {
        return employees
            .filter(e => e.totalSalary > value)
    }
    //method to return all the records 
    getAll(): Readonly<Employee[]> {
        // const obj = {
        //     id: 1,
        //     name: 'joydip',
        //     salary: 1000
        // }
        // const copy = { ...obj }

        const copy = [...employees]
        return copy
    }
}