import { Component, OnInit, Input, ChangeDetectorRef, ViewChildren} from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() document;
  queryDocuments = [];
  documentsPerAPage = 1;
  fields=[];
  ready = false;
  from = 0;
  userDocument = {};
  RestServerURL = "http://127.0.0.1";
  nextDisabled = false;
  previousDisabled = true;

  constructor(private client:HttpClient) { }

  ngOnInit() {
    this.query()
  }

  query(){
    let host = this;
    let query = "";
    host.queryDocuments.length = 0;
    host.client.get(host.RestServerURL+"/api/story"+"?"+query+"$count="+host.documentsPerAPage+"&$from="+host.from).subscribe(function(data){
      console.log(data)
      if(data["status"] != "no results")
        for(let index in data){
          host.queryDocuments.push(data[index])
          console.log(data[index])
        }
      else{
        host.nextDisabled = true;
        console.log("none")
      }
      host.ready=true;
      console.log(host.queryDocuments)
    })
  }
  clear(value){
    this.from = 0;
    console.log(value)
    this.documentsPerAPage=parseInt(value);
    console.log(this.documentsPerAPage)
    this.previousDisabled = true;
    this.query();
  }
  previousSet(){
    if(this.from-this.documentsPerAPage >=0)
      this.from = this.from - this.documentsPerAPage;
    console.log(this.from)
    console.log(this.documentsPerAPage)
    this.query();
      this.nextDisabled = false;
    if(this.from == 0)
      this.previousDisabled = true;
  }
  nextSet(){
    console.log("length = " + this.queryDocuments.length)
    if(this.queryDocuments.length ==0)
      return;
    console.log(this.from)
    this.documentsPerAPage=this.documentsPerAPage*1
    this.from = this.from + this.documentsPerAPage;
    if(this.from >0)
      this.previousDisabled = false;
    console.log(this.documentsPerAPage)
    this.query();
  }
}
