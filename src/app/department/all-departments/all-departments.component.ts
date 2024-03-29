import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_Models/department';
import { DepartmentService } from 'src/app/_Services/department.service';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.css']
})
export class AllDepartmentsComponent implements OnInit{
  departments:Department[]=[];
  detailsId:number=0;
  constructor(public deptService:DepartmentService){}
  ngOnInit(): void {
    this.departments=this.deptService.getAllDepartments();
  }

  showDetails(id:number){
    this.detailsId=id;
  }
  deleteDepartment(id:number){
    if(confirm("Are you sure?")){
      for(let i=0 ;i<this.departments.length;i++){
        if(id==this.departments[i].id){
          this.departments.splice(i,1);
        }
      }
    }
  }



}
