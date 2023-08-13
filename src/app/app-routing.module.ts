import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StudentListComponent } from './student/student-list/student-list.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'student',component:StudentListComponent},
  {path: 'department',loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)},
  {path:"",redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
