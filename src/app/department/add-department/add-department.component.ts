import { Component } from '@angular/core';
import { Department } from 'src/app/_Models/department';
import { DepartmentService } from 'src/app/_Services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  ndept:Department=new Department(0,"",0);
  constructor(public deptser:DepartmentService){

  }
  Save(){
    this.deptser.addDepartment(this.ndept);
  }
}
