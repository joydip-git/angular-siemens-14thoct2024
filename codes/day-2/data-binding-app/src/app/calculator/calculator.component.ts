import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html'
})

export class CalculatorComponent {
    choice = 0
    first = 0
    second = 0
    result = 0
    updateChoice(newChoice: number) {
        this.choice = newChoice
    }
    // updateFirst(value: number) {
    //     this.first = value
    // }
    // updateSecond(value: number) {
    //     this.second = value
    // }
    calculate() {
        switch (this.choice) {
            case 1:
                this.result = Number(this.first) + Number(this.second)
                break;

            case 2:
                this.result = Number(this.first) - Number(this.second)
                break;

            case 3:
                this.result = Number(this.first) * Number(this.second)
                break;

            case 4:
                this.result = Number(this.first) / Number(this.second)
                break;

            default:
                break;
        }
    }
}