import { Component, Inject, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ServiceContract } from '../../../models/servicecontract';
import { APP_CONSTANTS } from '../../../utilities/appconstants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[];
  @Input() choice = 'Name'
  @Input() filterText = ''

  constructor(@Inject(APP_CONSTANTS.PRODUCT_SERVICE_TOKEN) private ps: ServiceContract<Product>) {
    this.products = this.ps.getAll()
  }
}
