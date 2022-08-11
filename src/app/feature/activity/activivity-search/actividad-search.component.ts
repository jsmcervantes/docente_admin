import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-actividad-search',
  templateUrl: './actividad-search.component.html',
})
export class ActividadSearchComponent implements OnInit {

  constructor(
    private actividadService: ActividadService
  ) { }

  actividades: Actividad[] = [];

  @Output() actividadEmitter = new EventEmitter<Actividad>();

  ngOnInit(): void {
  }

  onInput(term: string): void {
    if (term.length>=2){
      this.actividadService.findByName(term).subscribe(
        (response) => this.actividades = response
      )
    }
    if (term.length===0){
      this.actividades = [];
    } 
  }




  onSelect(actividad: Actividad): void {
    this.actividadEmitter.emit(actividad);
  }

}
