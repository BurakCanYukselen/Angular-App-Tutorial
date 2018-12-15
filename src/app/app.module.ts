import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeService } from './depedency-injection-service/employee.service';
import { DepedencyInjectionServiceComponent } from './depedency-injection-service/depedency-injection-service.component';
import { EmployeeListComponent } from './depedency-injection-service/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './depedency-injection-service/employee-detail/employee-detail.component';
import { HTTPObservablesComponent } from './HTTP-Observables/HTTP-Observables.component';
import { HTTPService } from './HTTP-Observables/HTTP.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      TestComponent,
      PropertyBindingComponent,
      ClassBindingComponent,
      StyleBindingComponent,
      EventBindingComponent,
      TemplateReferenceVariablesComponent,
      TwoWayBindingComponent,
      NgifDirectiveComponent,
      NgSwitchDirectiveComponent,
      NgForDirectiveComponent,
      ComponentInteractionComponent,
      PipesComponent,
      DepedencyInjectionServiceComponent,
      EmployeeListComponent,
      EmployeeDetailComponent,
      HTTPObservablesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      EmployeeService,
      HTTPService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
