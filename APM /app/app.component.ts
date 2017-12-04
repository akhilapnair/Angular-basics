import { Component, Provider } from '@angular/core';
import { ProductService } from './products/product.service';
@Component({
    selector: 'pm-app',
    template: `
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav navbar-nav'>
    <li><a [routerLink]="['/welcome']" routerLinkActive="active">Home</a></li>
    <li><a [routerLink]="['/product']" routerLinkActive="active">Product List</a></li>
    </ul>
    <div class = 'container'>
    <router-outlet></router-outlet>
    </div>
`
    //    <ul>
    //    <li><a [routerLink] = "['/welcome']">Home</a></li>
    //    <li><a [routerLink] = "['/product']">Product List</a</li>
    //    </ul>
        // <pm-products></pm-products>
    ,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
