  function upload(file, data){
      let xhr = new XMLHttpRequest();
      xhr.onload=function(){data.Files.push(xhr.response);}
      formData = new FormData();
      console.log(file);
      formData.append('fileupload', file, file.name);
      xhr.open('POST', "/api/imageUpload", false);
      xhr.send(formData);
      console.log("sent");
  }
  function sendData(){
    let data = {"Title":document.getElementById("titleText").value,
            "Description":document.getElementById("descriptionText").value,
            "Location":document.getElementById("locationText").value,
            "Files":[]
           }
    if(document.getElementById("fileInput").value != "")
      {
        let Files = [];
        console.log();
        for(let i = 0; i < document.getElementById("fileInput").files.length; i++){
          upload(document.getElementById("fileInput").files[i], data)

/*
          let file = document.getElementById("fileInput").files[i];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(srcData){
            let imageClient = new XMLHttpRequest();
            imageClient.open("POST", "http://127.0.0.1/api/imageUpload", true);
            imageClient.setRequestHeader("Content-type", "application/octet-stream");
            //console.log(srcData.target.result.substring(srcData.target.result.indexOf(",")+1));
            console.log(srcData.target.result.substring(srcData.target.result.indexOf(",")+1));
            imageClient.send(srcData.target.result.substring(srcData.target.result.indexOf(",")+1))
          }*/
        }
        //console.log(Files);
        //data.Files = Files;
        console.log(data);
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
      window.location.href="/share/story";
    })
    console.log(data);
    client.send(JSON.stringify(data));
  }
