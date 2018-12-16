import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingDepartmentListComponent } from './routing-navigation/routing-department-list/routing-department-list.component';
import { RoutingEmployeeListComponent } from './routing-navigation/routing-employee-list/routing-employee-list.component';
import { RoutingPagenotfoundComponent } from './routing-navigation/routing-pagenotfound/routing-pagenotfound.component';
// tslint:disable-next-line:max-line-length
import { RoutingParameterDepartmentListComponent } from './routing-navigation/routing-parameter-department-list/routing-parameter-department-list.component';
// tslint:disable-next-line:max-line-length
import { RoutingParameterDepartmentDetailComponent } from './routing-navigation/routing-parameter-department-list/routing-parameter-department-detail/routing-parameter-department-detail.component';
// tslint:disable-next-line:max-line-length
import { RoutingOptionalParameterDepartmentListComponent } from './routing-navigation/routing-optional-parameter-department-list/routing-optional-parameter-department-list.component';
// tslint:disable-next-line:max-line-length
import { RoutingOptionalParameterDepartmentDetailComponent } from './routing-navigation/routing-optional-parameter-department-list/routing-optional-parameter-department-detail/routing-optional-parameter-department-detail.component';
// tslint:disable-next-line:max-line-length
import { RoutingRelativeNavigationDepartmentDetailComponent } from './routing-navigation/routing-relative-navigation-department-list/routing-relative-navigation-department-detail/routing-relative-navigation-department-detail.component';
// tslint:disable-next-line:max-line-length
import { RoutingRelativeNavigationDepartmentListComponent } from './routing-navigation/routing-relative-navigation-department-list/routing-relative-navigation-department-list.component';
// tslint:disable-next-line:max-line-length
import { RoutingChildRoutesDepartmentListComponent } from './routing-navigation/routing-child-routes-department-list/routing-child-routes-department-list.component';
// tslint:disable-next-line:max-line-length
import { RoutingChildRoutesDepartmentDetailComponent } from './routing-navigation/routing-child-routes-department-list/routing-child-routes-department-detail/routing-child-routes-department-detail.component';
// tslint:disable-next-line:max-line-length
import { RoutingChildRoutesDepartmentOverviewComponent } from './routing-navigation/routing-child-routes-department-list/routing-child-routes-department-overview/routing-child-routes-department-overview.component';
// tslint:disable-next-line:max-line-length
import { RoutingChildRoutesDepartmentContactComponent } from './routing-navigation/routing-child-routes-department-list/routing-child-routes-department-contact/routing-child-routes-department-contact.component';
// tslint:disable-next-line:max-line-length

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'departments', component: RoutingDepartmentListComponent },
  { path: 'employees', component: RoutingEmployeeListComponent },
  { path: 'parameter-departments', component: RoutingParameterDepartmentListComponent },
  { path: 'parameter-departments/:id', component: RoutingParameterDepartmentDetailComponent },
  { path: 'parameter-optional-departments', component: RoutingOptionalParameterDepartmentListComponent },
  { path: 'parameter-optional-departments/:id', component: RoutingOptionalParameterDepartmentDetailComponent },
  { path: 'relative-navigation-departments', component: RoutingRelativeNavigationDepartmentListComponent },
  { path: 'relative-navigation-departments/:id', component: RoutingRelativeNavigationDepartmentDetailComponent },
  { path: 'child-routes-departments', component: RoutingChildRoutesDepartmentListComponent },
  {
    path: 'child-routes-departments/:id',
    component: RoutingChildRoutesDepartmentDetailComponent,
    children: [
      { path: 'overview', component: RoutingChildRoutesDepartmentOverviewComponent },
      { path: 'contact', component: RoutingChildRoutesDepartmentContactComponent },
    ]
  },
  { path: '**', component: RoutingPagenotfoundComponent } // must be at bottom
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents =
  [
    RoutingDepartmentListComponent,
    RoutingEmployeeListComponent,
    RoutingParameterDepartmentListComponent,
    RoutingParameterDepartmentDetailComponent,
    RoutingOptionalParameterDepartmentListComponent,
    RoutingOptionalParameterDepartmentDetailComponent,
    RoutingRelativeNavigationDepartmentListComponent,
    RoutingRelativeNavigationDepartmentDetailComponent,
    RoutingChildRoutesDepartmentListComponent,
    RoutingChildRoutesDepartmentDetailComponent,
    RoutingChildRoutesDepartmentOverviewComponent,
    RoutingChildRoutesDepartmentContactComponent,
    RoutingPagenotfoundComponent,
  ];
