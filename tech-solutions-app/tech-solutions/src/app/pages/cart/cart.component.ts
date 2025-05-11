import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
  items: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.items = this.cartService.getItems();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.items = this.cartService.getItems();
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}
