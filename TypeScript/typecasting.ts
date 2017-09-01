/*
var var_one="10";
//<number><any>
var var_two:number = <number><any>var_one;
*/


/*
var var_one:boolean = 100;
var var_two:number=0x11;
var var_three:string = "Angular4";
var var_four:any=1000;
*/


var g_val:number=100;
class Test{
    l_var:number=200;
    static s_val:number=300;
}


console.log(g_val);         //100
var obj:Test=new Test();
console.log(obj.l_var);     //200
console.log(Test.s_val);    //300





