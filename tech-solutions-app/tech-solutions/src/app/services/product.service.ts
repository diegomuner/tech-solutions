import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse', price: 29.99, image: 'https://via.placeholder.com/150?text=Mouse' },
    { id: 2, name: 'Mechanical Keyboard', description: 'RGB mechanical keyboard', price: 89.99, image: 'https://via.placeholder.com/150?text=Keyboard' },
    { id: 3, name: 'HD Monitor', description: '24-inch Full HD monitor', price: 149.99, image: 'https://via.placeholder.com/150?text=Monitor' },
    { id: 4, name: 'USB-C Hub', description: 'Multiport USB-C hub', price: 49.99, image: 'https://via.placeholder.com/150?text=USB-C+Hub' },
    { id: 5, name: 'Webcam', description: '1080p HD webcam', price: 59.99, image: 'https://via.placeholder.com/150?text=Webcam' },
    { id: 6, name: 'DNI Electrónico', description: 'Documento Nacional de Identidad electrónico. VENTA DE DNIs.', price: 99.99, image: 'assets/dni-demo.png' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
