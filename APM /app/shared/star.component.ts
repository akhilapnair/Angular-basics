
import { Component,OnChanges} from '@angular/core';
@Component( {
     moduleId:module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges{
	starWidth:number;
    rating:number;
    ngOnChanges():void{
        this.starWidth = this.rating*86;
    }
}