import { Component } from '@angular/core';

@Component({
  selector: '[success-alert]',
  templateUrl: './success-alert-component.component.html',
  styleUrls: ['./success-alert-component.component.css']
})
export class SuccessAlertComponentComponent {
   allowNewServer = false;
   serverName='Testing';
   successMsg = 'Congratulation .. you display the value from the class';
   serverCreationStatus = "No server has been created";
   username='';
   serverCreated = false;
   serverStatus='';

   constructor(){
    this.serverStatus = Math.random()>0.5? 'online':'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
   }

   onClickBtn(){
    this.serverCreated = true;
    this.serverCreationStatus = "server with name "+this.serverName+" has been Created!!"
   }

   onUpdateInput(event:Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
   }

   onClickClearBtn(){
    this.username = '';
   }

   getColor(){
    return (this.serverStatus==='online')?'green':'red';
   }
}
