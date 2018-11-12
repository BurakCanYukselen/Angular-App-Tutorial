import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-depedency-injection-service',
  templateUrl: './depedency-injection-service.component.html',
  styleUrls: ['./depedency-injection-service.component.scss']
})
export class DepedencyInjectionServiceComponent implements OnInit {
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  public employees = [];
}
