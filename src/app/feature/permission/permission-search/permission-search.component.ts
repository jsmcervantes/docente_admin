import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Permission } from '../permission';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission-search',
  templateUrl: './permission-search.component.html'
})
export class PermissionSearchComponent implements OnInit {

  constructor(
    private permissionService:PermissionService
  ) { }

  permissions: Permission []=[];

  @Output() permissionEmitter = new EventEmitter<Permission>();

  ngOnInit(): void {
  }

  onInput (term : string) : void{
    if (term.length >=2){
      this.permissionService.findByDescription(term).subscribe(
        (response) => this.permissions = response
      )
    }
    if (term.length ===0){
      this.permissions = [];
    }

  }

  onSelect(permission: Permission):void {
    this.permissionEmitter.emit(permission);
  }
}
