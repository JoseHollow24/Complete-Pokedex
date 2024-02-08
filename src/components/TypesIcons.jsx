import React from 'react'
import colorlessIcon from '/public/images/icons/colorless.png';
import darknessIcon from '/public/images/icons/darkness.png';
import dragonIcon from '/public/images/icons/dragon.png';
import fightingIcon from '/public/images/icons/fighting.png';
import fireIcon from '/public/images/icons/fire.png';
import grassIcon from '/public/images/icons/grass.png';
import lightningIcon from '/public/images/icons/lightning.png';
import psychicIcon from '/public/images/icons/psychic.png';
import metalIcon from '/public/images/icons/metal.png';
import waterIcon from '/public/images/icons/water.png';
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
