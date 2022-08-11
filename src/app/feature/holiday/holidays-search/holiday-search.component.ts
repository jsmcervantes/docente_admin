import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiaFestivo } from '../holiday';
import { DiaFestivoService } from '../holiday.service';

@Component({
  selector: 'app-dia-festivo-search',
  templateUrl: './holiday-search.component.html',
})
export class DiaFestivoSearchComponent implements OnInit {
  constructor(private diasFestivosService: DiaFestivoService) {}

  diasFestivos: DiaFestivo[] = [];

  @Output() diaFestivoEmitter = new EventEmitter<DiaFestivo>();

  onInput(term: string) {
    if (term.length >= 2) {
      this.diasFestivosService
        .findByName(term)
        .subscribe((res) => (this.diasFestivos = res));
    }
    if (term.length === 0) this.diasFestivos = [];
  }

  onSelect(diaFestivo: DiaFestivo) {
    this.diaFestivoEmitter.emit(diaFestivo);
  }

  ngOnInit(): void {}
}
