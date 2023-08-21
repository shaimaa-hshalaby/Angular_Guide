import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent {

  @ViewChild('phone') phoneInput:ElementRef

  onClickButton(phone:string){
    alert(`please call ${phone}`)
  }

  onSendElementRef(){
    console.log(this.phoneInput)
    console.log("==========================")
    console.log(this.phoneInput.nativeElement)
    console.log("==========================")
    console.log("value : "+this.phoneInput.nativeElement.value)
  }

}
