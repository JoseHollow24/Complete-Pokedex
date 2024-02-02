'use client'
import React, { useState } from 'react';
import Link from 'next/link';

import PokemonSearch from '@/components/PokemonSearch';

export default function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null);

    // Función para recibir la respuesta del API desde el componente hijo
    const handlePokemonData = (data) => {
        setPokemonData(data);
    };
  
    return(
        <div>
            <h1>Pokedex de Pokémon</h1>
            <PokemonSearch onPokemonDataChange={handlePokemonData}/>
            {/* Contenido de la página */}
            {
            pokemonData && (
                <div>
                    <h2>{pokemonData.name}</h2>
                    <br />
                    <img src={pokemonData.sprites.other["official-artwork"].front_default} alt="" />
                    <Link href={`/pokemon/${pokemonData.name}`}>
                        Ver Detalles
                    </Link>
                </div>
                )
            }
            <Link href="/">Volver a Inicio</Link>
        </div>
    )
};
