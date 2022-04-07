import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() key: any;
  @Input() json: any;
  @Input() parent: any;
  public panelOpenState = false;
  public showInput = false;
  public keyClassName = '';
  // public jsonArray: any = [];


  testForm: FormGroup = this.fb.group({
    firstName: ['']
  });

  constructor(public fb: FormBuilder, public sampleSrv: SampleService) { }

  ngOnInit(): void {
    console.log(this.key);
    console.log(this.json);
    // // let id = 
    
    // console.log("Parent", this.parent);
    // if (this.parent === undefined) {
    //   // this.sampleSrv.jsonArray[this.key] = [];
    //   // this.arrangeItems(this.sampleSrv.jsonArray)
    //   this.keyClassName = this.key;
    // } else {
    //   this.keyClassName = this.key;
    //   // this.arrangeItems(this.sampleSrv.jsonArray[this.parent])
    // }
    
    // console.log("json", this.sampleSrv.jsonArray);

  }

  arrangeItems(json: any) {
    for (let key of Object.keys(json)) {
      console.log("Key", key);
      if (this.parent == key) {
        console.log("In if", this.sampleSrv.jsonArray);
        json[key].push(key);
      }
    }
    return json
  }

  submit() {
    console.log(this.testForm.controls['firstName']);
    console.log("*********");

    this.testForm.controls['firstName'].setValidators(Validators.required);
    console.log(this.testForm.controls['firstName']);
  }

  isObject(val: any): boolean { return typeof val === 'object'; }

  keys(json: any) {
    return Object.keys(json);
  }

  edit() {
    this.showInput = true;
  }

  save(key: any, value: any, json: any) {
    console.log(key);
    console.log(value);
    console.log(json);
  }
}
