import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingDepartmentListComponent } from './routing-navigation/routing-department-list/routing-department-list.component';
import { RoutingEmployeeListComponent } from './routing-navigation/routing-employee-list/routing-employee-list.component';

const routes: Routes = [
  { path: 'departments', component: RoutingDepartmentListComponent },
  { path: 'employees', component: RoutingEmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [RoutingDepartmentListComponent, RoutingEmployeeListComponent];
