import { Component, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  imports: [],
  selector: 'app-pokedex',
  styleUrl: './pokedex.scss',
  templateUrl: './pokedex.html',
})
export class PokedexComponent implements OnInit {
  Pikachu: any;
  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPika();
  }

  getPika() {
    this.pokemonService.getPokemon().subscribe((pika) => {
      console.log(pika);
      this.Pikachu = pika;
    });
  }
}
