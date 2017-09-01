/*
class Class_One{
    var_one:string;
    constructor(name:string){
        this.var_one=name;
    }
}

var obj:Class_One = new Class_One("Angular4");
console.log(obj.var_one);  //Angular4

*/

/*
class Class_One{
    var_one:string;
    constructor(){
        this.var_one="Data From Angular4 Component Soon...!";
    }

    getData():void{
        console.log(this.var_one);
    }
}

var obj = new Class_One();
console.log(obj.var_one);    //Data From Angular4 Component Soon...!
console.log(obj.getData());  //Data From Angular4 Component Soon...!

*/

/*
class Class_One{
    str;
    constructor(name){
        this.str=name;
    }
}

class Class_Two extends Class_One{

}


var obj = new Class_Two("Welcome");
console.log(obj.str);   //Welcome
*/


/*class Class_One{
    var_one;
    constructor(){
        this.var_one="I am from Class One";
    }
    getData(){
        return this.var_one;
    }
}

class Class_Two extends Class_One{}
class Class_Three extends Class_Two{}
var obj = new Class_Three();
console.log(obj.var_one);
console.log(obj.getData());*/


class Class_One{
    getData(){
        console.log("From Class_One");
    }
}

class Class_Two extends Class_One{
    getData(){
        super.getData();
        console.log("From Class_Two");
    }
}

var obj_one = new Class_Two();
obj_one.getData();  //From Class_One From Class_Two

var obj_two = new Class_One();
obj_two.getData();  //From Class_One



