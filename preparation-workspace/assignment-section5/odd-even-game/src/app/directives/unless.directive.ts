import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // setter of the property
  @Input() set appUnless(condition:boolean){
    if(!condition){
      this.viewCRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewCRef.clear();
    }

  }

  constructor(private templateRef:TemplateRef<any>,
     private viewCRef:ViewContainerRef) { 
      console.log("templateRef : "+this.templateRef)
      console.log("viewContainerRef : "+this.viewCRef)
     }

}
