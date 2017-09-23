/*
function fun_one(arg1:number,arg2?:string){
    console.log(arg1);
    if(arg2!=undefined){
        console.log(arg2);
    }
}
fun_one(100);
fun_one(100,"Hello");*/
/*
function fun_one(arg1:string,arg2:string="Hello_2"){
    console.log(arg1+"..."+arg2);
}
fun_one("Hello_1");
fun_one("Hello_1","Hello_3");
*/
function fun_one() {
    var arg1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg1[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < arg1.length; i++) {
        result = result + arg1[i];
    }
    document.write("<h1>" + result + "</h1>");
}
fun_one(10, 10, 30, 40, 50);
