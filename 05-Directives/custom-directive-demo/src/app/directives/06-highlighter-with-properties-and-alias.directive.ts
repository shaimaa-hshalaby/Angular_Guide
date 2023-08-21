import { Directive , ElementRef, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[highlighterWithPropertiesAndAlias]'
})
export class HighlighterWithPropertiesAndAliasDirective implements OnInit{

  @Input('highlighterWithPropertiesAndAlias') backgroundColor = 'purple'

  constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }

  ngOnInit(): void {
   this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor',this.backgroundColor)
  }


}
