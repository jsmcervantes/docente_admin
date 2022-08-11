import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../person/person.service';
import { Rol } from '../roles';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
})
export class RolesComponent implements OnInit {
  constructor(
    private rolesService: RolesService,
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  initialForm: Rol = {
    rolId: 0,
    name: '',
    admin: false,
    created: new Date(),
    updated: new Date(),
    enabled: false,
    archived: false,
    categoriaActividadId: 0,
    persons: [],
  };

  form: Rol = this.initialForm;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  save(): void {
    console.log(this.form);
    this.rolesService.save(this.form).subscribe(() => {
      this.router.navigate(['/layout/roles-list']);
    });
  }

  findById(id: number): void {
    this.rolesService.findById(id).subscribe((res) => {
      this.form = res;
      this.form.persons.forEach((el) => {
        this.personService
          .findById(el.id)
          .subscribe((res) => (el.name = res.name));
      });
    });
  }

  removePerson(id: number): void {
    this.form.persons = this.form.persons.filter((el) => el.id != id);
  }
  deleteById(): void {
    this.rolesService.deleteById(this.form.rolId).subscribe(() => {
      console.log('Borrado');
    });
  }
}
