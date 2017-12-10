import { Component, Provider } from '@angular/core';
import { ProductService } from './products/product.service';
@Component({
    selector: 'pm-app',
    template: `
    <nav class='navbar navbar-default'>
    <div class='container-fluid'>
    <a class='navbar-brand'></a>
    <ul class='nav navbar-nav'>
    <li><a [routerLink]="['/welcome']" routerLinkActive="active">Home</a></li>
    <li><a [routerLink]="['/product']" routerLinkActive="active">Product List</a></li>
    </ul>
    </div>
    </nav>
    <div class = 'container'>
    <router-outlet></router-outlet>
    </div>
`   ,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
