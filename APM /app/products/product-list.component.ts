import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
    moduleId:module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
    pageTitle: string = 'Product List!';
    imageWidth:number = 50;
    imageMargin:number = 50;
    showImage:boolean = false;
    listFilter:string;
    products:IProduct[];
    errorMessage:any;
    constructor(public p_service: ProductService) {

    }
    ngOnInit() {
        this.p_service.getProduct()
        .subscribe(
            product => this.products = product,
            error => this.errorMessage = <any>error);
    }
    toggleImage():void {
        this.showImage = !this.showImage;
    }
    onRatingClicked(message:string) {
        this.pageTitle = 'ProductList:'+message;

    }
 }
