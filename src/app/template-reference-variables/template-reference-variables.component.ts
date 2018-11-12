import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.scss']
})
export class TemplateReferenceVariablesComponent implements OnInit {

  public name: string = "Burak";


  constructor() { }

  ngOnInit() { }


  logMessage(value: string) {
    console.log(value);
  }
}
