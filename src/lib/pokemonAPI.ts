import { Pokemon } from '@/types/pokemonTypes';

const pokemon_API = 'https://pokeapi.co/api/v2/';

export async function getPokemonList(): Promise<Pokemon[]> {
  const res = await fetch(pokemon_API + 'pokemon?limit=30&offset=0');
  const data = await res.json();

  const detailedData: Pokemon[] = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.other['official-artwork'].front_default,
        type: details.types,
        url: pokemon.url,
        weight: details.weight,
        stats: details.stats,
      };
    }),
  );

  return detailedData;
}

export async function getPokemonByName(name: string) {
  const res = await fetch(pokemon_API + 'pokemon/' + name);
  const data = await res.json();
  return data;
}
