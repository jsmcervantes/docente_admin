import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RolesService } from '../../role/roles.service';
import { Rol } from '../../role/roles';

@Component({
  selector: 'app-combobox-roles',
  templateUrl: './combobox-roles.component.html',
})
export class ComboboxRolesComponent implements OnInit {

  constructor(
    private rolesService: RolesService
  ) {}

  @Output() rolIdEmitter = new EventEmitter<number>();
  @Input() rolId: number = 0;
  roles: Rol[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
    this.rolesService.findAll().subscribe(
      (response) => this.roles = response
    )
  }

  public onSelect(id: string ){
    console.log("El id de la ciudad es:" + id);
    this.rolIdEmitter.emit(parseInt(id));
  }
}
