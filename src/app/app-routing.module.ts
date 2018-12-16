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

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'departments', component: RoutingDepartmentListComponent },
  { path: 'employees', component: RoutingEmployeeListComponent },
  { path: 'parameter-departments', component: RoutingParameterDepartmentListComponent },
  { path: 'parameter-departments/:id', component: RoutingParameterDepartmentDetailComponent },
  { path: 'parameter-optional-departments', component: RoutingOptionalParameterDepartmentListComponent },
  { path: 'parameter-optional-departments/:id', component: RoutingOptionalParameterDepartmentDetailComponent },
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
    RoutingPagenotfoundComponent,
  ];
