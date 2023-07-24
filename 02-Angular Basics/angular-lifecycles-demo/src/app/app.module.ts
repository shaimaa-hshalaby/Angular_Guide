import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnChangesComponent } from './on-changes-component/on-changes.component';
import { FormsModule } from '@angular/forms';
import { OnChangesParentComponent } from './on-changes-parent-component/on-changes-parent.component';
import { OnInitComponent } from './on-init-component/on-init.component';

@NgModule({
  declarations: [
    AppComponent,
    OnInitComponent,
    OnChangesComponent,
    OnChangesParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
