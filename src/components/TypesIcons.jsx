import React from 'react'
import colorlessIcon from '@/img/icons/colorless.png';
import darknessIcon from '@/img/icons/darkness.png';
import dragonIcon from '@/img/icons/dragon.png';
import fightingIcon from '@/img/icons/fighting.png';
import fireIcon from '@/img/icons/fire.png';
import grassIcon from '@/img/icons/grass.png';
import lightningIcon from '@/img/icons/lightning.png';
import psychicIcon from '@/img/icons/psychic.png';
import metalIcon from '@/img/icons/metal.png';
import waterIcon from '@/img/icons/water.png';
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
