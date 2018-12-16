import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-routing-child-routes-department-list',
  templateUrl: './routing-child-routes-department-list.component.html',
  styleUrls: ['./routing-child-routes-department-list.component.scss']
})
export class RoutingChildRoutesDepartmentListComponent implements OnInit {
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
    this._router.navigate([_department.id], { relativeTo: this._activetedRoute });
  }

  public isSelected(_department) {
    return _department.id === this.selectedId;
  }
}
