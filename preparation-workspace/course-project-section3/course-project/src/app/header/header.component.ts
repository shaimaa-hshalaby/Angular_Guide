import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector:'header-app',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{

    @Output() onFeatureSelected:EventEmitter<string> = new EventEmitter();


    onSelectFeature(feature:string){
        this.onFeatureSelected.emit(feature);
    }

}