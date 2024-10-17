import { Component, Inject } from '@angular/core';
import { ServiceContract } from './services/servicecontract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [DataService]
})
export class AppComponent {
  title = '';

  //private svc: DataService;
  //constructor(@Inject('DATA_SERVICE') svc: ServiceContract) {
  //this.svc = svc;
  //}
  constructor(@Inject('DATA_SERVICE') private svc: ServiceContract) {
    this.title = this.svc.getServiceData()
    console.log('App component created');
  }
}
