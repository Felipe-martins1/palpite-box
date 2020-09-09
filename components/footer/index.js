import React from './node_modules/react'
import Link from './node_modules/next/link'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: {''}
                Felipe Martins
                <Link href='https://www.linkedin.com/in/felipe-martins-a73852195/'> Linkedin /</Link>
                <Link href='https://github.com/Felipe-martins1'> Github</Link>
                <div className='mt-2'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' scr='/logo_devpleo.png' />
                </div>
            </div>

        </div>
    )
}

export default Footer