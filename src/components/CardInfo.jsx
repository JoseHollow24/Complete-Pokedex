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
                        {pokemon.name} hp:{pokemon.hp} - 
                            {
                                pokemon.types.map((type, index) => (
                                <span key={index}>
                                    {type}
                                </span> 
                            ))}
                        </p>
                    <div>
                        {pokemon.supertype} - 
                        {
                            pokemon.subtypes.map((subtype, index) => (
                            <span key={index}>
                                 {subtype}
                            </span> 
                        ))}
                        <hr />
                    </div>
                    <div>
                        {pokemon.abilities &&
                            pokemon.abilities.map((ability, index) => (
                                <p key={index}>
                                    <span className='pr-2' key={index}>
                                        {ability.type}
                                    </span> 
                                    <b>{ability.name}</b><br />
                                    {ability.text}
                                </p>
                            ))
                        }
                    </div>
                    <div>
                        Ataques: <br />
                        {
                            pokemon.attacks.map((atack, index) => (
                                <div key={index}>
                                    <b>
                                        {
                                            atack.cost.map((cost, index) => (
                                            <span className='pr-2' key={index}>
                                                {cost}
                                            </span> 
                                        ))}
                                        {atack.name}  {atack.damage}
                                    </b>
                                    <br />
                                    {atack.text}
                                    <hr />
                                </div>
                            ))
                        }
                        <hr />
                    </div>
                    <div>
                        reglas:
                        {
                            pokemon.rules.map((rule, index) => (
                                <p key={index}>
                                    {rule}
                                </p>
                            ))
                        }
                        <hr />
                    </div>
                    <div>
                        debilidades:
                        { pokemon.weaknesses ? 
                                pokemon.weaknesses.map((weakness, index) => (
                                <span key={index}>
                                     {weakness.type} - {weakness.value}
                                </span> 
                            ))
                        : 
                            <span>
                                N/A
                            </span>
                        }
                        <br />
                        resistencias:
                        { pokemon.resistances ? 
                                pokemon.resistances.map((resistance, index) => (
                                    <span key={index}>
                                            {resistance.type} - {resistance.value}
                                    </span> 
                            ))
                        : 
                            <span>
                                N/A
                            </span>
                        }
                        <br />
                        retirada:
                        { pokemon.retreatCost ? 
                            pokemon.retreatCost.map((cost, index) => (
                                <span key={index}>
                                     {cost}
                                </span> 
                            ))
                        : 
                            <span>
                                N/A
                            </span>
                        }
                        <hr />
                    </div>
                    <div>
                        {pokemon.artist} - {pokemon.rarity} - {pokemon.set.name}
                        <hr />
                    </div>
                    <div>
                    {pokemon.number}/{pokemon.set.printedTotal} - {pokemon.regulationMark}
                    <hr />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

