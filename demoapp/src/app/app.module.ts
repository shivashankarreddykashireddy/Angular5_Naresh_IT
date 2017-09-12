import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Sample} from './app.sample';

@NgModule({
  declarations: [
    AppComponent,
    Sample
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Sample]
})
export class AppModule { }
