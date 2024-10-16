import { Component } from '@angular/core';
import { productRepository } from '../../../data/productrepository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productRepository
  choice = 'Name'
  filterText = ''

  updateFilterText(newText: string) {
    this.filterText = newText
  }
  updateChoice(newChoice: string) {
    this.choice = newChoice
  }
}
