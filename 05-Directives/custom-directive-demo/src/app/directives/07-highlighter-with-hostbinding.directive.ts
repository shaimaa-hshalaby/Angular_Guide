import { Directive , ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlighterWithHostBinding]'
})
export class HighlighterWithHostBindingDirective {
  
  @Input()
  @HostBinding('style.backgroundColor') backgroundColor = 'blue'
  constructor(private elementRef:ElementRef) { }

}
