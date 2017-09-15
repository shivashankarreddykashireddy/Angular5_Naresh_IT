import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgStyleDemo} from './app.ngstyle';
import {NgModelDemo} from './app.ngmodel';
import {FormsModule} from "@angular/forms";
import {NgForDemo} from "./app.for";

@NgModule({
  declarations: [
    AppComponent,
    NgStyleDemo,
    NgModelDemo,
    NgForDemo
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NgForDemo]
})
export class AppModule { }
