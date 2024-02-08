import React from 'react'
import abilityIcon from '@/../public/img/ability.png';
import pokebodyIcon from '@/../public/img/pokebody.png';
import pokepowerIcon from '@/../public/img/pokepower.png';
import Image from 'next/image';

const abilitySrc = {
    Ability: abilityIcon,
    PokéBody: pokebodyIcon,
    PokéPower: pokepowerIcon,
}

export default function AbilityIcon({ability}) {
    const abiltyFormated = ability.replace(/-/g, "")
  return (
    <>
      <Image 
        src={abilitySrc[abiltyFormated].src} 
        alt={ability}
        width="112"
        height="30"
        className="w-28"
      />
    </>
  )
}
