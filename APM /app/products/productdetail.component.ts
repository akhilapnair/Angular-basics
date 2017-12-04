
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-productsdetail',
    templateUrl: 'productdetail.component.html',
    // styleUrls: ['productdetail.component.css']
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail!';
  
 }
