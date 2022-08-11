import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../category/categoria.service';
import { DiaFestivo } from '../holiday';
import { DiaFestivoService } from '../holiday.service';

@Component({
  selector: 'app-diaFestivo-form',
  templateUrl: './holiday.form.component.html'
})
export class DiaFestivoFormComponent implements OnInit {

  constructor(
    private diaFestivoService: DiaFestivoService,
    private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  currentEntity: DiaFestivo =
  {
    dayId: 0,
    name: "",
    date: new Date(),
    created: new Date(),
    updated: new Date(),
    archived: false,
    enabled: true,
    fkRoles: 0,
    categorias: []
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.diaFestivoService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          dayId: 0,
          name: "",
          date: new Date(),
          created: new Date(),
          updated: new Date(),
          archived: false,
          enabled: true,
          fkRoles: 0,
          categorias: []
        };
        this.router.navigate(['/layout/diaFestivo-list']);
      }
    )
  }

  findById(id: number):void {
    this.diaFestivoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.categorias.forEach(
          (cate) => {
            this.categoriaService.findById(cate.categoriaActividadId).subscribe(
              (item) => cate.nombre = item.nombre
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.diaFestivoService.deleteById(this.currentEntity.dayId).subscribe(
      () => {
      }
    )
  }

  removeCategoria(id: number) {
    this.currentEntity.categorias = this.currentEntity.categorias.filter(
      (item) => item.categoriaActividadId !== id
    )
  }

}
