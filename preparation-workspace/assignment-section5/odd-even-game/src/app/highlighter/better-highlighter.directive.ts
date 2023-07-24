import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{

  @Input() defaultBackgroundColor:string = 'blue';
  @Input() highlightBackgroundColor:string = 'yellow';
  @Input() defaultTextColor:string = 'white';
  @Input() highlightTextColor:string = 'black';


  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostBinding('style.color') color:string;

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { 
    
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','white');
    
    // this.backgroundColor= 'blue';
    // this.color = 'white';
   
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultTextColor;
  }

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','black');

    // this.backgroundColor= 'yellow';
    // this.color = 'black';

    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightTextColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','white');

    
    // this.backgroundColor= 'blue';
    // this.color = 'white';

    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultTextColor;
  }

}
