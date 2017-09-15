import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgStyleDemo} from './app.ngstyle';
@NgModule({
  declarations: [
    AppComponent,
    NgStyleDemo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NgStyleDemo]
})
export class AppModule { }
