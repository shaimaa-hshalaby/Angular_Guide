import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { PassingQueryParamDemoComponent } from './02-passing-query-param-demo/passing-query-param-demo.component';
import { PassingRouteParamDemoComponent } from './01-passing-route-param-demo/passing-route-param-demo.component';
import { NotFoundComponent } from './04-not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { PassingFragmentDemoComponent } from './03-passing-fragment-demo/passing-fragment-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    PassingQueryParamDemoComponent,
    PassingRouteParamDemoComponent,
    PassingFragmentDemoComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
