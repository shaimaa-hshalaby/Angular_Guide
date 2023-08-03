import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { TemplateDrivenFormDemoComponent } from './01-template-driven-form-demo/template-driven-form-demo.component';
import { NgformPropertiesDemoComponent } from './02-ngform-properties-demo/ngform-properties-demo.component';
import { NgModelGroupDemoComponent } from './03-ng-model-group-demo/ng-model-group-demo.component';
import { RadioButtonsDemoComponent } from './04-radio-buttons-demo/radio-buttons-demo.component';
import { SettingFormValueProgramaticallyDemoComponent } from './05- setting-form-value-programatically-demo/setting-form-value-programatically-demo.component';
import { ReactiveFormDemoComponent } from './06-reactive-form-demo/reactive-form-demo.component';
import { ReactiveFormNestedFormGroupsDemoComponent } from './07-reactive-form-nested-form-groups-demo/reactive-form-nested-form-groups-demo.component';
import { FormArrayDemoComponent } from './08-form-array-demo/form-array-demo.component';
import { CustomValidationDemoComponent } from './09-custom-validation-demo/custom-validation-demo.component';
import { CustomValidationWithParametersDemoComponent } from './10-custom-validation-with-parameters-demo/custom-validation-with-parameters-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormDemoComponent,
    NgformPropertiesDemoComponent,
    NgModelGroupDemoComponent,
    RadioButtonsDemoComponent,
    SettingFormValueProgramaticallyDemoComponent,
    ReactiveFormDemoComponent,
    ReactiveFormNestedFormGroupsDemoComponent,
    FormArrayDemoComponent,
    CustomValidationDemoComponent,
    CustomValidationWithParametersDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
