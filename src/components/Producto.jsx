import React, { useState } from 'react'

function Producto({inventario = 0, precioOriginal = 0, precioActual = 0, descripcion = 'Sin Descripcion', imagenURL = '', nombre = 'Sin Nombre'}) {
    const [unidades, setUnidades] = useState(0);

    const descuento = Math.ceil(((precioOriginal - precioActual) / precioOriginal) * 100);

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

    /*
        Futuras mejoras
        - Añadir iconos a los botones de agregar y eliminar, o reemplazarlos por estos. Almenos el de borrar
        - Cambiar color de fondo del Producto cuando las unidades seleccionadas sean mas de 0.
    */

    return <div className='bg-white w-65 h-90 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-200 overflow-hidden flex flex-col'>
        {/* Imagen */}
        <div className='w-full h-40 relative bg-emerald-700 text-white'>
            <img
                src={imagenURL}
                alt={nombre}
                className='w-full h-full object-cover'
            />
            <div className={`absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full font-extrabold text-sm shadow-md ${descuento > 0 ? 'opacity-100' : 'opacity-0'}`}>
                {`- ${descuento} %`}
            </div>
        </div>
        {/* Informacion */}
        <div className='w-full flex-1 p-3 bg-gray-100 flex flex-col justify-between select-none'>
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-base'> {nombre} </p>
                <p
                    className='text-sm line-clamp-2 text-gray-500'
                    title={descripcion}
                >
                    {descripcion}
                </p>
            </div>

            <div className='flex flex-col gap-2'>

                <div className='flex gap-3 justify-end text-sm hidden'>
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
                    <p className={`text-xs ${descuento > 0 ? 'opacity-100' : 'opacity-0'}`}>
                        <span className='line-through'>${precioOriginal.toFixed(2)} </span> MXN
                    </p>
                    <div className='flex justify-between items-center text-xs uppercase'>
                        <p className='font-semibold text-gray-500'>
                            <span className='text-lg text-orange-500 font-black'> ${precioActual.toFixed(2)}</span> MXN
                        </p>
                        <p className={`${inventario > 2 ? 'text-green-600' : 'text-red-500'} font-extrabold`}>
                            {`${inventario > 5 ? '+ 5' : `${inventario}`} en stock`}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Producto;