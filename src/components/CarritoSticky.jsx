import { ShoppingBasket, ShoppingCart } from 'lucide-react';
import React, { useEffect, useState } from 'react'

/*
<ShoppingCart />
<ShoppingBasket />
*/

function CarritoSticky() {
    const [productos, setProductos] = useState(0);
    const [mostrarProductos, setMostrarProductos] = useState(false);

    function handleBotonCarrito() {
        setMostrarProductos(prev => !prev);
    };

    useEffect(() => {
        const handleBotonEscape = (event) => {
            if(event.key === "Escape" && mostrarProductos) setMostrarProductos(false);
        };

        window.addEventListener("keydown", handleBotonEscape);

        return () => {
            window.removeEventListener("keydown", handleBotonEscape);
        };

    }, []);


    return <div className='fixed bottom-5 right-5'>
        <div className='w-16 h-16'>
            {/* Boton */}
            <button className='flex flex-col justify-center items-center cursor-pointer bg-emerald-800 text-gray-100 border-2 border-emerald-700 hover:bg-emerald-700 hover:border-emerald-400 w-full h-full rounded-full transition-all duration-300 shadow-2xl' onClick={() => handleBotonCarrito()} >
                <ShoppingCart />
                <p className='text-xs'> Carrito </p>
            </button>

            {/* Indicador de Items */}
            <button
                className={`absolute top-0 right-0 -translate-y-1 -translate-x-1 w-5 h-5 rounded-full flex justify-center items-center bg-red-500 border border-white text-xs text-white font-semibold shadow-2xl cursor-pointer ${productos > 0 ? 'opacity-100' : 'opacity-0'}`}
                onClick={() => handleBotonCarrito()}>
                <p> {productos} </p>
            </button>

            {/* Ventna Emergente */}
            <div
                className={`bg-white absolute top-0 right-0 w-60 h-40 rounded-xl overflow-hidden text-black py-2 px-3 flex flex-col gap-1 select-none transition-all duration-300 ${mostrarProductos ? 'opacity-100 -translate-y-42 -translate-x-6' : 'opacity-0 -translate-y-36 translate-x-0 pointer-events-none'}`}
            >
                <div className='h-8'>
                    <p className='font-black text-center'> Productos Añadidos </p>
                    <hr />
                </div>
                {
                    productos > 0 ?
                    <div className='text-sm flex-1 overflow-y-scroll'>
                        <p className='truncate'> <span className='font-bold'> x1 </span> Nombre Producto Aqui </p>
                        <p className='truncate'> <span className='font-bold'> x1 </span> Nombre Producto Aqui </p>
                        <p className='truncate'> <span className='font-bold'> x1 </span> Nombre Producto Aqui </p>
                        <p className='truncate'> <span className='font-bold'> x1 </span> Nombre Producto Aqui </p>
                        <p className='truncate'> <span className='font-bold'> x1 </span> Nombre Producto Aqui </p>
                        <p className='truncate'> <span className='font-bold'> x1 </span> Nombre Producto Aqui </p>
                        <p className='truncate'> <span className='font-bold'> x1 </span> Nombre Producto Aqui </p>
                    </div>
                    :
                    <div className='flex-1 flex items-center justify-center text-sm text-gray-500'>
                        <p> Carrito Vacio </p>
                    </div>
                }
                <button
                    className={`h-8 text-white font-semibold rounded-lg flex justify-center items-center text-sm ${productos > 0 ? 'bg-green-500 cursor-pointer' : 'bg-gray-500'}`}
                >
                    <p> Ordenar por WhatsApp </p>
                </button>
            </div>

        </div>
    </div>
}

export default CarritoSticky;