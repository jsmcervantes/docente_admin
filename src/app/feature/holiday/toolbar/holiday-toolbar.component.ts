import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-diaFestivo-toolbar',
  templateUrl: './holiday-toolbar.component.html',
})
export class DiaFestivoToolbarComponent implements OnInit {

  @Input() entityName: string = "";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: string){
    this.termEmitter.emit(term);
  }

}
