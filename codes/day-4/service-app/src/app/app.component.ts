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

  //svc = new DataService()

  constructor(private svc: DataService) {
    // this.svc = new DataService()    
    this.title = this.svc.getTitle()
    console.log('App component created');
  }
}
