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
import { TemplateVariablesComponent } from './07-template-variables/template-variables.component';
import { SingleSlotContentProjectionComponent } from './08-single-slot-content-projection/single-slot-content-projection.component';
import { MultiSlotContentProjectionComponent } from './09-multi-slot-content-projection/multi-slot-content-projection.component';
import { NgTemplateDemoComponent } from './10-ng-template-demo/ng-template-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    StringEnterpolationComponent,
    TemplateStatementComponent,
    TemplateExpressionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TemplateVariablesComponent,
    SingleSlotContentProjectionComponent,
    MultiSlotContentProjectionComponent,
    NgTemplateDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
