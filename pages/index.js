import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)
    return (
        <div>
            <p className='mt-12 font-bold text-center'>
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12 '>
                <Link href='/pesquisa'>
                    <a className='bg-green-400 px-12 py-6 rounded-lg font-bold shadow-lg hover:bg-green-500 duration-500'>Dar opinião ou sugestão</a>
                </Link>
            </div>
            {!data && <p>Carregando...</p>}
            {data && data.showPromo &&
                < p className='my-12 font-bold text-center'>
                    {data.mensagem}
                </p>
            }
        </div >
    )
}

export default Index