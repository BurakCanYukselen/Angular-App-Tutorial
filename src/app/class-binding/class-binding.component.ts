import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styles: [
    `
    .text-success{
        text-decoration:underline;
    }

    .text-danger{
      text-decoration: line-through;
    }

    .text-special{
      font-style:italic;
    }
    `
  ]
})
export class ClassBindingComponent implements OnInit {

  public successClass: string = "text-success";
  public dangerClass: string = "text-danger";
  public specialClass: string = "text-special";

  public hasError: boolean = false;
  public isSpecial: boolean = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }

  constructor() { }

  ngOnInit() {
  }
  

}
