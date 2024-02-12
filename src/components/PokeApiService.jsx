
const PokeApiService = {
    async searchPokemon(pokemonName) {
      const lowerCasePokemonName = pokemonName.toLowerCase();
  
      const pokedexResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCasePokemonName}`);
      const dexData = await pokedexResponse.json();
  
      const cardDexResponse = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${lowerCasePokemonName}`);
      const cardsData = await cardDexResponse.json();
  
      return { dex: dexData, card: cardsData };
    },
  };
  
  export default PokeApiService;