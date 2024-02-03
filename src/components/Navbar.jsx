'use client'
import Link from 'next/link'
import i18n from '@/utils/i18n.js'
import { useState } from 'react';
import NavIcon from '@/img/pokedex.png';

export default function Navbar() {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
      };

      
    return (
        <header>
            <nav className="border-b bg-red-400 border-b-zinc-600 px-5 py-2">
                <div className="container m-auto flex justify-between">
                    <h1 className="text-3xl">
                        <Link href="/">
                            <img src={NavIcon.src} alt="Inicio" className='max-w-8'/>
                        </Link>
                    </h1>
                    <ul className='flex gap-2 items-center text-white font-bold'>
                        <li className='list-none'>
                            <Link href="/cards">{i18n.t('cardsdex')}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}