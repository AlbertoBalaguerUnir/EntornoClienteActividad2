import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductService,Product } from './services/product';
import { ProductsList } from './components/products-list/products-list';

import { ProductFormComponent } from './components/product-form/product-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductsList, ProductFormComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-producto');

  
  //el método subscribe es el que nos va a permitir importar todo
  constructor (private productService : ProductService){
    this.productService.cargarProductos().subscribe(  
      (datos :Product[]) => {
        console.log('Productos cargados de la API : ' ,datos)
      }  
    )  
  }
  
  onProductoCreado(producto : any){
    console.log('Producto recibido: ',producto)
  }

}
