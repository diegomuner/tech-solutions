import { Component } from '@angular/core';

import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductListComponent {
  products: Product[] = [];
  categories: string[] = ['All', 'Accessories', 'Keyboards', 'Monitors', 'Webcams'];
  selectedCategory: string = 'All';

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    // Dummy filter: just filter by name containing category for demo
    return this.products.filter(p => p.name.toLowerCase().includes(this.selectedCategory.toLowerCase()));
  }
}
