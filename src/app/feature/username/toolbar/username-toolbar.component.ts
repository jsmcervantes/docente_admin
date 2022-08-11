import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-username-toolbar',
  templateUrl: './username-toolbar.component.html'
})

export class UsernameToolbarComponent implements OnInit {

  @Input() entityName: string = "";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInput( term :string){
    this.termEmitter.emit(term);
  }

}
