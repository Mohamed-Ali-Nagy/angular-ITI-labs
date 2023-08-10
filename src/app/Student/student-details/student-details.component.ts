import { Component, Input } from '@angular/core';
import { Student } from 'src/app/_Models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

@Input() std:Student=new Student(0,"",0);

}
