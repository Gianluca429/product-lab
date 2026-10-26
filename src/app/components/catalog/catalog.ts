import { Component } from '@angular/core';
import { CatalogService } from '../../services/catalog-service';

@Component({
  imports: [],
  selector: 'app-catalog',
  styleUrl: './catalog.scss',
  templateUrl: './catalog.html',
})
export class CatalogComponent {
  constructor(public catalogService: CatalogService) {}
}
