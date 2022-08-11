import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from '../../activity/actividad';
import { ActividadService } from '../../activity/actividad.service';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria.form.component.html',
})
export class CategoriaFormComponent implements OnInit {
  constructor(
    private CategoriaService: CategoriaService,
    private actividadService: ActividadService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  currentEntity: Categoria = {
    categoriaActividadId: 0,
    nombre: '',
    secuencia: '',
    color: '',
    created: new Date(),
    updated: new Date(),
    enabled: true,
    archived: false,
    rolId: 0,
    actividades: [],
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
    this.CategoriaService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        categoriaActividadId: 0,
        nombre: '',
        secuencia: '',
        color: '',
        created: new Date(),
        updated: new Date(),
        enabled: true,
        archived: true,
        rolId: 0,
        actividades: [],
      };
      this.router.navigate(['/layout/categoria-list']);
    });
  }

  findById(id: number): void {
    this.CategoriaService.findById(id).subscribe((response) => {
      this.currentEntity = response;
      this.currentEntity.actividades.forEach((act) => {
        this.actividadService
          .findById(act.actividadId)
          .subscribe((item) => (act.nombre = item.nombre));
      });
    });
  }

  deleteById(): void {
    this.CategoriaService.deleteById(
      this.currentEntity.categoriaActividadId
    ).subscribe(() => {
      console.log('Borrado');
      //redireccionar ....
    });
  }

  removeActividad(id: number): void {
    this.currentEntity.actividades = this.currentEntity.actividades.filter(
      (item) => item.actividadId != id
    );
  }
}
