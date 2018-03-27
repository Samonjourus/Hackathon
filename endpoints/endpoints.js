const MONGOCLIENT = require('mongodb').MongoClient;
const EXPRESS = require('express');
const FS = require("fs")
var router = EXPRESS.Router();
const MULTER = require('multer');
var UPLOADS = MULTER({dest: 'web/web/upload/'});

//story a user's story in the database
router.post("/story", function(req, res, next){
  document = req.body;
  document.Timestamp = new Date();
  MONGOCLIENT.connect("mongodb://localhost:27017", function(err, client){
    if(err){
      console.log(err);
      res.end(JSON.stringify({"status":"bad"}))
      client.close();
      return;
    }
    db = client.db("Hackathon")
    db.collection("stories").insertOne(document, function(err,result){
      if(err){
        console.log(err);
        res.end(JSON.stringify({"status":"bad"}))
        client.close();
        return;
      }
      else {
      res.end(JSON.stringify({"status":"good"}))
      client.close();
      return;
        }
      })
    })
  })
router.post("/imageUpload",UPLOADS.any(), function(req,res){
  console.log(req.files);
  console.log(req.file);
  FS.rename(req.files[0].destination + req.files[0].filename, req.files[0].destination + req.files[0].filename+".png",function(err){
    res.end(req.files[0].filename+".png")
  })
})
//allows a user to log in to access superuser-only information
router.post("/login", function(req,res,next){
  loginInfo = {"username":req.body.username,"password":req.body.password};
  console.log(JSON.stringify(loginInfo));
  MONGOCLIENT.connect("mongodb://localhost:27017", function(err, client){
    if(err){
      console.log(err);
      res.end(JSON.stringify({"status":"bad"}))
      client.close();
      return;
    }
    db = client.db("Hackathon")
    db.collection("superusers").find(loginInfo).toArray(function(err,results){
      console.log(JSON.stringify(results));
      if(err){
        console.log(err);
        res.end(JSON.stringify({"status":"bad"}))
        client.close();
        return;
      }
      else {
        if(results.length != 1){
          //wrong log in info
          console.log(JSON.stringify(results));
          res.end(JSON.stringify({"status":"good","valid": false}))
          client.close();
          return;
        }
        else{
          console.log(JSON.stringify(results));
          res.end(JSON.stringify({"status":"good", "valid": true}))
          client.close();
          return;
        }
      }
    })
  })
})

router.get("/story", function(req, res){
  console.log("ok");
  let docs = {};
  console.log(req.query.$from);
  console.log(req.query.$count);
  MONGOCLIENT.connect("mongodb://localhost:27017", function(err, client){
    if(err){
      console.log(err);
      res.end(JSON.stringify({"status":"bad"}))
      client.close();
      return;
    }
    db = client.db("Hackathon")
    db.collection("stories").find({}).toArray(function(err,results){
      console.log("past" + results.length);
      if(err){
        console.log(err);
        res.end(JSON.stringify({"status":"bad"}))
        client.close();
        return;
      }
      else {
        let index = 0;
        for(let i = req.query.$from;i < (+req.query.$count + +req.query.$from); i++)
        {
          docs[index]=results[i];
          //console.log(i + " " + (+req.query.$count + +req.query.$from));
          console.log(JSON.stringify(docs));
          index++;
          if(i ==  (+req.query.$count + +req.query.$from) - 1)
          {
            console.log("done");
            res.end(JSON.stringify(docs))
            client.close();
            return;
          }
        }
      }
    })
  })
})
module.exports = router;
