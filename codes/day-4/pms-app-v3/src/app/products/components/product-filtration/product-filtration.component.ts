import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filtration',
  templateUrl: './product-filtration.component.html',
  styleUrl: './product-filtration.component.css'
})
export class ProductFiltrationComponent {
  filterText = ''
  @Output('filtrationValueChanged') filterTextChanged = new EventEmitter<string>()

  updateFilterText(newText: string) {
    this.filterText = newText
    this.filterTextChanged.emit(this.filterText)
  }
}
