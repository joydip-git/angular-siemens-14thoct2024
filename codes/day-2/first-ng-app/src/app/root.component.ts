import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrl: './root.component.css'
})
export class RootComponent {
    title = 'Welcome to Angular'
    constructor() {
        console.log('Root component created...');
    }
}