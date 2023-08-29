import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatchErrorDemoComponent } from './01-catch-error-handling-demo/catch-error-handling-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CatchErrorDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
