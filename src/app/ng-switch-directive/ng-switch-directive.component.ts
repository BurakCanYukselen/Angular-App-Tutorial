import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.scss']
})
export class NgSwitchDirectiveComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  public color: Color = Color.blue;

}

enum Color {
  orange = 1,
  blue = 2,
  pink = 3,
};
