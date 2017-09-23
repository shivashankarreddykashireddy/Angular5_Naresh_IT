/*
var fun_one = function () {
    document.write("<h1>Welcome...!</h1>");
};
fun_one();

*/

/*var fun_one = ()=>{
    document.write("<h1>Arrow....!</h1>");
}*/
/*var fun_one = ()=>document.write("<h1>Arrow...!</h1>");*/
//fun_one();


/*
var fun_one = function (arg1:number,arg2:number) {
    document.write("Addition.."+(arg1+arg2));
};
fun_one(100,100);
*/


/*var fun_one = (arg1:number,arg2:number)=>{
    console.log(arg1+arg2);
};
fun_one(100,100);*/


var fun_one = (x)=>{
    if(x typeof number){
        document.write("Number...!");
    }else if(x typeof string){
        document.write("String...!");
    }else if(x typeof boolean){
        document.write("Boolean...!");
    }else{
        document.write("UnKnown Type...!");
    }
}







