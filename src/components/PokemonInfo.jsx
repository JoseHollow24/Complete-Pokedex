'use client'
import { useState } from "react"
import PokemonTypes from "./PokemonTypes";

export default function PokemonInfo( { pokemon } ) {
    const [isShiny, setIsShiny] = useState(false);
    const handleClick = () => {
        console.log('hols')
        console.log(isShiny)
        setIsShiny(!isShiny);
    };

     //
    const homeArtD = pokemon.sprites.other.home.front_default
    const homeArtS = pokemon.sprites.other.home.front_shiny

    
    //normal sprites
    const spriteFrontD = pokemon.sprites.front_default
    const spriteBackD = pokemon.sprites.back_default
    const shodownFrontD = pokemon.sprites.other.showdown.front_default
    const shodownBackD = pokemon.sprites.other.showdown.back_default

    //shiny sprites
    const spriteFrontS = pokemon.sprites.front_shiny
    const spriteBackS = pokemon.sprites.back_shiny
    const shodownFrontS = pokemon.sprites.other.showdown.front_shiny
    const shodownBackS = pokemon.sprites.other.showdown.back_shiny

    
    return (
        <>
            <div className="md:grid md:grid-cols-6 md:max-w-4xl mx-auto mt-10">
                <div className="md:col-span-3">
                    <div className="max-w-80 grid mx-auto">
                    <p className="text-slate-800 font-bold">
                            Nombre: <span className="text-red-400 font-bold capitalize">{pokemon.name}</span>
                        </p>
                        <p className="text-slate-800 font-bold">
                            Nº: <span className="text-red-400 font-bold">{pokemon.order}</span>
                        </p>
                        <PokemonTypes pokemonTypes={pokemon.types}/>
                        <div className="my-2">
                            { isShiny ? 
                                <>
                                    <div className="bg-blue-300 flex rounded-sm items-center justify-around mt-4 p-4 h-48">
                                        <img className="w-auto" src={spriteFrontS}  alt={pokemon.name} />
                                        {spriteBackS &&  (<img className="w-auto" src={spriteBackS}  alt={pokemon.name} />)}
                                    </div>
                                    { shodownBackS && (
                                        <div className="bg-blue-400 flex rounded-sm items-center justify-around mt-4 p-4 h-48">
                                        <img className="w-auto" src={shodownBackS}  alt={pokemon.name} />
                                            <img className="w-auto" src={shodownFrontS}  alt={pokemon.name} />
                                        </div>
                                    )}
                                </>
                                : 
                                <>  
                                    <div className="bg-blue-300 flex rounded-sm items-center justify-around mt-4 p-4 h-48">
                                        <img className="w-auto" src={spriteFrontD}  alt={pokemon.name} />
                                        {spriteBackD &&  (<img className="w-auto" src={spriteBackD}  alt={pokemon.name} />)}
                                    </div>
                                    {shodownBackD && (
                                        <div className="bg-blue-400 flex rounded-sm items-center justify-around mt-4 p-4 h-48">
                                            <img className="w-auto" src={shodownBackD}  alt={pokemon.name} />
                                            <img className="w-auto" src={shodownFrontD}  alt={pokemon.name} />
                                        </div>
                                    )}
                                </>
                            }
                        </div>
                        <button 
                            class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 active:bg-blue-800 mx-auto" 
                            onClick={handleClick}
                        >
                            Color { isShiny ? 'Normal' : 'Shiny' }
                        </button>
                    </div>
                </div>
                <div className="md:col-span-3">
                        { isShiny ? 
                            <div className="block">
                                <img className="mx-auto" src={homeArtS} alt={pokemon.name} />
                            </div>
                        : 
                            <div className="block">
                                <img className="mx-auto" src={homeArtD} alt={pokemon.name} />
                            </div>
                        }
                </div>
                
            </div>
        </>
    )
}
