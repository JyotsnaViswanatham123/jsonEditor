import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Sample';
  public flattenedArray: any = [];
  public json = {
    'one': 'one',
    'two': 'two',
    'three': 'three',
    'four': 'four',
    'five': {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': {
        'a': 'a',
        'b': 'b',
        'c': 'c'
      }
    }
  };  

  ngOnInit() {
    // let arr = [1,[2,3],[4,[5,6]]];
    // this.flatten(arr);
    // console.log(this.flattenedArray);
  }

  keys(json: any) {
    return Object.keys(json);
  }

  // flatten(object: any) {
  //   for (let each of object) {
  //     if(typeof each == 'object') {
  //       this.flatten(each);
  //     } else {
  //       this.flattenedArray.push(each);
  //     }
  //   }
  //   return this.flattenedArray;
  // }

}
