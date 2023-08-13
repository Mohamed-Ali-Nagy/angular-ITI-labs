import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { DepartmentDerailsComponent } from './department-derails/department-derails.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentRouting } from './departmentRouting';



@NgModule({
  declarations: [
    AllDepartmentsComponent,
    DepartmentDerailsComponent,
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,FormsModule,DepartmentRouting
  ],
  exports:[
    AllDepartmentsComponent,
    DepartmentDerailsComponent,
    AddDepartmentComponent,
    
  ]
})
export class DepartmentModule { }
