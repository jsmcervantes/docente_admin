import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TiposPermiso } from './typesPermission';
import { TiposPermisoService } from './typesPermissionService';

@Component({
  selector: 'app-tipo-permiso-combobox',
  templateUrl: './typesPermission-combobox.component.html'
})
export class TipoPermisoComboboxComponent implements OnInit {

  constructor(
    private tiposPermisosService: TiposPermisoService
  ) { }

  tiposPermisos: TiposPermiso[] = [];
  @Output() tipoPermisoIdEmitter = new EventEmitter<number>();
  @Input() tipoPermisoId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.tiposPermisosService.findAll().subscribe(
      (respose) => this.tiposPermisos = respose
    )
  }

  public onSelect(id:string){
    console.log("El id del tipo de permiso es:" + id);
    this.tipoPermisoIdEmitter.emit(parseInt(id));
  }

}
