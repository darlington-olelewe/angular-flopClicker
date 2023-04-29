import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActorDisplayComponent } from './actor-display/actor-display.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ActorDisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
