import { Directive , ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[createText]'
})
export class CreateTextDirective implements OnInit{

  constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }

  ngOnInit(): void {
    const textEl = this.renderer.createText("This content is added by the directive")
    this.renderer.appendChild(this.elementRef.nativeElement,textEl)
  }


}
