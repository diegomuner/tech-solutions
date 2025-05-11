import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CheckoutComponent {
  items: CartItem[] = [];
  name = '';
  address = '';
  orderPlaced = false;

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  placeOrder() {
    this.orderPlaced = true;
    this.cartService.clearCart();
  }
}
