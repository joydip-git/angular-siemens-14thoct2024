import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [DataService]
})
export class AppComponent {
  title = '';
  constructor(private svc: DataService) {
    this.title = this.svc.getServiceData()
    console.log('App component created');
  }
}
