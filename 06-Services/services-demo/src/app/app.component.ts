import { Component } from '@angular/core';
import { LoggingService } from './services/Logging.service';
import { StudentService } from './services/student.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // ,providers:[StudentService]
})
export class AppComponent {


  constructor(private loggingService:LoggingService,private studentService:StudentService){

  }

  onInfoBtnClicked(){
    this.loggingService.log("log information")
    
  }

  onWarningBtnClicked(){
    this.loggingService.warn("log warning")
  }

  onErrorBtnClicked(){
    this.loggingService.error("log Error")
  }

}
