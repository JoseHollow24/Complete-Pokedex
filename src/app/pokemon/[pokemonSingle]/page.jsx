async function loadPokemon(id) {
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
}

async function SinglePokemonPage( { params }) {

   const singlePokemon = await loadPokemon(params.pokemonSingle);


    //normal sprites
   const spriteFrontD = singlePokemon.sprites.front_default
   const spriteBackD = singlePokemon.sprites.back_default

   //shiny sprites
   const spriteFrontShiny = singlePokemon.sprites.front_shiny
   const spriteBackShiny = singlePokemon.sprites.back_shiny
   //
   const homeArtD = singlePokemon.sprites.other.home.front_default
   const homeArtS = singlePokemon.sprites.other.home.front_shiny

   const shodownFrontD = singlePokemon.sprites.other.showdown.front_default
   const shodownFrontS = singlePokemon.sprites.other.showdown.front_shiny
   const shodownBackD = singlePokemon.sprites.other.showdown.back_default
   const shodownBackS = singlePokemon.sprites.other.showdown.back_shiny

    return(
        <div>
            {console.log(singlePokemon)}
            Nombre: {singlePokemon.name}
            <br />
            Numero de la pokedex {singlePokemon.order}
            <ul>
            {
                singlePokemon.types.map((typeItem, index) => (
                        <li key={index}>
                            <p>{typeItem.type.name}</p>
                        </li>
                ))
            }
            </ul>
            <hr />
            Sprites:
            <br />
            <img src={spriteFrontD} alt="" />
            <img src={spriteFrontShiny} alt="" />
            <img src={spriteBackD} alt="" />
            <img src={spriteBackShiny} alt="" />
            <br />
            <img src={shodownFrontD} alt="" />
            <img src={shodownFrontS} alt="" />
            <img src={shodownBackD} alt="" />
            <img src={shodownBackS} alt="" />
            <hr />
            <img src={homeArtD} alt="" />
            <img src={homeArtS} alt="" />
        </div>
    )
}

export default SinglePokemonPage