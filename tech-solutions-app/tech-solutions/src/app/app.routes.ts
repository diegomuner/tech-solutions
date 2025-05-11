import { Routes } from '@angular/router';

import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { Component } from '@angular/core';

import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  standalone: true,
  template: `<div style="padding:2rem;text-align:center"><h2>Product Details</h2><p>This is a dummy product details page for product ID: {{ id }}</p></div>`
})
export class DummyProductDetailComponent {
  id: string = '';
  constructor() {
    const route = inject(ActivatedRoute);
    this.id = route.snapshot.params['id'];
  }
}

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:id', component: DummyProductDetailComponent },
];
