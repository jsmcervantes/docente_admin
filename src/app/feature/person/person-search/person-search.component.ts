import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
})
export class PersonSearchComponent implements OnInit {
  constructor(private personService: PersonService) {}

  persons: Person[] = [];

  @Output() personEmitter = new EventEmitter<Person>();

  onInput(term: string) {
    if (term.length >= 2) {
      this.personService
        .findByName(term)
        .subscribe((res) => (this.persons = res));
    }
    if (term.length === 0) this.persons = [];
  }

  onSelect(person: Person) {
    this.personEmitter.emit(person);
  }
  ngOnInit(): void {}
}
