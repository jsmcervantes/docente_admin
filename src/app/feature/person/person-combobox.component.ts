import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-combobox',
  templateUrl: './person-combobox.component.html'
})
export class PersonComboboxComponent implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  persons: Person[]=[];
  @Output() personIdEmitter = new EventEmitter<number>();
  @Input() personId:number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.personService.findAll().subscribe(
      (respose) => this.persons = respose
    )
  }

  public onSelect(id:string){
    this.personIdEmitter.emit( parseInt(id) );
  }


}
