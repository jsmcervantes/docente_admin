import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaFestivoService } from '../../holiday/holiday.service';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';
@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad.form.component.html',
})
export class ActividadFormComponent implements OnInit {
  constructor(
    private ActividadService: ActividadService,
    private diasFestivosService: DiaFestivoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  currentEntity: Actividad = {
    actividadId: 0,
    nombre: '',
    categoria: '',
    created: new Date(),
    updated: new Date(),
    archivate: false,
    enabled: true,
    categoriaActividadId: 0,
    diasFestivos: [],
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
    this.ActividadService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        actividadId: 0,
        nombre: '',
        categoria: '',
        created: new Date(),
        updated: new Date(),
        archivate: false,
        enabled: true,
        categoriaActividadId: 0,
        diasFestivos: [],
      };
      this.router.navigate(['/layout/actividad-list']);
    });
  }

  findById(id: number): void {
    this.ActividadService.findById(id).subscribe((response) => {
      this.currentEntity = response;
      this.currentEntity.diasFestivos.forEach((element) => {
        this.diasFestivosService
          .findById(element.dayId)
          .subscribe((res) => (element.name = res.name));
      });
    });
  }

  removeDiaFestivo(id: number): void {
    this.currentEntity.diasFestivos = this.currentEntity.diasFestivos.filter(
      (el) => el.dayId != id
    );
  }

  deleteById(): void {
    this.ActividadService.deleteById(this.currentEntity.actividadId).subscribe(
      () => {
        console.log('Borrado');
        //redireccionar ....
      }
    );
  }
}
