import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleNgClassComponent } from './01-example-ng-class/example-ng-class.component';
import { ExampleNgStyleComponent } from './02- example-ng-style/example-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleNgClassComponent,
    ExampleNgStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
