import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission } from '../../permission/permission';
import { PermissionService } from '../../permission/permission.service';
import { TiposPermiso } from '../typesPermission';
import { TiposPermisoService } from '../typesPermissionService';

@Component({
  selector: 'app-tiposPermiso-form',
  templateUrl: './typesPermission.form.component.html',
})
export class TiposPermisoFormComponent implements OnInit {
  constructor(
    private tiposPermisoService: TiposPermisoService,
    private permissionService: PermissionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  currentEntity: TiposPermiso = {
    tiposPermisoId: 0,
    nombre: '',
    fecha: new Date(),
    created: new Date(),
    usernameId: 0,
    enabled: true,
    permissions: [],
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  save(): void {
    console.table(this.currentEntity);
    this.tiposPermisoService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        tiposPermisoId: 0,
        nombre: '',
        fecha: new Date(),
        created: new Date(),
        usernameId: 0,
        enabled: true,
        permissions: [],
      };
      this.router.navigate(['/layout/tiposPermiso-list']);
    });
  }

  findById(id: number): void {
    this.tiposPermisoService.findById(id).subscribe((response: any) => {
      this.currentEntity = response;
      this.currentEntity.permissions.forEach((permis) => {
        this.permissionService
          .findById(permis.permissionId)
          .subscribe((item) => (permis.description = item.description));
      });
    });
  }
  tiposPermisoList: TiposPermiso[] = [];

  deleteById(): void {
    this.tiposPermisoService
      .deleteById(this.currentEntity.tiposPermisoId)
      .subscribe(() => {
        console.log('borrando');
      });
    this.router.navigate(['/layout/tiposPermiso-list']);
  }

  cancelar(): void {
    this.router.navigate(['/layout/tiposPermiso-list']);
  }
  permiso(): void {
    this.router.navigate(['/layout/permission-form']);
  }

  
  removePermission(permissionId:number):void{
    this.currentEntity.permissions =
    this.currentEntity.permissions.filter(
      (item) => item.permissionId != permissionId
    );
  }

}
