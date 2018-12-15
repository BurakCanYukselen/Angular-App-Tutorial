import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {
  constructor() { }

  @Input('data') public name = '';
  @Output() public childEvent = new EventEmitter();
  ngOnInit() { }

  fireEvent() {
    this.childEvent.emit('Hello app-component from child');
  }
}
