import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-parameter-department-detail',
  templateUrl: './routing-parameter-department-detail.component.html',
  styleUrls: ['./routing-parameter-department-detail.component.scss']
})
export class RoutingParameterDepartmentDetailComponent implements OnInit {
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  public departmentId: any;

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  public goPrevious() {
    const previousId = this.departmentId - 1;
    this._router.navigate(['/parameter-departments', previousId]);
  }

  public goNext() {
    const nextId = this.departmentId + 1;
    this._router.navigate(['/parameter-departments', nextId]);
  }
}
