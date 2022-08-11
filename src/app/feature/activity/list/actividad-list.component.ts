import { Component, OnInit } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html'
})
export class ActividadListComponent implements OnInit {

  constructor(
    private actividadService: ActividadService
  ) { }

  actividadList: Actividad[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.actividadService.findAll().subscribe(
      (response) => this.actividadList = response
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.actividadService.findByName(term).subscribe(
        (response) => this.actividadList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

}