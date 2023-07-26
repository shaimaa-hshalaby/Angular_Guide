import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringEnterpolationComponent } from './01-string-enterpolation/string-enterpolation.component';
import { TemplateStatementComponent } from './02-template-statement/template-statement.component';
import { TemplateExpressionComponent } from './03-template-expression/template-expression.component';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './04-property-binding/property-binding.component';
import { EventBindingComponent } from './05-event-binding/event-binding.component';
import { TwoWayBindingComponent } from './06- two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StringEnterpolationComponent,
    TemplateStatementComponent,
    TemplateExpressionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
