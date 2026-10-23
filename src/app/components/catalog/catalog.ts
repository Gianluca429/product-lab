import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog-service';

@Component({
  imports: [],
  selector: 'app-catalog',
  styleUrl: './catalog.scss',
  templateUrl: './catalog.html',
})
export class CatalogComponent implements OnInit {
  constructor(private catalogService: CatalogService) {}
  productsToShow: number = 0;
  ngOnInit() {
    this.showProducts();
  }

  showProducts() {
    return (this.productsToShow = this.catalogService.prodotti.length);
  }
}
