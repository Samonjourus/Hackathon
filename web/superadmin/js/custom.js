function logIn(){
    console.log("ok");
      console.log("ok");
        console.log("ok");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginInfo = {"Username":username, "Password":password}
    let xhr = new XMLHttpRequest();
    xhr.onload=function(){ console.log("ok");
      if(JSON.stringify(xhr.response) == JSON.stringify({"status":"good", "valid": true}))
        window.location.href="/viewEntries"
      }
    xhr.open('POST', "/api/login", false);
    xhr.send(loginInfo);
  }