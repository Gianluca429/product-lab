export interface PokemonInterface {
  name: string;
  sprites?: { front_default: string };
  abilities?: { slot: number; is_hidden: boolean; ability: { name: string; url: string } }[];
  types?: { slot: number; type: { name: string; url: string } }[];
}
