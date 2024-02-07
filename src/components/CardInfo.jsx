import React from 'react'
import TypesIcons from './TypesIcons'
import AbilityIcon from './AbilityIcon'
import cardColors from './cardColors'

export default function CardInfo( { pokemon } ) {
    const typesBg = cardColors;
    console.log(cardColors)
  return (
    <>
        <div className="md:grid md:grid-cols-6 md:max-w-4xl mx-auto mt-10">
            <div className="md:col-span-2">
                <img src={pokemon.images.large} />
              </div>
              <div className="md:col-span-4">
                <div 
                className={`${typesBg[pokemon.types[0]]} max-w-96 grid mx-auto p-4 text-white rounded`}
                >
                    {/* Descripción */}
                    <nav className="flex justify-between mb-6">
                        <div>
                            <p className="font-bold text-2xl">{pokemon.name}</p>
                            <span>{pokemon.supertype} - </span>
                            {
                                pokemon.subtypes.map((subtype, index) => (
                                <span key={index}> 
                                    {subtype}
                                    {index < pokemon.subtypes.length - 1 && ', '}
                                </span> 
                            ))}
                        </div>
                        <div className="flex items-center" >
                            <span className="mr-2">HP:{pokemon.hp}</span>
                            {
                                pokemon.types.map((type, index) => (
                                    <TypesIcons key={index} type={type}/>
                            ))}
                        </div>
                    </nav>
                    {/* Habilidad */}
                    {pokemon.abilities &&
                        <section className='mb-4'> {
                                pokemon.abilities.map((ability, index) => (
                                    <div key={index}>
                                        <div className="flex gap-2 mb-2">
                                            <AbilityIcon ability={ability.type}/>
                                            <p className="font-bold text-2xl">{ability.name}</p>
                                        </div>
                                        <span className='text-sm'>{ability.text}</span>
                                    </div>
                                ))
                            }
                        </section>
                    }
                    {/* Ataques */}
                    <section className='mb-4'>
                        <p className='mb-2'>Ataques:</p>
                        {
                            pokemon.attacks.map((atack, index) => (
                                <div className='mb-2' key={index}>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-1 items-center'>
                                            {
                                                atack.cost.map((cost, index) => (
                                                <TypesIcons key={index} type={cost}/>
                                            ))}
                                            <span className='text-xl font-bold'>{atack.name}</span>
                                        </div>
                                        <span className='text-2xl font-bold'>{atack.damage}</span>
                                    </div>
                                    <p className='text-sm'>{atack.text}</p>
                                </div>
                            ))
                        }
                    </section>
                    {/* Reglas */}
                    {pokemon.rules &&
                        <section  className='mb-4'>
                            reglas:
                            { pokemon.rules && 
                                pokemon.rules.map((rule, index) => (
                                    <p className='text-xs mb-2' key={index}>
                                        {rule}
                                    </p>
                                ))
                            }
                            <hr />
                        </section>
                    }
                    {/* Debilidaes, resistencias y retiradas */}
                    <section className='mb-4 grid grid-cols-3'>
                        <div>
                            <p className='uppercase text-sm font-bold mb-2'>Debilidades:</p>
                            { pokemon.weaknesses ? 
                                    pokemon.weaknesses.map((weakness, index) => (
                                    <span className='flex items-center justify-start gap-1' key={index}>
                                        <TypesIcons type={weakness.type}/> <span className='font-bold'>{weakness.value}</span> 
                                    </span> 
                                ))
                            : 
                                <span className='uppercase text-sm font-bold'>
                                    N/A
                                </span>
                            }
                        </div>
                        <div>
                            <p className='uppercase text-sm font-bold mb-2'>Resistencias:</p>
                            { pokemon.resistances ? 
                                    pokemon.resistances.map((resistance, index) => (
                                        <span className='flex items-center justify-start gap-1' key={index}>
                                            <TypesIcons type={resistance.type}/> <span className='font-bold'>{resistance.value}</span> 
                                        </span> 
                                ))
                            : 
                                <span className='uppercase text-sm font-bold'>
                                    N/A
                                </span>
                            }
                        </div>
                        <div>
                            <p className='uppercase text-sm font-bold mb-2'>Retirada:</p>
                            <span className='flex items-center justify-start gap-1'>
                            { pokemon.retreatCost ? 
                                pokemon.retreatCost.map((cost, index) => (
                                        <TypesIcons key={index} type={cost}/>
                                        ))
                                        : 
                                        <span className='uppercase text-sm font-bold'>
                                    N/A
                                </span>
                            }
                            </span>
                        </div>
                    </section>
                    {/* otra Informacion */}
                    <section className='mb-4 grid grid-cols-3'>
                        <div>
                            <p className='uppercase text-sm font-bold mb-2'>Artista:</p>
                            <span className='text-sm'>{pokemon.artist}</span>
                        </div>
                        <div>
                            <p className='uppercase text-sm font-bold mb-2'>Rareza:</p>
                            <span className='text-sm'>{pokemon.rarity}</span>
                        </div>
                        <div>
                            <p className='uppercase text-sm font-bold mb-2'>Expansion:</p>
                            <span className='text-sm'>{pokemon.set.name}</span>
                        </div>
                    </section>
                    {/* Numero y Regulacion */}
                    <section className='mb-4 grid grid-cols-3'>
                        <div>
                            <p className='uppercase text-sm font-bold mb-2'>Numero:</p>
                            <span className='text-sm'>{pokemon.number}/{pokemon.set.printedTotal}</span>
                        </div>
                        {pokemon.regulationMark &&
                            <div>
                                <p className='uppercase text-sm font-bold mb-2'>Rotación:</p>
                                <span className='uppercase text-sm bg-slate-800 rounded-full w-5  block text-center'>{pokemon.regulationMark}</span>
                            </div>
                        }
                    </section>
                </div>
            </div>
        </div>
    </>
  )
}

