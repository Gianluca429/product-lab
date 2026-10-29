import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  imports: [],
  selector: 'app-pokedex',
  styleUrl: './pokedex.scss',
  templateUrl: './pokedex.html',
})
export class PokedexComponent {
  constructor(public pokemonService: PokemonService) {}

  getPika() {
    return this.pokemonService.getPokemon().subscribe();
  }
}
