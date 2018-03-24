const PROMISE = require("promise");

function savePictures(object){
  return new PROMISE(function(fulfill, reject){
    fulfill(object);
  })
}
function generateName(){
  let date = new Date().toString();
  let name = date+getRandomNumber()
}
function getRandomNumber() {
  return Math.floor(Math.random() * Math.floor(9999999));
}
module.exports = {
savePictures:savePictures
};
