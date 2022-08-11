import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registro-toolbar',
  templateUrl: './registry-toolbar.component.html',
})
export class RegistroToolbarComponent implements OnInit {

@Input() entityName: string = "";
@Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  public onInput(term: string){
    this.termEmitter.emit(term);
  }

}
