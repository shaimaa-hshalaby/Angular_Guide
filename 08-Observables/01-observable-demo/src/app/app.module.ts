import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateObservableWithFromDemoComponent } from './02-create-observable-with-from-demo/create-observable-with-from-demo.component';
import { CreateObservableWithOfDemoComponent } from './01-create-observable-with-of-demo/create-observable-with-of-demo.component';
import { CreateObservableWithIntervalDemoComponent } from './03-create-observable-with-interval-demo/create-observable-with-interval-demo.component';
import { CreateObservableWithConstructorDemoComponent } from './04-create-observable-with-constructor-demo/create-observable-with-constructor-demo.component';
import { ErrorHandlingDemoComponent } from './05-error-handling-demo/error-handling-demo.component';
import { UnicastingDemoComponent } from './06-unicast-demo/unicast-demo.component';
import { MulticastDemoComponent } from './07-multicast-demo/multicast-demo.component';
import { PipeOperatorsDemoComponent } from './08-pipe-operators-demo/pipe-operators-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateObservableWithFromDemoComponent,
    CreateObservableWithOfDemoComponent,
    CreateObservableWithIntervalDemoComponent,
    CreateObservableWithConstructorDemoComponent,
    ErrorHandlingDemoComponent,
    UnicastingDemoComponent,
    MulticastDemoComponent,
    PipeOperatorsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
