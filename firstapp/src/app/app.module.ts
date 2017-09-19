import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgStyleDemo} from './app.ngstyle';
import {NgModelDemo} from './app.ngmodel';
import {FormsModule} from "@angular/forms";
import {NgForDemo} from "./app.for";
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { DemoComponent } from './demo/demo.component';
import { SubmitComponent } from './submit/submit.component';
import { HiddenComponent } from './hidden/hidden.component';




@NgModule({
  declarations: [
    AppComponent,
    NgStyleDemo,
    NgModelDemo,
    NgForDemo,
    NgStyleComponent,
    NgClassComponent,
    DemoComponent,
    SubmitComponent,
    HiddenComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HiddenComponent]
})
export class AppModule { }
