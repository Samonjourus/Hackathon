const EXPRESS = require('express');
const BODYPARSER = require("body-parser")
const FS = require("fs")
const BUSBOY = require('connect-busboy');
const ENDPOINTS = require("./endpoints/endpoints.js")
var app = EXPRESS();

app.use(BUSBOY())
app.use(BODYPARSER.urlencoded({extended:true, upperBound:"100mb"}))
app.use(BODYPARSER.json())

app.use("/", function(req,res,next){
  console.log(req.method + " " + req.path + " | " + JSON.stringify(req.body) + " " + JSON.stringify(req.query));
  next();
})

app.use("/api", ENDPOINTS)

app.use('/', EXPRESS.static(__dirname + "/web"))

app.listen(80, function(){
  console.log("server started");
})
