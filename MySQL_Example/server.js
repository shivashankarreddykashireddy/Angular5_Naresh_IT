//import modules
var express = require("express");
var mysql   = require("mysql");
var mongodb = require("mongodb");

//create the app instance
var app = express();

//Deploy the Application
app.use(express.static(__dirname+"/../MySQL_Example"));

//connection object
var connection = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"root",
   database:"workshop"
});

//connect to database.
connection.connect();

//create client.
var sreenuTech = mongodb.MongoClient;
app.get("/mongodb",function (req,res) {
    sreenuTech.connect("mongodb://localhost:27017/workshop",function (err,db) {
        db.collection("products").find().toArray(function (err,array) {
            res.send(array);
        });
    });
});




//Rest API
app.get("/mysql",function (req,res) {
    connection.query("select * from products",function (err,recordsArray,fields) {
        res.send(recordsArray);
    });
});

//assign the port.
app.listen(8080);
console.log("Server Listening the Port No.8080");
