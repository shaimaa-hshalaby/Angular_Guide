import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponentComponent } from './odd-component/odd-component.component';
import { EvenComponentComponent } from './even-component/even-component.component';
import { BasicHighlightDirective } from './highlighter/basic-highlight.directive';
import { BetterHighlighterDirective } from './highlighter/better-highlighter.directive';
import { UnlessDirective } from './directives/unless.directive'

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponentComponent,
    EvenComponentComponent,
    BasicHighlightDirective,
    BetterHighlighterDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
