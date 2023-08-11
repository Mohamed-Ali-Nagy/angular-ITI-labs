import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/_Models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
@Output() StudentAdded=new EventEmitter<Student>();
newStudent:Student=new Student(0,"",0);
Save(){
  
  this.StudentAdded.emit(this.newStudent);
}
}
