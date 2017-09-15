import {Component} from "@angular/core";
@Component({
  selector:"app-root",
  templateUrl:"./ngstyle.html"
})
export class NgStyleDemo{

  array:any[]=[
    {"name":"Hello_1","age":20},
    {"name":"Hello_2","age":22},
    {"name":"Hello_3","age":24},
    {"name":"Hello_4","age":26},
    {"name":"Hello_5","age":28}
  ];

  getColor(age){
    console.log(age);
    switch (age){

      case 20:
          return "red";
      case 22:
          return "green";
      case 24:
          return "blue";
    }

  }
}
