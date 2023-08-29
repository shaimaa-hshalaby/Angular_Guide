import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ParentComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
