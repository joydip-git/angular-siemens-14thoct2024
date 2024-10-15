import { Component } from '@angular/core';
import { AnotherComponent } from './another/another.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AnotherComponent]
})
export class AppComponent {

}
