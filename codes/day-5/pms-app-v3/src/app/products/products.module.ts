import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSortPipe } from './pipes/product-sort.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductFiltrationComponent } from './components/product-filtration/product-filtration.component';
import { ProductSortingComponent } from './components/product-sorting/product-sorting.component';
import { APP_CONSTANTS } from '../utilities/appconstants';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductSortPipe,
    ProductFilterPipe,
    ProductContainerComponent,
    ProductListComponent,
    ProductFiltrationComponent,
    ProductSortingComponent
  ],
  imports: [
    CommonModule,
    //HttpClientModule (depricated)
  ],
  providers: [
    provideHttpClient(),
    //provider for ProductService
    {
      provide: APP_CONSTANTS.PRODUCT_SERVICE_TOKEN,
      useClass: APP_CONSTANTS.PRODUCT_SERVICE_TYPE
    }
  ],
  exports: [ProductContainerComponent]
})
export class ProductsModule { }
