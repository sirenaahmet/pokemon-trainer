const pokemon_API = 'https://pokeapi.co/api/v2/';

export async function getPokemonList() {
  const res = await fetch(pokemon_API + 'pokemon?limit=20&offset=0');
  const data = await res.json();
  return data.results;
}
export async function getPokemonByName(name: string) {
  const res = await fetch(pokemon_API + 'pokemon/' + name);
  const data = await res.json();
  return data;
}
