import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product{
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;

}

@Injectable({
  providedIn: 'root',
})
export class ProductService { //<--cambiamos a ProductService
  private url = 'https://mocki.io/v1/d1b6ae6d-5038-4dad-a721-e718f4e2b27e'

  constructor (private http: HttpClient){  //<--importamos HttpClient

  }

  cargarProductos(){
    return this.http.get<Product[]>(this.url)  //<--para cargar los productos
  }

}

