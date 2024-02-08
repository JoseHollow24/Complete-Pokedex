import React from 'react'
import colorlessIcon from '@/../public/img/icons/colorless.png';
import darknessIcon from '@/../public/img/icons/darkness.png';
import dragonIcon from '@/../public/img/icons/dragon.png';
import fightingIcon from '@/../public/img/icons/fighting.png';
import fireIcon from '@/../public/img/icons/fire.png';
import grassIcon from '@/../public/img/icons/grass.png';
import lightningIcon from '@/../public/img/icons/lightning.png';
import psychicIcon from '@/../public/img/icons/psychic.png';
import metalIcon from '@/../public/img/icons/metal.png';
import waterIcon from '@/../public/img/icons/water.png';
import Image from 'next/image';


const typesSrc = {
  Colorless: colorlessIcon,
  Darkness: darknessIcon,
  Dragon: dragonIcon,
  Fighting: fightingIcon,
  Fire: fireIcon,
  Grass: grassIcon,
  Lightning: lightningIcon,
  Psychic: psychicIcon,
  Metal: metalIcon,
  Water: waterIcon
}

export default function TypesIcons({type}) {
  return (
    <>
      <Image 
        src={typesSrc[type].src} 
        alt={type}
        width="24" height="24"
        className="w-6 border-2 border-slate-400 rounded-full"
      />
    </>
  )
}
