import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./../depedency-injection-service.component.scss']
})
export class EmployeeListComponent implements OnInit {
  constructor(private _employeeService: EmployeeService) { }

  public employees = [];

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}

