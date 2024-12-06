import { Injectable } from "@angular/core";
import { ServiceContract } from "../../models/servicecontract";
import { Product } from "../../models/product";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "../../models/apiresponse";
import { APP_CONSTANTS } from "../../utilities/appconstants";
import { Observable } from "rxjs";

@Injectable()
export class ProductService implements ServiceContract<Product> {
    // private http: HttpClient;
    // constructor(http: HttpClient) {
    //     this.http = http
    // }

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(APP_CONSTANTS.PRODUCT_API_URL)
    }

    get(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${APP_CONSTANTS.PRODUCT_API_URL}/${id}`)
    }

    add(modelValue: Product): Observable<ApiResponse<Product[]>> {
        return this.http.post<ApiResponse<Product[]>>(APP_CONSTANTS.PRODUCT_API_URL, modelValue)
    }

    update(id: number, modelValue: Product): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${APP_CONSTANTS.PRODUCT_API_URL}/${id}`, modelValue)
    }

    delete(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${APP_CONSTANTS.PRODUCT_API_URL}/${id}`)
    }
}