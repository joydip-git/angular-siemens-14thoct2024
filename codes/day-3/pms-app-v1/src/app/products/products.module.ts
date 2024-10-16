import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSortPipe } from './pipes/product-sort.pipe';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductSortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
