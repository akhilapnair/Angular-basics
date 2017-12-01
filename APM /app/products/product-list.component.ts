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
    constructor(public p_service: ProductService) {

    }
    pageTitle: string = 'Product List!';
    imageWidth:number = 50;
    imageMargin:number = 50;
    showImage:boolean = false;
    listFilter:string;
    products:IProduct[];
    toggleImage():void {
        this.showImage = !this.showImage;
    }
    onRatingClicked(message:string) {
        this.pageTitle = 'ProductList:'+message;

    }
 }
