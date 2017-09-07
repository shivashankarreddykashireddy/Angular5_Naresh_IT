/*
interface my_interface{
    sub_one:string;
    sub_two:string;
    sub_three:string;

}

var impl_one:my_interface={
    sub_one:"AngularJS",
    sub_two:"NodeJS",
    sub_three:"MongoDB"

}

var impl_two:my_interface={
    sub_one:"Angular4",
    sub_two:"NodeJS",
    sub_three:"MongoDB"
}

document.write(impl_one.sub_one+"..."+impl_one.sub_two+"..."+impl_one.sub_three);
document.write(impl_two.sub_one+"..."+impl_two.sub_two+"..."+impl_two.sub_three);



interface interface_one{
    var_one:string;
}

interface interface_two extends interface_one{
    var_two:string;
}

var obj:interface_two={
    var_one:"Hello_1",
    var_two:"Hello_2"
};

document.write(obj.var_one+"..."+obj.var_two);

*/
var obj = {
    var_one: "Hello_one",
    var_two: "Hello_two"
};
document.write(obj.var_one + "..." + obj.var_two);
