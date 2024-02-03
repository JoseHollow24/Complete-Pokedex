'use client'

import i18n from '@/utils/i18n.js'
import React, { useState } from 'react';
import Link from 'next/link';
import PokemonSearch from '@/components/PokemonSearch';

export default  function Home() {
    //busqueda individual
    const [pokemonData, setPokemonData] = useState(null);
    // Función para recibir la respuesta del API desde el buscador hijo
    const handlePokemonData = (data) => {
        setPokemonData(data);
    };
  
    return(
      <main>
          <h1 className="text-center text-3xl mt-10" >{i18n.t('appTitle')}</h1>
          <div className="md:grid md:grid-cols-6 md:max-w-4xl mx-auto mt-10">
                <div className="md:col-span-3">
                  <h1>Pokedex de Pokémon</h1>
                    <br />
                    <PokemonSearch onPokemonDataChange={handlePokemonData}/>
                  </div>
                <div className="md:col-span-3">
                  {
                  pokemonData && (
                      <div>
                        <p class="text-slate-800 font-bold capitalize text-xl">{pokemonData.name}</p>
                        <Link
                          className=' text-sky-400 font-bold text-xl underline  text-center mt-2'
                           href={`/${pokemonData.name}`}
                           >
                              Ver Detalles
                          </Link>
                          <img src={pokemonData.sprites.other["official-artwork"].front_default} alt="" />
                         
                      </div>
                      )
                  }
                </div>
          </div>
        </main>
    )
};
