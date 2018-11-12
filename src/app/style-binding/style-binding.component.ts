import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  public hasError: boolean = false;
  public isSpecial: boolean = true;
  public highlightColor: string = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle:"italic",
  }

  constructor() { }


  ngOnInit() {
  }

}
