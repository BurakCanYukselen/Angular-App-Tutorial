import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-parameter-department-detail',
  templateUrl: './routing-parameter-department-detail.component.html',
  styleUrls: ['./routing-parameter-department-detail.component.scss']
})
export class RoutingParameterDepartmentDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute) { }

  public departmentId: any;

  ngOnInit() {
    // tslint:disable-next-line:radix
    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
