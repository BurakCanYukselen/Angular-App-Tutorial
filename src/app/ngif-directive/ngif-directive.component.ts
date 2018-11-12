import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.scss']
})
export class NgifDirectiveComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  public displayName: boolean = false;
  public displayName2: boolean = false;

  toggle() {
    this.displayName = this.displayName ? false : true;
  }

  toggle2() {
    this.displayName2 = this.displayName2 ? false : true;
  }
}
