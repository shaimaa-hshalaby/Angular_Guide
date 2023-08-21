import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlighterDirective } from './directives/01-basic-highlighter.directive';
import { HighlighterV2Directive } from './directives/02-highlighter-v2.directive';
import { CreateTextDirective } from './directives/03-create-text.directive';
import { appendChildDirective } from './directives/04-append-child.directive';
import { HighlighterWithPropertiesDirective } from './directives/05-highlighter-with-properties.directive'
import { HighlighterWithPropertiesAndAliasDirective } from './directives/06-highlighter-with-properties-and-alias.directive'
import { HighlighterWithHostBindingDirective } from './directives/07-highlighter-with-hostbinding.directive'
import { HighlighterWithHostListenterDirective } from './directives/08-highlighter-with-hostlistenter.directive'

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighterDirective,
    HighlighterV2Directive,
    CreateTextDirective,
    appendChildDirective,
    HighlighterWithPropertiesDirective,
    HighlighterWithPropertiesAndAliasDirective,
    HighlighterWithHostBindingDirective,
    HighlighterWithHostListenterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
