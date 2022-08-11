import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categoria-toolbar',
  templateUrl: './categoria-toolbar.component.html',
})
export class CategoriaToolbarComponent implements OnInit {

  @Input() entityName: string = "";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: string){
    this.termEmitter.emit(term);
  }
}
