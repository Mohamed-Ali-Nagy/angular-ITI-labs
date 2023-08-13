import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/_Models/department';
import { DepartmentService } from 'src/app/_Services/department.service';

@Component({
  selector: 'app-department-derails',
  templateUrl: './department-derails.component.html',
  styleUrls: ['./department-derails.component.css']
})
export class DepartmentDerailsComponent implements OnInit{
  deptId:number=0;
  department:Department|null=null;
  constructor(public deptService:DepartmentService,public ar:ActivatedRoute){}
  ngOnInit(): void {
    this.deptId=this.ar.snapshot.params['id'];
    this.department=this.deptService.getDepartmentById(this.deptId);
  }

  
}
