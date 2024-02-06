import React from 'react'

export default function CardInfo( { pokemon } ) {
    console.log(pokemon)
  return (
    <>
        <div className="md:grid md:grid-cols-6 md:max-w-4xl mx-auto mt-10">
            <div className="md:col-span-2">
                <img src={pokemon.images.large} />
              </div>
              <div class="md:col-span-3">
                <div class="max-w-80 grid mx-auto">
                    <p class="text-slate-800 font-bold">
                        Nombre: 
                        <span class="text-red-400 font-bold capitalize">garchomp</span>
                    </p>
                        <p class="text-slate-800 font-bold">Nº: 
                        <span class="text-red-400 font-bold">570</span>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

