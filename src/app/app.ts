import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog';
import { PokedexComponent } from './components/pokedex/pokedex';

@Component({
  imports: [RouterOutlet, CatalogComponent, PokedexComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('product-lab');
}
