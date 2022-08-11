import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rol } from './roles';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-rol-combobox',
  templateUrl: './rol-combobox.component.html',
})
export class RolComboboxComponent implements OnInit {
  constructor(private rolesService: RolesService) {}

  roles: Rol[] = [];
  @Output() rolesIdEmitter = new EventEmitter<number>();
  @Input() rolesId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void {
    this.rolesService
      .findAll()
      .subscribe((response) => (this.roles = response));
  }

  public onSelect(id: string) {
    this.rolesIdEmitter.emit(parseInt(id)); //revisar ID por si acaso
  }
}
