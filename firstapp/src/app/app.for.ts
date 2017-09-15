import {Component} from "@angular/core";

@Component({
  selector:"ng-for",
  templateUrl:"./ng.for.html"
})
export class NgForDemo{
  array_one:any[] = [
    10,20,30,40,50
  ];

  array_two:any[]=[
    {'id':111,'name':'Hello_1','age':20},
    {'id':222,'name':'Hello_2','age':22},
    {'id':333,'name':'Hello_3','age':24},
    {'id':444,'name':'Hello_4','age':26},
    {'id':555,'name':'Hello_5','age':28}
  ];
}
