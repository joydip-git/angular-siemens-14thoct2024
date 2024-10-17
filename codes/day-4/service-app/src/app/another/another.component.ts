import { Component, Inject } from '@angular/core';
import { ServiceContract } from '../services/servicecontract';

@Component({
    selector: 'app-another',
    template: `<h2>{{title}}</h2>`,
    //providers: [DataService]
})

export class AnotherComponent {
    title = 'Another: '
    constructor(@Inject('DATA_SERVICE') private svc: ServiceContract) {
        this.title += this.svc.getServiceData()
        console.log('Another component created');
    }
}