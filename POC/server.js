var express = require("express");
var mysql   = require("mysql");
var jwt     = require("jwt-simple");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");
var fs = require("fs");


var app = express();

app.use(express.static(__dirname+"/../POC"));

app.use(bodyparser.json());

var connection = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"root",
   database:"poc"
});

connection.connect();

var tokensArray=[];

app.post("/login",function (req,res) {
    var uname = req.body.uname;
    var upwd  = req.body.upwd;

    connection.query("select uname from login_details where uname='"+uname+"'",function (err,recordsArray,fields) {
        if(recordsArray.length>0){
            var token = jwt.encode({'uname':uname},"hr@nareshit.com");
            tokensArray.push(token);
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'fail'});
        }
    });
});


app.post("/static",function (req,res) {
    if(tokensArray[0]==req.body.token){
        fs.readFile(__dirname+"/products.json",function (err,data) {
            res.send(data);
        });
    }else{
        res.send({'404':'UnAutorized User !'});
    }

});


app.post("/mysql",function (req,res) {
    if(tokensArray[0]==req.body.token){

        connection.query("select * from products",function (err,recordsArray,fields) {
            res.send(recordsArray);
        });

    }else{
        res.send({'404':'UnAutorized User !'});
    }

});


var mongoClient = mongodb.MongoClient;

app.post("/mongodb",function (req,res) {
    if(tokensArray[0]==req.body.token){

        mongoClient.connect("mongodb://localhost:27017/poc",function (err,db) {
            db.collection("products").find().toArray(function (mongoError,array) {
                res.send(array);
            });
        });

    }else{
        res.send({'404':'UnAutorized User !'});
    }

});


app.listen(8080);