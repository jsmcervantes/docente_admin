import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { PermissionService } from '../../permission/permission.service';
import { Username } from '../username';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-username-form',
  templateUrl: './username.form.component.html',
})
export class UsernameFormComponent implements OnInit {

  constructor(
    private usernameService:UsernameService,
    private activatedRoute: ActivatedRoute,
    private permissionService: PermissionService,
    private router:Router

  ) {}

  currentEntity:Username =
  {
    usernameId:0,
    name:"",
    email:"",
    password:"",
    enabled: true,
    personId:0,
    permissions:[]
  };


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.usernameService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          usernameId:0,
          name:"",
          email:"",
          password:"",
          enabled: true,
          personId:0,
          permissions:[]
        };
        this.router.navigate(['/layout/username-list']);
      }
    )
  }

  findById(id: number):void {
    this.usernameService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.permissions.forEach(
          (permission) => {
            this.permissionService.findById (permission.typePermissionId).subscribe(
              (item) => permission.description = item.description
            )
          }
        )
      }
    )
  }

  deleteById(): void{
    this.usernameService.deleteById(this.currentEntity.usernameId).subscribe(
      () => {
        console.log("borrando");
      }
    )
  }



   removePermission(typePermissionId: number):void {

    this.currentEntity.permissions =
    this.currentEntity.permissions.filter(
      (item) => item.typePermissionId != typePermissionId
    );
  }

  


}
