import {Component} from "@angular/core";

@Component({
  selector:"first-app",
  templateUrl:"./first.component.html"
})
export class FirstComponent{
  sub_one:string;
  sub_two:string;
  sub_three:string;

  constructor(){
    this.sub_one="Angular4";
    this.sub_two="NodeJS";
    this.sub_three="MongoDB";
  }
}
