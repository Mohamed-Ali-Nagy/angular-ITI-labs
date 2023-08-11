import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { CreatDepartmentComponent } from './creat-department/creat-department.component';
import { DepartmentDerailsComponent } from './department-derails/department-derails.component';



@NgModule({
  declarations: [
    AllDepartmentsComponent,
    CreatDepartmentComponent,
    DepartmentDerailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllDepartmentsComponent,
    CreatDepartmentComponent,
    DepartmentDerailsComponent
  ]
})
export class DepartmentModule { }
