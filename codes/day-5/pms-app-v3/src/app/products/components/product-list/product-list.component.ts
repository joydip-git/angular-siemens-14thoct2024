import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ServiceContract } from '../../../models/servicecontract';
import { APP_CONSTANTS } from '../../../utilities/appconstants';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../../../models/apiresponse';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  products?: Product[];
  errorInfo = ''
  fetchComplete = false

  @Input() choice = 'Name'
  @Input() filterText = ''

  private getSubscription?: Subscription;

  constructor(@Inject(APP_CONSTANTS.PRODUCT_SERVICE_TOKEN) private ps: ServiceContract<Product>) {
  }

  ngOnInit(): void {
    // setTimeout(
    //   () => { this.getData() },
    //   2000
    // )
    this.getData()
  }

  ngOnDestroy(): void {
    this.getSubscription?.unsubscribe()
  }

  private getData() {
    this.getSubscription =
      this.ps
        .getAll()
        .subscribe(
          {
            next: (apiResponse: ApiResponse<Product[]>) => {
              if (apiResponse.data !== null) {
                this.products = apiResponse.data
                this.errorInfo = ''
                this.fetchComplete = true
              } else {
                this.products = undefined
                this.errorInfo = apiResponse.message
                this.fetchComplete = true
              }
            },
            error: (e) => {
              this.products = undefined
              this.errorInfo = e.message
              this.fetchComplete = true
            },
            complete: () => { }
          }
        )
  }
}
