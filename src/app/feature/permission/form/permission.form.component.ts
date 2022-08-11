import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentary } from '../../comentary/comentary';
import { ComentaryService } from '../../comentary/comentary.service';
import { Permission } from '../permission';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission.form.component.html'

})
export class PermissionFormComponent implements OnInit {

  constructor(
    private permissionService: PermissionService,
    private comentaryService: ComentaryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


currentEntity: Permission =
  {
    permissionId: 0,
    namePermission:0,
    description:"",
    dateSince: new Date(),
    dateUntil: new Date(),
    tipoPermisoId: 0,
    enabled: true,
    comentaries:[]
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
    this.permissionService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          permissionId: 0,
          namePermission:0,
          description:"",
          dateSince: new Date(),
          dateUntil: new Date(),
          tipoPermisoId: 0,
          enabled: true,
          comentaries:[]
        };
        this.router.navigate(['/layout/permission-list']);
      }
    )
  }

  findById(id: number):void {
    this.permissionService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.comentaries.forEach(
          (coment) => {
            this.comentaryService.findById(coment.id).subscribe(
              (item) => coment.name = item.name
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.permissionService.deleteById(this.currentEntity.permissionId).subscribe(
      () => {
        console.log("Borrado");
      }
    )
  }

  removeComentary(id:number):void{
    this.currentEntity.comentaries =
    this.currentEntity.comentaries.filter(
      (item) => item.id != id
    );
  }

  addComentaries(comentary: Comentary){
    this.currentEntity.comentaries.push(comentary);
  }

}
