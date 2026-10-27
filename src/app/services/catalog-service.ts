import { computed, effect, Injectable, signal } from '@angular/core';
import { products } from '../components/catalog/initialProducts.data';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  prodotti = signal(products);
  prodottiTotali = computed(() => this.prodotti().length);
  console: any;

  updateProducts() {
    const newProduct = {
      id: this.prodotti()[this.prodotti().length - 1].id + 1,
      name: 'headset',
      price: 25,
    };
    this.prodotti.update((prodotti) => [...prodotti, newProduct]);
    this.console = effect(() =>
      console.log('Ci sono ' + this.prodottiTotali + ' prodotti in catalogo'),
    );
  }
}
