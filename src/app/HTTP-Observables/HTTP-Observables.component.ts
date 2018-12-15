import { Component, OnInit } from '@angular/core';
import { HTTPService } from './HTTP.service';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-http-observables',
  templateUrl: './HTTP-Observables.component.html',
  styleUrls: ['./HTTP-Observables.component.scss']
})
export class HTTPObservablesComponent implements OnInit {
  constructor(private _httpService: HTTPService) { }

  public employees: IEmployee[];

  ngOnInit() {
    this.setEmployeesFromJson();
  }

  setEmployees() {
    this._httpService.getEmployees()
      .subscribe(data => this.employees = data);
  }

  setEmployeesFromJson() {
    this.employees = this._httpService.getEmployeesJson();
  }
}
