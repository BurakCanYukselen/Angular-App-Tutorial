import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingDepartmentListComponent } from './routing-navigation/routing-department-list/routing-department-list.component';
import { RoutingEmployeeListComponent } from './routing-navigation/routing-employee-list/routing-employee-list.component';
import { RoutingPagenotfoundComponent } from './routing-navigation/routing-pagenotfound/routing-pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'departments', component: RoutingDepartmentListComponent },
  { path: 'employees', component: RoutingEmployeeListComponent },
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
    RoutingPagenotfoundComponent,
  ];
