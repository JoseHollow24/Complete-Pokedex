
async function PokeApiService(pokemonName) {
  try {
    const lowerCasePokemonName = pokemonName.toLowerCase();

    const pokedexResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCasePokemonName}`);
    const dexData = await pokedexResponse.json();

    const cardDexResponse = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${lowerCasePokemonName}`);
    const cardsData = await cardDexResponse.json();

    return { dex: dexData, card: cardsData };
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
  
export default PokeApiService;