import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-search',
  templateUrl: './categoria-search.component.html',
})
export class CategoriaSearchComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService
  ) { }

  categorias: Categoria[] = [];

  @Output() categoriaEmitter = new EventEmitter<Categoria>();

  ngOnInit(): void {
  }

  onInput(term: string): void {
    if (term.length>=2){
      this.categoriaService.findByNombre(term).subscribe(
        (response) => this.categorias = response
      )
    }
    if (term.length===0){
      this.categorias = [];
    } 
  }




  onSelect(categoria: Categoria): void {
    this.categoriaEmitter.emit(categoria);
  }

}
