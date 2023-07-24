import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none/view-encapsulation-none.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated/view-encapsulation-emulated.component';
import { ViewEncapsulationShadowDomComponent } from './view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationShadowDomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
