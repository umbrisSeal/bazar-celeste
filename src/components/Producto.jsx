import React, { useState } from 'react'

function Producto() {
    const [unidades, setUnidades] = useState(0);

    function handleAgregarUnidades(agregarBool) {
        if(agregarBool) {
            if(unidades < 10) {
                setUnidades(unidades + 1);
            } else {
                setUnidades(10);
            }
        } else {
            if(unidades > 0) {
                setUnidades(unidades - 1)
            } else {
                setUnidades(0);
            }
        }
    };

    return <div className='bg-white w-65 h-90 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 overflow-hidden flex flex-col'>
        {/* Imagen */}
        <div className='w-full h-40'>
            <img
                src='https://www.kroger.com/product/images/large/front/0000000816057'
                alt='Titulo de Imagen'
                className='w-full h-full object-cover'
            />
        </div>
        {/* Informacion */}
        <div className='w-full flex-1 p-3 bg-gray-100 flex flex-col justify-between select-none'>
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-base'> Tarjeta Regalo Amazon $500 </p>
                <p
                    className='text-sm line-clamp-2 text-gray-500'
                    title='Este es mi tooltip'
                >
                    Boys trying to touch my junk. dede deded eded edoe odekd okwpeokwpo kepdokw dpowek dpowked pokwedop we
                </p>
            </div>

            <div className='flex flex-col gap-2'>

                <div className='flex gap-3 justify-end text-sm'>
                    <button
                        className={`font-bold cursor-pointer bg-red-300 text-red-800 border border-red-600 py-1 w-20 rounded-md transition-all duration-300 ${unidades > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                        onClick={() => handleAgregarUnidades(false)}
                    >
                        Eliminar
                    </button>
                    <button
                        className='font-bold cursor-pointer bg-green-200 text-green-800 py-1 w-24 rounded-md border border-green-600'
                        onClick={() => handleAgregarUnidades(true)}
                    >
                        {`Añadir ${unidades > 0 ? `(${unidades})` : ''}`}
                    </button>
                </div>

                <hr className='text-gray-300' />
                <div>
                    <p className='text-xs'> <span className='line-through'> $500.00 </span> MXN </p>
                    <div className='flex justify-between items-center text-xs uppercase'>
                        <p className='font-semibold text-gray-500'>
                            <span className='text-lg text-orange-500 font-black'> $300.00</span> MXN
                        </p>
                        <p className='text-green-600 font-extrabold'> + 5 en stock </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Producto;