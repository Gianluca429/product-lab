import { Component } from '@angular/core';
import { CatalogService } from '../../services/catalog-service';

@Component({
  imports: [],
  selector: 'app-catalog',
  styleUrl: './catalog.scss',
  templateUrl: './catalog.html',
})
export class CatalogComponent {
  constructor(private catalogService: CatalogService) {
    this.showProducts();
  }
  productsToShow: number = 0;

  showProducts() {
    this.productsToShow = this.catalogService.prodotti.length;
  }
}
