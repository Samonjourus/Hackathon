const MONGOCLIENT = require('mongodb').MongoClient;
const EXPRESS = require('express');

var router = EXPRESS.Router();

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
//allows a user to log in to access superuser-only information
router.post("/login", function(req,res,next){
  loginInfo = {"username":req.body.username,"password":req.body.password};
  MONGOCLIENT.connect("mongodb://localhost:27017", function(err, client){
    if(err){
      console.log(err);
      res.end(JSON.stringify({"status":"bad"}))
      client.close();
      return;
    }
    db = client.db("Hackathon")
    db.collection("superusers").findOne(loginInfo, function(err,result){
      if(err){
        console.log(err);
        res.end(JSON.stringify({"status":"bad"}))
        client.close();
        return;
      }
      else {
        if(result == null){
          //wrong log in info
          console.log(JSON.stringify(result));
          res.end(JSON.stringify({"status":"good","valid": false}))
          client.close();
          return;
        }
        else{
          console.log(JSON.stringify(result));
          res.end(JSON.stringify({"status":"good", "valid": true}))
          client.close();
          return;
        }
      }
    })
  })
})

module.exports = router;
