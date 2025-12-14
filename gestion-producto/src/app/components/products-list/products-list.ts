import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductsCard } from '../products-card/products-card';
import { ProductFilter } from '../product-filter/product-filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductsCard, ProductFilter],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productos: Product[] = [];
  productosFiltrados: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.cargarProductos().subscribe(datos => {
      this.productos = datos;
      this.productosFiltrados = datos;
      console.log('Productos recibidos de la API: ', datos);
    });
  }

  buscarProductos(texto: string) {
    if (!texto) {
      this.productosFiltrados = this.productos;
      return;
    }
    
    /**
     * para implementar una búsqueda hoy en día, ésta no ha de ser susceptible a las tildes,
     * de modo que implementamos el siguiente método para quitar las tildes:
     * 
     * 
    */


    const busqueda = this.quitarTildes(texto.toLowerCase());
    
    this.productosFiltrados = this.productos.filter(p => {
      const nombre = this.quitarTildes(p.name.toLowerCase());
      const categoria = this.quitarTildes(p.category.toLowerCase());
      
      return nombre.includes(busqueda) || categoria.includes(busqueda);
    });
  }

  quitarTildes(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}