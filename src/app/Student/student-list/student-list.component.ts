import { Component } from '@angular/core';
import { Student } from 'src/app/_Models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
   Students:Student[]=[
    new Student(1,"ali",22),
    new Student(2,"Mohamed",44),
    new Student(3,"Nagy",33),
    new Student(4,"Ahmed",66),
    new Student(5,"mona",55),
   ];
   lstd:Student=new Student(0,"",0);
   showDetails(id:number){
      for(let i=0 ;i<this.Students.length;i++)
      {
          if(id==this.Students[i].id){
            this.lstd=this.Students[i];
          }
      }

   }

   AddStudent(std:Student){
    this.Students.push(std);
   }
   Delete(id:number){
    if(confirm("Are you sure?")==true){
      for(let i=0 ;i<this.Students.length;i++)
      {
          if(id==this.Students[i].id){
            this.Students.splice(i,1);
          }
      }
    }

   }

}
