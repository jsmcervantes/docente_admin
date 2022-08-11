import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actividad-toolbar',
  templateUrl: './actividad-toolbar.component.html',
})
export class ActividadToolbarComponent implements OnInit {
  @Input() entityName: string = '';
  @Output() termEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public onInput(term: string) {
    this.termEmitter.emit(term);
  }
}
