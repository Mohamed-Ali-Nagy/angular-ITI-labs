import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentDerailsComponent } from './department-derails/department-derails.component';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
const routes:Routes=[
    {path:'departmentsList',component:AllDepartmentsComponent},
    {path:'creaDepartment',component:AddDepartmentComponent},
    {path:'departmentDetails',component:DepartmentDerailsComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DepartmentRouting{}