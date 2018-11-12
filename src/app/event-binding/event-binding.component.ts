import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public greeting: string = "";

  constructor() { }

  ngOnInit() { }


  onClick(event) {
    console.log(event);
    if (this.greeting == "") {
      this.greeting = "Welcome Burak Can Yukselen";
    }
    else {
      this.greeting = "";
    }
  }
}
