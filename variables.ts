/*
var test:string="Hello";
var score1:number=100;
var score2:number=200;
var result= score1+score2;

var num = "1";
var my_num:number=<number><any>num;

var __num = 10;
__num="100";

*/

/*
var g_var:number = 100;
class Test{
    l_var:number = 200;
    static s_var:number=300;
    my_fun():void{
        var test:number=1000;
    }
}*/

/*
class Test{
    name:string;
    constructor(type:string){
        this.name=type;
    }

    disp():void{
        console.log(this.name);
    }
}*/


/*class Test{
    var_one:string;
    constructor(var_one:string){
        this.var_one=var_one;
    }
}




class Test_One extends Test{
    disp():void{
        console.log(this.var_one);
    }
}

var t = new Test_One("Hello");
t.disp();
*/

class Class_One{
    str:string;
}

class Class_Two extends Class_One{

}

class Class_Three extends Class_Two{

}

var obj = new Class_Three();
obj.str = "Hello";
console.log(obj.str);