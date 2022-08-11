import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Username } from './username';
import { UsernameService } from './username.service';

@Component({
  selector: 'app-username-combobox',
  templateUrl: './username-combobox.component.html'
})
export class UsernameComboboxComponent implements OnInit {

  constructor(
    private usernameService: UsernameService
  ) { }

  usernames: Username[]=[];
  @Output() usernameEmitter = new EventEmitter<number>();
  @Input() usernameId: number =0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.usernameService.findAll().subscribe(
      (respose) => this.usernames = respose
    )
  }

  public onSelect(id:string){
    console.log("El id del usuario es:"  +id)
    this.usernameEmitter.emit(parseInt(id));
  }

}
