'use client'
import Link from 'next/link'
import i18n from '@/utils/i18n.js'
import { useState } from 'react';

export default function Navbar() {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
      };

      
    return (
        <header>
            <nav className="flex justify-between py-5 px-4 items-center">
                <h1 className="text-3xl">
                    <Link href="/">Inicio</Link>
                    
                </h1>

                <ul className='flex gap-1'>
                    <li className='list-none'>
                        <Link href="/pokemon">{i18n.t('pokemondex')}</Link>
                    </li>
                    <li className='list-none'>
                        <Link href="/cards">{i18n.t('cardsdex')}</Link>
                    </li>
                    <li className='list-none'>
                        <Link href="/about">{i18n.t('about')}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}