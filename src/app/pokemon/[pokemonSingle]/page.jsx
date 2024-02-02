async function loadPokemon(id) {
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
}

async function SinglePokemonPage( { params }) {

   const singlePokemon = await loadPokemon(params.pokemonSingle);

    return(
        <div>
            {singlePokemon.name}
        </div>
    )
}

export default SinglePokemonPage