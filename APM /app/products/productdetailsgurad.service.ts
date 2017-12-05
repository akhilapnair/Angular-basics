
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailsGuradService implements CanActivate {
    constructor(private _route: Router) {

    }

    canActivate(route:ActivatedRouteSnapshot): boolean {
        let id =+route.url[1].path;
        if(isNaN(id)||id<0) {
            alert('invalid url')
            this._route.navigate(['/welcome']);
            return false;
        }
        return true;
    }

}