import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tiposPermiso-toolbar',
  templateUrl: './tiposPermiso-toolbar.component.html',
})
export class TiposPermisoToolbarComponent implements OnInit {

  @Input() entityName: string="";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  public onInput (term: string){
    this.termEmitter.emit(term);
  }

}
