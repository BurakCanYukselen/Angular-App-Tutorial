import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name: string = "Burak";
  public siteUrl = window.location.href;
  
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return `Hello ${this.name}`;
  }

}
