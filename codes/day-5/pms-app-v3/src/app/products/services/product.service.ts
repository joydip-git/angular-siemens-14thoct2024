import { Injectable } from "@angular/core";
import { ServiceContract } from "../../models/servicecontract";
import { Product } from "../../models/product";
import { productRepository } from "../../data/productrepository";

@Injectable()
export class ProductService implements ServiceContract<Product> {
    getAll(): Product[] {
        return [...productRepository]
    }
}