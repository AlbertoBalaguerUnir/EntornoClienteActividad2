import { Component, Input } from '@angular/core';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-card.html',
  styleUrl: './products-card.css',
})

export class ProductsCard {
  @Input() product!: Product;
  
}
