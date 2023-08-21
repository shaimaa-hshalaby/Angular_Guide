import { Directive , ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlighter]'
})
export class BasicHighlighterDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow'
  }


}
