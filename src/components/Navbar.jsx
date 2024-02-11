'use client'
import i18n from '@/utils/i18n.js'
import Link from 'next/link'
import NavIcon from '/public/images/pokedex.png';
import Image from 'next/image';

export default function Navbar() {
      
    return (
        <header>
            <nav className="border-b bg-red-400 border-b-zinc-600 px-5 py-2">
                <div className="container m-auto flex justify-between">
                    <h1 className="text-3xl">
                        <a className="sr-only">Inicio</a>
                        <Link href="/">
                            <Image 
                                src={NavIcon.src}
                                alt='/'
                                width="32"
                                height="32"
                                className='max-w-8'
                                aria-label={i18n.t('pokedex')}
                            />
                        </Link>
                    </h1>
                </div>
            </nav>
        </header>
    )
}