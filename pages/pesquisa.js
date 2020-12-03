import React, { useState } from 'react'
import Head from 'next/head'


const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const [showSuccess, setShowSuccess] = useState('hide')


    const hideSuccess = () => {
        setShowSuccess('hide')
        setSucess(false)
    }

    const save = async () => {

        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json()
            setSucess(true)
            setRetorno(data)
            setShowSuccess('show')
        } catch (err) {

        }

    }
    const onChange = event => {
        const value = event.target.value
        const key = event.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (

        <div className='pt-6'>
            <Head>
                <title>Pesquisa</title>
            </Head>
            {!sucess &&
                <div>
                    <h1 className='my-6 text-center text-lg text-green-500 text-3xl font-bold'>Críticas e sugestões</h1>
                    <p className='font-bold text-center'>
                        O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
                </div>
            }
            {!sucess && <div className='w-1/5 mx-auto'>
                <label className=' font-bold text-lg'>Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded-lg' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                <label className=' font-bold text-lg'>Seu E-mail:</label>
                <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded-lg' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                <label className=' font-bold text-lg'>Seu Whatsapp:</label>
                <input type='text' className='p-4 block shadow bg-green-200 my-2 rounded-lg' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                <label className=' font-bold text-lg'>Nota:</label>
                <div className='flex py-2'>
                    {notas.map(nota => {
                        return (<label>
                            {nota}<br />
                            <input type='radio' name='Nota' value={nota} onChange={onChange} />
                        </label>
                        )
                    })
                    }
                </div>

                <button className='bg-green-400 px-12 py-4 rounded-lg font-bold shadow-lg hover:bg-green-500 duration-500' onClick={save}>Salvar</button>
            </div>}
            {
                sucess &&
                <div className={showSuccess}>
                    <div className='cupom'>
                        <div className='w-1/5 mx-auto'>
                            <button onClick={hideSuccess}>X</button>
                            <p className='mt-4 mb-6 text-center bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica!</p>
                            {
                                retorno.showCupom && <div className='text-center border p-4 mb-4 bg-white'>
                                    Seu cupom: <br />
                                    <strong className='text-2xl'>{retorno.Cupom}</strong>
                                </div>
                            }
                            {
                                retorno.showCupom && <div className='text-center border p-4 mb-4 bg-white'>
                                    <strong>{retorno.Promo}</strong>
                                    <br />
                                    <span className='italic'>Tire um print ou foto desta tela e apresente no caixa!</span>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default Pesquisa