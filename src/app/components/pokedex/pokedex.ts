import { Component, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { pokemon } from './initialPokemon.data';
import { PokemonInterface } from './pokemon.model';

@Component({
  imports: [],
  selector: 'app-pokedex',
  styleUrl: './pokedex.scss',
  templateUrl: './pokedex.html',
})
export class PokedexComponent implements OnInit {
  Pikachu = signal<PokemonInterface | null>(null);
  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPika();
  }

  getPika() {
    this.pokemonService.getPokemon().subscribe((pika: any) => {
      this.Pikachu.set(pika);
      console.log(this.Pikachu());
    });
  }
}
