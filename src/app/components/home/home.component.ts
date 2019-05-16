import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: string[];
  modeledVal: string;

  constructor() { 
    this.items = ["test1", "test2"];
  }

  ngOnInit() {
  }

  add(val: string) {
    if (!val || val.length == 0) {
      return;
    }
    
    this.items.push(val);
  }

  addModeledVal() {
    this.add(this.modeledVal);
  }

  changeModeledVal() {
    this.modeledVal = 'And now for something completely different';
  }

  isNumber(val: string): boolean {
    return val && !isNaN(Number(val));
  }

}
