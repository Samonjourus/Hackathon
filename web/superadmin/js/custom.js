function logIn(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginInfo = {"username":username, "password":password}
    let xhr = new XMLHttpRequest();
    xhr.onload=function(){ console.log("ok");
    console.log(xhr.response.valid);
      console.log();
      if(JSON.stringify(xhr.response).indexOf("good") != -1){
        window.location.href="/dist"
        console.log("equal");
      }
    }
  xhr.open('POST', "/api/login", true);
  xhr.setRequestHeader("Content-type", "application/json");
  console.log(loginInfo);
  xhr.send(JSON.stringify(loginInfo));
}
