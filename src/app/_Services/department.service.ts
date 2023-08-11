import { Injectable } from '@angular/core';
import { Department } from '../_Models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  constructor() { }
  departmentList:Department[]=[
    new Department(1,".Net",23),
    new Department(2,"MERN",34),
    new Department(3,"HR",23),

  ];
  getAllDepartments():any{
     return this.departmentList;
  }
  getDepartmentById(id:number):Department|null{

    for(let i=0;i<this.departmentList.length;i++){
      if(id==this.departmentList[i].id){
        return this.departmentList[i];
      }
    
    }
    return null;

  }

  deleteDepartment(id:number){
    for(let i=0;i<this.departmentList.length;i++){
      if(id==this.departmentList[i].id){
        this.departmentList.splice(i,1);
      }
    
    }
  }
   addDepartment(newDept:Department){
    this.departmentList.push(newDept);
   }

}
