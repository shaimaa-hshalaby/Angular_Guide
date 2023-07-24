import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighLighter]'
})
export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef:ElementRef){
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor='green';
    }

}