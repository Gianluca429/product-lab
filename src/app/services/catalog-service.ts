import { Injectable, signal } from '@angular/core';
import { products } from '../components/catalog/initial-data.data';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  prodotti = signal(products);
}
