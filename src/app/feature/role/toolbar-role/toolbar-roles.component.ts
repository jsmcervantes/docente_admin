import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-roles',
  templateUrl: './toolbar-roles.component.html',
})
export class ToolbarRolesComponent implements OnInit {
  @Input() entityName: string = '';
  @Output() termEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * onInput
   */
  public onInput(term: string) {
    this.termEmitter.emit(term);
  }
}
