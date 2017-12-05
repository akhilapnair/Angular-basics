import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
// import { ProductModule } from './products/product.module';
import { ProductFilterPipe } from './products/product-filter-pipe';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/productdetail.component';
import { StarComponent } from './shared/star.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {  CanActivate} from '@angular/router';
import { ProductDetailsGuradService } from './products/productdetailsgurad.service';
@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             HttpModule,
             RouterModule.forRoot([
               { path: 'product', component : ProductListComponent },
               { path: 'product/:id',
                canActivate:[ProductDetailsGuradService],
                component : ProductDetailComponent },
               { path: 'welcome', component : WelcomeComponent },
               { path: '', redirectTo : '/welcome',pathMatch: 'full' },
               { path: '**', redirectTo : '/welcome',pathMatch: 'full' }
            ])
          ],
  declarations: [ AppComponent,
                  ProductListComponent,
                  ProductFilterPipe ,
                  StarComponent,
                  ProductDetailComponent,
                  WelcomeComponent],
  providers:[ProductDetailsGuradService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
