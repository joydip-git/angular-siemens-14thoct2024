import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';
  names = []
  people = [{
    id: 1,
    name: 'joydip',
    salary: 1000
  }, {
    id: 2,
    name: 'anil',
    salary: 2000
  }]
  updateTitle(newTitle: string) {
    this.title = newTitle
    // if (this.people.length > 0) {
    //   for (let p of this.people) {

    //   }
    // }
  }
}
