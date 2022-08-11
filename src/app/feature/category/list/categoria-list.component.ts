import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
})
export class CategoriaListComponent implements OnInit {

  constructor(
      private categoriaService: CategoriaService
    ) { }

    categoriaList: Categoria [] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.categoriaService.findAll().subscribe(
      (response) => this.categoriaList = response.filter(el=> !el.archived));
  }

  public findByNombre(term: string): void {
    if (term.length>=2){
      this.categoriaService.findByNombre(term).subscribe(
        (response) => this.categoriaList = response
      )
    }
    if (term.length === 0) this.findAll();
  }

}
