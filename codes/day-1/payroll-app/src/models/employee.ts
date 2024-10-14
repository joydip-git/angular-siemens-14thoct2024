export class Employee {
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