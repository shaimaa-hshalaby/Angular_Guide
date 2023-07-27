import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-logging-service-demo';

  constructor(private loggingService:LoggingService){}

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
