import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { AddServerComponent } from './add-server/add-server.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    AddServerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
