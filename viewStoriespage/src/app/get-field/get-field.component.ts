import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-get-field',
  templateUrl: './get-field.component.html',
  styleUrls: ['./get-field.component.css']
})
export class GetFieldComponent implements OnInit {
  @Input() RestServerURL;
  @Input() document;
  images =[];
  options = [];
  inputType;
  show = [];
  save = [];
  fields = [];

  constructor(private client:HttpClient) { }

  ngOnInit() {
    //check each field name and add it to 'fields' it if it in the schema's "show" array.
    let host = this;
    for(let index in this.document){
        if(index != "Files"){
          let x = {"key":index,"value":this.document[index], "edit":false}
          this.fields.push(x);
        }
        else{
          let Files = this.document[index];
          if(Files.length != 0)
        for(let filename in Files){
            host.images.push("/web/upload/" + Files[filename])
            console.log("/web/upload/" + Files[filename])
        }
        }
    }
  }
}
