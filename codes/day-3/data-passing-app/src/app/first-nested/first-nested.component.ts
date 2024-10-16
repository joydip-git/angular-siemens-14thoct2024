import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-nested',
  templateUrl: './first-nested.component.html',
  styleUrl: './first-nested.component.css'
})
export class FirstNestedComponent {
  nameText = ''
  @Output('nameChanged') nameTextChanged = new EventEmitter<string>()

  updateNameText(newName: string) {
    this.nameText = newName
    this.nameTextChanged.emit(this.nameText)
  }
}
