import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-routing-parameter-department-list',
  templateUrl: './routing-parameter-department-list.component.html',
  styleUrls: ['./routing-parameter-department-list.component.scss']
})
export class RoutingParameterDepartmentListComponent implements OnInit {
  constructor(private _router: Router) { }

  public departments = [
    { 'id': 1, 'name': 'Angular' },
    { 'id': 2, 'name': 'Node' },
    { 'id': 3, 'name': 'MongoDB' },
    { 'id': 4, 'name': 'Ruby' },
    { 'id': 5, 'name': 'Bootstrap' },
  ];

  ngOnInit() { }

  public onSelect(_department: { id: any; }) {
    this._router.navigate(['/parameter-departments', _department.id]);
  }
}
