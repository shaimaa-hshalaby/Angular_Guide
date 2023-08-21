import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendingPostRequestDemoComponent } from './01-sending-post-request-demo/sending-post-request-demo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SendingGetRequestDemoComponent } from './02-sending-get-request-demo/sending-get-request-demo.component';
import { FetchDataWithSpinnerDemoComponent } from './03-fetch-data-with-spinner-demo/fetch-data-with-spinner-demo.component';
import { SendHttpRequestViaServiceDemoComponent } from './04-send-http-request-via-service-demo/send-http-request-via-service-demo.component';
import { SendDeleteRequestDemoComponent } from './05-send-delete-request-demo/send-delete-request-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SendingPostRequestDemoComponent,
    SendingGetRequestDemoComponent,
    FetchDataWithSpinnerDemoComponent,
    SendHttpRequestViaServiceDemoComponent,
    SendDeleteRequestDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
