import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  public name: string = "Burak";
  public message: string = "welcome burak";
  public person = {
    "firstName": "Burak Can",
    "lastName": "Yukselen"
  }
  public date = new Date();
}
