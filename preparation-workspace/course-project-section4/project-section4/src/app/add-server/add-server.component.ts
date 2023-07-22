import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {

  serverName='';
  serverContent='';

  @ViewChild('serverNameInput') serverNameInputElement:ElementRef<HTMLInputElement> ;
  @ViewChild('serverContentInput') serverContentInputElement:ElementRef<HTMLInputElement> ;
  

   @Output('nServerCreated') newServerCreated = new EventEmitter<{serverName:string,serverContent:string}>();
   @Output('bluePrintCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

   // fire the event
  //  onAddServerBtnClicked(){
  //     console.log("add server btn clicked")
  //     this.newServerCreated.emit(
  //       {
  //         serverName:this.serverName,
  //         serverContent: this.serverContent
  //       }
  //     )
  //     this.clearForm();
  //  }

  onAddServerBtnClicked(serverNameInput:HTMLInputElement ,serverContentInput:HTMLInputElement ){
    console.log("add server btn clicked")
    this.newServerCreated.emit(
      {
        serverName:serverNameInput.value,
        serverContent: serverContentInput.value
      }
    )
    this.clearForm();
 }

   
  //  onBlueprintBtnClicked(){
  //   console.log("add blueprint btn clicked")
  //   this.blueprintCreated.emit(
  //     {
  //       serverName:this.serverName,
  //       serverContent: this.serverContent
  //     }
  //   )
  //     this.clearForm();
  //  }

  // onBlueprintBtnClicked(serverNameInput:HTMLInputElement ,serverContentInput:HTMLInputElement ){
  //   console.log("add blueprint btn clicked")
  //   this.blueprintCreated.emit(
  //     {
  //       serverName:serverNameInput.value,
  //       serverContent: serverContentInput.value
  //     }
  //   )
  //     this.clearForm();
  //  }

   onBlueprintBtnClicked(){
    console.log(this.serverNameInputElement.nativeElement)
    this.blueprintCreated.emit(
      {
        serverName:this.serverNameInputElement.nativeElement.value,
        serverContent: this.serverContentInputElement.nativeElement.value
      }
    )
      this.clearForm();
   }


   clearForm(){
    this.serverName ='';
    this.serverContent='';
   }
   
}
