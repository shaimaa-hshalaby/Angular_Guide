import { Directive , ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appendChild]'
})
export class appendChildDirective implements OnInit{

  constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }

  ngOnInit(): void {
    const inputEl = this.renderer.createElement('input') as HTMLInputElement
    const labelEl = this.renderer.createElement('label') as HTMLLabelElement
    inputEl.placeholder="Enter the username"
    inputEl.name="userName"
    labelEl.htmlFor="userName"
    labelEl.innerText="User Name:"
    this.renderer.appendChild(this.elementRef.nativeElement,labelEl)
    this.renderer.appendChild(this.elementRef.nativeElement,inputEl)
  }


}
