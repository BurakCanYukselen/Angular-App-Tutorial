import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  public name: string = "Burak"
  public myId: string = "testId";
  public isDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
