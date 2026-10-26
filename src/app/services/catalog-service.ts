import { Injectable, signal } from '@angular/core';
import { products } from '../components/catalog/initialProducts.data';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  prodotti = signal(products);
}
