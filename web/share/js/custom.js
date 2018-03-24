function sendData(){
    data = {"Title":document.getElementById("titleText").value,
            "Description":document.getElementById("descriptionText").value,
            "Location":document.getElementById("locationText").value
           }
    if(document.getElementById("fileInput").value != "")
      {
        console.log();
        for(let i = 0; i < document.getElementById("fileInput").files.length; i++){
          let file = document.getElementById("fileInput").files[i];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(data){
            data.files.push(data.target.result)
          }
        }
      }

    let tags = [];
    if(document.getElementById("domesticViolenceCheckBox").checked == true)
      tags.push(document.getElementById("domesticViolenceCheckBox").value);
    if(document.getElementById("sexualAssaultCheckBox").checked == true)
      tags.push(document.getElementById("sexualAssaultCheckBox").value);
    if(document.getElementById("childAbuseCheckBox").checked == true)
      tags.push(document.getElementById("childAbuseCheckBox").value);
    data.tags=tags;
    let client = new XMLHttpRequest();
    client.open("POST", "http://127.0.0.1/api/story", true);
    client.setRequestHeader("Content-type", "application/json");
    client.addEventListener("load", function() {
      console.log("ok");
      let newPageClient = new XMLHttpRequest();
      newPageClient.open("Get", "http://127.0.0.1/share/story")
      newPageClient.send();
      //window.location.href="/share/story";
    })
    client.send(JSON.stringify(data));
  }