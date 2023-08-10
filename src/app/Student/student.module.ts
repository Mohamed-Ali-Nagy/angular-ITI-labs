import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';



@NgModule({
  declarations: [
  
  
    StudentDetailsComponent,
          AddStudentComponent,
          StudentListComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    StudentDetailsComponent,
    AddStudentComponent,
    StudentListComponent
  ]
})
export class StudentModule { }
