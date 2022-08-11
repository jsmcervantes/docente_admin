import { Component, OnInit } from '@angular/core';
import { Permission } from '../permission';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
})
export class PermissionListComponent implements OnInit {

  constructor(
    private permissionService: PermissionService
  ) { }

  permissionList: Permission[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll() : void{
    this.permissionService.findAll().subscribe(
      (response) => this.permissionList = response
    )
  }


  public findByDescription(term: string): void{
    if (term.length>=1){
      this.permissionService.findByDescription(term).subscribe(
        (response) => this.permissionList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

}
