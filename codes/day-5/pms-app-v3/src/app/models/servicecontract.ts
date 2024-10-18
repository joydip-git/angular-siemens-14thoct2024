import { Observable } from "rxjs";
import { ApiResponse } from "./apiresponse";

export interface ServiceContract<TModel> {
    getAll(): Observable<ApiResponse<TModel[]>>;

    get(id: number): Observable<ApiResponse<TModel>>;

    add(modelValue: TModel): Observable<ApiResponse<TModel[]>>;

    update(id: number, modelValue: TModel): Observable<ApiResponse<TModel[]>>;

    delete(id: number): Observable<ApiResponse<TModel[]>>;
}