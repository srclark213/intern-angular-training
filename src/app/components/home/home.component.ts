import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: string[];

  constructor() { 
    this.items = ["test1", "test2"];
  }

  ngOnInit() {
  }

  add(val: string) {
    this.items.push(val);
  }
}
