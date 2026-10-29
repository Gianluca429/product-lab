import { Component, OnInit, signal, effect } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
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
    this.pokemonService.getPokemon().subscribe({
      next: (pika) => {
        this.Pikachu.set(pika);
        console.log(this.Pikachu());
      },
      error: (err) => {
        console.log('Errore durante il recupero del Pokémon', err);
      },
    });
  }
}
