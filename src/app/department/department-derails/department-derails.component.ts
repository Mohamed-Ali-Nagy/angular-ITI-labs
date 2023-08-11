import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Department } from 'src/app/_Models/department';
import { DepartmentService } from 'src/app/_Services/department.service';

@Component({
  selector: 'app-department-derails',
  templateUrl: './department-derails.component.html',
  styleUrls: ['./department-derails.component.css']
})
export class DepartmentDerailsComponent implements OnChanges{
  @Input() deptId:number=0;
  department:Department|null=null;
  constructor(public deptService:DepartmentService){}
  ngOnChanges(): void {
    this.department=this.deptService.getDepartmentById(this.deptId);
  }


}
