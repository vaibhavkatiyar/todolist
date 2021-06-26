const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var newtasks=[];

app.get("/",function(req,res){
    var today = new Date();
    var options ={
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{
        kindofDay: day,
        addtask: newtasks
    });
   
});

app.post("/",function(req,res){
    newtask = req.body.task;
    newtasks.push(newtask);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server is running");
});