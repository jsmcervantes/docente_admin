import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Comentary } from '../comentary';
import { ComentaryService } from '../comentary.service';

@Component({
  selector: 'app-comentary-search',
  templateUrl: './comentary-search.component.html',
})
export class ComentarySearchComponent implements OnInit {

  constructor(
    private comentaryService: ComentaryService
  ) { }

  comentaries: Comentary[] =[];

  @Output() comentaryEmitter = new EventEmitter<Comentary>();

  ngOnInit(): void {
  }

  onInput(term: string):void{
  if(term.length>=1){
    this.comentaryService.findByName(term).subscribe(
      (response) => this.comentaries = response
    )
  }
  if (term.length===0){
    this.comentaries =[];
  }
}

onSelect(comentary: Comentary):void {
  this.comentaryEmitter.emit(comentary);
}
}
