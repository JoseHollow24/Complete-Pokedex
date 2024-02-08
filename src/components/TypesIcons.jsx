import React from 'react'
import Image from 'next/image';

export default function TypesIcons({type}) {
  return (
    <>
      <Image
        src={`/images/icons/${type}.png`}
        alt={type}
        width="24" height="24"
        className="w-6 border-2 border-slate-400 rounded-full"
      />
    </>
  )
}
