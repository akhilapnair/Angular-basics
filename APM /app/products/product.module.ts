import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    // SharedModule,
    // RouterModule.forChild([
    //   { path: 'products', component: ProductListComponent },
    //   { path: 'product/:id',
    //     canActivate: [ ProductDetailGuard],
    //     component: ProductDetailComponent
    //   }
    // ])
  ],
  declarations: [
    ProductListComponent,
    // ProductDetailComponent,
    // ProductFilterPipe
  ],
  providers: [
    // ProductService,
    // ProductDetailGuard
  ]
})
export class ProductModule {}
