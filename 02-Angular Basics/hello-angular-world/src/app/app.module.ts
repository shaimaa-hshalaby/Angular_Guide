import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManualHelloWorldComponent } from './manual-hello-world/manual-helloworld.component';
import { AutomaticHelloWorldComponent } from './automatic-hello-world/automatic-hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualHelloWorldComponent,
    AutomaticHelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
