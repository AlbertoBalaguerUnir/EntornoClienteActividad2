import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  templateUrl: './product-filter.html'
})
export class ProductFilter {
  @Output() buscarProducto = new EventEmitter<string>();

  buscar(event: any) {
    this.buscarProducto.emit(event.target.value);
  }
}