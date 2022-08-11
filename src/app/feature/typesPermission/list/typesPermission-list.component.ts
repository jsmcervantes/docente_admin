import { Component, OnInit } from '@angular/core';
import { TiposPermiso } from '../typesPermission';
import { TiposPermisoService } from '../typesPermissionService';

@Component({
  selector: 'app-tiposPermiso-list',
  templateUrl: './typesPermission-list.component.html',
})
export class TiposPermisoListComponent implements OnInit {

  constructor(
    private tiposPermisoService: TiposPermisoService
  ) { }

  tiposPermisoList: TiposPermiso[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.tiposPermisoService.findAll().subscribe(
      (response) => this.tiposPermisoList  = response
    )
  }


  public findByTiposPermiso(term: string): void{
    if (term.length>=1){
      this.tiposPermisoService.findByTiposPermiso(term).subscribe(
        (response) => this.tiposPermisoList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

  public findByNombre(term: string): void{
    if (term.length>=2){
      this.tiposPermisoService.findByNombre(term).subscribe(
        (response) => this.tiposPermisoList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }
  }


}
