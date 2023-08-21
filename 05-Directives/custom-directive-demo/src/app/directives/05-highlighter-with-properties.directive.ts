import { Directive , ElementRef, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[highlighterWithProperties]'
})
export class HighlighterWithPropertiesDirective implements OnInit{

  @Input() backgroundColor = 'purple'

  constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }

  ngOnInit(): void {
   this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor',this.backgroundColor)
  }


}
