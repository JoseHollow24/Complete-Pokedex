'use client'
import i18n from '@/utils/i18n.js'
import { useState } from "react"
import PokeApiService from "./PokeApiService"

export default function PokemonSearch( { onPokemonDataChange } ) {
    const [pokemonName, setPokemonName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        searchPokemon()
    }

    const searchPokemon = async () => {
        if (pokemonName.trim() !== '') {
            try {
                const data = await PokeApiService.searchPokemon(pokemonName);
                onPokemonDataChange(data);
              } catch (error) {
                console.log(`${i18n.t('apiError')}`, error);
              }
        }else (
            console.log(`${i18n.t('formError')}`)
        )
    }


    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokemonName" className="sr-only">
                {i18n.t('searchPokemonLabel')}
                </label>
                <input 
                    id="pokemonName"
                    type="text"
                    className="block border border-slate-400 border-rounded px-4 py-2 mb-2"
                    placeholder={i18n.t('searchPokemonLabel')}
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                />
                <button 
                    type="submit"
                    aria-label={i18n.t('searchPokemon')}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 active:bg-blue-800 mx-auto" 
                >
                    {i18n.t('searchPokemon')}
                </button>
            </form>
        </div>
        </>
    )
}
