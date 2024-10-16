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
  updateChoice(newChoice: string) {
    // console.log(newChoice);
    this.choice = newChoice
  }
}
