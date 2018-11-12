import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  @Input('data') public name: string = "";
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit("Hello app-component from child");
  }
}
