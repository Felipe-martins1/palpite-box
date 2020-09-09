import React from './node_modules/react'
import Link from './node_modules/next/link'

const Header = () => {
    return (
        <React.Fragment>
            <div className='bg-gray-200 shadow-lg '>
                <div className='container mx-auto '>
                    <Link href='/'>
                        <img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox' />
                    </Link>
                </div>
            </div>
            <div className='bg-gray-100 shadow-lg text-center p-4'>
                <Link href='/sobre'>
                    <a className='px-2 hover:underline'>Sobre</a>
                </Link>
                <Link href='/contato'>
                    <a className='px-2 hover:underline'>Contato</a>
                </Link>
                <Link href='/pesquisa'>
                    <a className='px-2 hover:underline'>Pesquisa</a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header