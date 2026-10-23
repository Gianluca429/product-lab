import { Injectable } from '@angular/core';
import { products } from '../components/catalog/initial-data.data';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  prodotti = products;
}
