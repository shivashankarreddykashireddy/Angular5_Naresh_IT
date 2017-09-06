/*
    Ex_1:

var my_fun = ()=>document.write("Hello");
my_fun();

var my_fun = (x:string)=>document.write(x);
my_fun("Hello");


var my_fun = x=>document.write(x);
my_fun(100);




var my_fun = (x)=>
{
    if(typeof x=="number"){
        document.write("Number")
    }else if(typeof x=="string"){
        document.write("String");
    }else if(typeof x=="boolean"){
        document.write("Boolean");
    }
}

my_fun(100);
*/


function my_fun(x:any,y?:any):void{
    document.write(x);
    document.write(y);
}

my_fun(100);
my_fun(100,200);