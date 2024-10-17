import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-another',
    template: `<h2>{{title}}</h2>`,
    //providers: [DataService]
})

export class AnotherComponent {
    title = 'Another: '
    constructor(private svc: DataService) {
        this.title += this.svc.getTitle()
        console.log('Another component created');
    }
}