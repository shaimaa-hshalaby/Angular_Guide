import { Directive , ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[HighlighterV2]'
})
export class HighlighterV2Directive implements OnInit{

  constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','pink')
  }


}
