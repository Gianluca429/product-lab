import { Component, OnChanges, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog-service';

@Component({
  imports: [],
  selector: 'app-catalog',
  styleUrl: './catalog.scss',
  templateUrl: './catalog.html',
})
export class CatalogComponent implements OnChanges {
  constructor(private catalogService: CatalogService) {
    this.showProducts();
  }
  productsToShow: number = 0;
  ngOnChanges() {
    this.showProducts();
  }

  showProducts() {
    this.productsToShow = this.catalogService.prodotti.length;
  }
}
