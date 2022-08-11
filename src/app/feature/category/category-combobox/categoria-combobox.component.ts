import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-combobox',
  templateUrl: './categoria-combobox.component.html',
})
export class CategoriaComboboxComponent implements OnInit {
  constructor(private categoriaService: CategoriaService) {}

  categorias: Categoria[] = [];

  @Output() categoriaIdEmitter = new EventEmitter<number>();
  @Input() categoriaActividadId: number = 0;

  /**
   * findAll
   */
  public findAll(): void {
    this.categoriaService.findAll().subscribe((res) => (this.categorias = res));
  }

  /**
   * onSelect
   */
  public onSelect(id: string) {
    this.categoriaIdEmitter.emit(parseInt(id));
  }

  ngOnInit(): void {
    this.findAll();
  }
}
