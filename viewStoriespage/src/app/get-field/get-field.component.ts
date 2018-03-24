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
  options = [];
  inputType;
  show = [];
  save = [];
  fields = [];

  constructor(private client:HttpClient) { }

  ngOnInit() {
    //check each field name and add it to 'fields' it if it in the schema's "show" array.
    for(let index in this.document){
        let x = {"key":index,"value":this.document[index], "edit":false}
        this.fields.push(x);
    }
  }
}
