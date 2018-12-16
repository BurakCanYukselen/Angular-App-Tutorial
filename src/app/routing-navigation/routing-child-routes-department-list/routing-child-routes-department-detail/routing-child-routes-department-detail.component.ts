import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-child-routes-department-detail',
  templateUrl: './routing-child-routes-department-detail.component.html',
  styleUrls: ['./routing-child-routes-department-detail.component.scss']
})

export class RoutingChildRoutesDepartmentDetailComponent implements OnInit {
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  public departmentId: any;

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      this.departmentId = parseInt(params.get('id'));
    });
  }

  public goPrevious() {
    const previousId = this.departmentId - 1;
    this._router.navigate(['/child-routes-departments', previousId]);
  }

  public goNext() {
    const nextId = this.departmentId + 1;
    this._router.navigate(['/child-routes-departments', nextId]);
  }

  public goToDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    this._router.navigate(['../', { id: selectedId }], { relativeTo: this._activatedRoute });
  }

  public showOverview() {
    this._router.navigate(['overview'], { relativeTo: this._activatedRoute });
  }

  public showContact() {
    this._router.navigate(['contact'], { relativeTo: this._activatedRoute });
  }
}
