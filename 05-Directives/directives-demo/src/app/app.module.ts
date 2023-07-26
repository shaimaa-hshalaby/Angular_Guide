import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleNgClassComponent } from './01-example-ng-class/example-ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleNgClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
