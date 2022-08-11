import { Component, OnInit } from '@angular/core';
import { Rol } from '../roles';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
})
export class RolesListComponent implements OnInit {
  constructor(private rolesService: RolesService) {}

  rolesList: Rol[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.rolesService.findAll().subscribe((res) => {
      this.rolesList = res.filter(el => !el.archived);
      console.log(res);
    });
  }

  /**
   * findByName
   */
  public findByName(term: string): void {
    if (term.length >= 2) {
      this.rolesService
        .findByName(term)
        .subscribe((res) => (this.rolesList = res));
    }
    if (term.length === 0) {
      this.findAll();
    }
  }
}
