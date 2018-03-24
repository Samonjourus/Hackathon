const EXPRESS = require('express');
const BODYPARSER = require("body-parser")
const FS = require("fs")
const BUSBOY = require('connect-busboy');
const ENDPOINTS = require("./endpoints/endpoints.js")
var app = EXPRESS();

app.use(BUSBOY())
app.use(BODYPARSER.urlencoded({extended:true, upperBound:"100mb"}))
app.use(BODYPARSER.json())

app.use(function(req, res, next){
  console.log(req.url + " " + req.method +" | "+JSON.stringify(req.body));
  //FILESYSTEM.appendFile('Server.log', " "+req.ip + " " + new Date() + " " + req.url + " " + req.method +" "+JSON.stringify(req.body) + "\"\n", function(){});
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, SEARCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);

  if(req.method == "OPTIONS")
    {
      res.status(200);
      res.end();
    }
  else
    next();
});

app.use("/api", ENDPOINTS)

app.use('/', EXPRESS.static(__dirname + "/web"))

app.listen(80, function(){
  console.log("server started");
})
