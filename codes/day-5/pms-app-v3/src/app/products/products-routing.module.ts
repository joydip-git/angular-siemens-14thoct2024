import { NgModule } from "@angular/core";
import { Route, Routes, RouterModule } from "@angular/router";
import { ProductContainerComponent } from "./components/product-container/product-container.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { UpdateProductComponent } from "./components/update-product/update-product.component";
import { AddProductComponent } from "./components/add-product/add-product.component";

//const addroute: Route = {}
// const productRoutes: Routes = [
//     {
//         path: 'products', component: ProductContainerComponent
//     },
//     {
//         path: 'products/:id', component: ProductDetailComponent
//     },
//     {
//         path: 'products/update/:id', component: UpdateProductComponent
//     },
//     {
//         path: 'products/add', component: AddProductComponent
//     }
// ]

const productRoutes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: '', component: ProductContainerComponent
            },
            {
                path: 'add', component: AddProductComponent
            },
            {
                path: 'view/:id', component: ProductDetailComponent
            },
            {
                path: 'update/:id', component: UpdateProductComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }