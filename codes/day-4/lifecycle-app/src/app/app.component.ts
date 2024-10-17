import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Pass a Name'
  show = false

  updateName(newName: string) {
    console.log('emitted value: ' + newName);
    this.name = newName
  }
  updateShow() {
    this.show = !this.show
  }
}
