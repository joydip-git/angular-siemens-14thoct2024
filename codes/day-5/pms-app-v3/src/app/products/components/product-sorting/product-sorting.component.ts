import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-sorting',
  templateUrl: './product-sorting.component.html',
  styleUrl: './product-sorting.component.css'
})
export class ProductSortingComponent {
  choice = "Name"
  @Output('choiceChanged') choiceSelectionChanged = new EventEmitter<string>()

  updateChoice(newChoice: string) {
    this.choice = newChoice
    this.choiceSelectionChanged.emit(this.choice)
  }
}
