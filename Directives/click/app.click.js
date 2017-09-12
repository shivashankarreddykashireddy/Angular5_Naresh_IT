"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Click = (function () {
    function Click() {
        /*login(arg1,arg2){
          if(arg1 == "admin" && arg2=="admin"){
            alert("Login Success !");
          }else{
            alert("Login Fail !");
          }
        }*/
        /*login(arg1){
          if(arg1.uname=="admin" && arg1.upwd=="admin"){
            alert("Login Success !");
          }else{
            alert("Login Fail !");
          }
        }*/
        /*login_details={'uname':'','upwd':''};
        login(){
          if(this.login_details.uname=="admin" && this.login_details.upwd=="admin"){
            alert("Success !");
          }else{
            alert("Login Fail !");
          }
        }*/
        this.count = 0;
    }
    Click = __decorate([
        core_1.Component({
            selector: "click",
            templateUrl: "./click.html"
        })
    ], Click);
    return Click;
}());
exports.Click = Click;
