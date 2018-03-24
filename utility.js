const PROMISE = require("promise");

function savePictures(object){
  return new PROMISE(function(fulfill, reject){
    generateName();
    if(object.Files.length != 0)
      console.log("not empty");
    else
      console.log("empty");
    fulfill(object);
  })
}
function generateName(){
  let date = new Date();
  return date.getFullYear().toString()+date.getMonth()+date.getDate()+date.getTime()+getRandomNumber()
}
function getRandomNumber() {
  return Math.floor(Math.random() * Math.floor(9999999));
}
module.exports = {
savePictures:savePictures
};
