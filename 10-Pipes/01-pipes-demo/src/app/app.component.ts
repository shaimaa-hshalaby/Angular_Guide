import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 'Test Pipes'
  numberValue =1000
  numberVal =0.5
  myDate = new Date()
}
