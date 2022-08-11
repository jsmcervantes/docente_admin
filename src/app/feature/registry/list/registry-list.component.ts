import { Component, OnInit } from '@angular/core';
import { Registro } from '../registry';
import { RegistroService } from '../registry.service';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registry-list.component.html',
})
export class RegistroListComponent implements OnInit {

  constructor(
    private registroService: RegistroService
  ) { }

  registroList: Registro[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.registroService.findaAll().subscribe(
      (response) => this.registroList  = response
    )
  }


  public findByUsuario(term: string): void{
    if (term.length>=1){
      this.registroService.findByUsuario(term).subscribe(
        (response) => this.registroList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }


}
