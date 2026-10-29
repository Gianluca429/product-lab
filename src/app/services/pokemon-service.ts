import { pokemon } from './../components/pokedex/initialPokemon.data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonInterface } from '../components/pokedex/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemon() {
    return this.httpClient.get<PokemonInterface | null>(
      'https://pokeapi.co/api/v2/pokemon/pikachu',
    );
  }
}
