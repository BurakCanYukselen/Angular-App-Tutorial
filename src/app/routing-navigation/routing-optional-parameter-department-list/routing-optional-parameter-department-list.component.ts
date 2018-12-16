import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-optional-parameter-department-list',
  templateUrl: './routing-optional-parameter-department-list.component.html',
  styleUrls: ['./routing-optional-parameter-department-list.component.scss']
})
export class RoutingOptionalParameterDepartmentListComponent implements OnInit {
  constructor(private _router: Router, private _activetedRoute: ActivatedRoute) { }

  public selectedId: any;
  public departments = [
    { 'id': 1, 'name': 'Angular' },
    { 'id': 2, 'name': 'Node' },
    { 'id': 3, 'name': 'MongoDB' },
    { 'id': 4, 'name': 'Ruby' },
    { 'id': 5, 'name': 'Bootstrap' },
  ];

  ngOnInit() {
    this._activetedRoute.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      this.selectedId = parseInt(params.get('id'));
    });
  }

  public onSelect(_department: { id: any; }) {
    this._router.navigate(['/parameter-optional-departments', _department.id]);
  }

  public isSelected(_department) {
    return _department.id === this.selectedId;
  }
}
