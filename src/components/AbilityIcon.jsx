import React from 'react'
import abilityIcon from '@/img/ability.png';
import pokebodyIcon from '@/img/pokebody.png';
import pokepowerIcon from '@/img/pokepower.png';

const abilitySrc = {
    Ability: abilityIcon,
    PokéBody: pokebodyIcon,
    PokéPower: pokepowerIcon,
}

export default function AbilityIcon({ability}) {
    const abiltyFormated = ability.replace(/-/g, "")
  return (
    <>
        <img className="w-28 " src={abilitySrc[abiltyFormated].src} alt={ability}/>
    </>
  )
}
