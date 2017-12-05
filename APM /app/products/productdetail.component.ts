
import { Component,OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pm-productsdetail',
    templateUrl: 'productdetail.component.html',
    // styleUrls: ['productdetail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail!';
    product:IProduct;
    constructor(private _route: ActivatedRoute,
                 private _router: Router ) {


    }
    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle = id;
    }
    onClick(): void {
        this._router.navigate(['/product']);
    }
 }
