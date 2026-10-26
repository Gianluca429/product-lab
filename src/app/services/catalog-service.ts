import { Injectable, signal } from '@angular/core';
import { products } from '../components/catalog/initialProducts.data';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  prodotti = signal(products);

  updateProducts() {
    const newProduct = { id: 5, name: 'headset', price: 25 };
    this.prodotti.update((prodotti) => [...prodotti, newProduct]);
  }
}
