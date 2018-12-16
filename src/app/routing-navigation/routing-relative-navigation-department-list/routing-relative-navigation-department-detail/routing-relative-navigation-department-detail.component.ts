import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-relative-navigation-department-detail',
  templateUrl: './routing-relative-navigation-department-detail.component.html',
  styleUrls: ['./routing-relative-navigation-department-detail.component.scss']
})

export class RoutingRelativeNavigationDepartmentDetailComponent implements OnInit {
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
    this._router.navigate(['/parameter-optional-departments', previousId]);
  }

  public goNext() {
    const nextId = this.departmentId + 1;
    this._router.navigate(['/parameter-optional-departments', nextId]);
  }

  public goToDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    this._router.navigate(['../', { id: selectedId }], { relativeTo: this._activatedRoute });
  }
}
