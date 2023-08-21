import { Directive , ElementRef, HostBinding, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[highlighterWithHostListenter]'
})
export class HighlighterWithHostListenterDirective {
  
  @HostBinding('style.backgroundColor') backgroundColor = 'orange'
  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.backgroundColor = 'orange'
  }

}
