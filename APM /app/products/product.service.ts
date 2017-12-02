import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
    private productUrl = '/api/products/products.json';
    constructor(private _http: Http) {
    }
getProduct(): Observable <IProduct[]> {
 return this._http.get(this.productUrl)
.map((response:Response) => <IProduct[]>response.json());
}