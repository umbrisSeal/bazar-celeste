import { BanknoteArrowUp, Bitcoin, Coins, Handshake, Landmark, Mails, Package, ShoppingBag, Store, TruckIcon } from "lucide-react";
import Producto from "./components/Producto";

const mockProductos = [
    {
        id: '01239182731',
        nombre: 'Cita con Prome VT',
        descripcion: 'Sesion live de 1 hora con Prome VT. Con foto de recuerdo.',
        precioOriginal: 1800,
        precioActual: 1200, 
        inventario: 1,
        imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAldbd1V1qlF3FV7162Du3ZtUwhyFLRJhoN04Ce-90waEKHST0ICN2INS&s=10'
    },
    {
        id: '21212731',
        nombre: 'Tarjeta Regalo Amazon $500',
        descripcion: 'Boys trying to touch my junk. dede deded eded edoe odekd okwpeokwpo kepdokw dpowek dpowked pokwedop we',
        precioOriginal: 500,
        precioActual: 400,
        inventario: 3,
        imagenURL: 'https://www.kroger.com/product/images/large/front/0000000816057'
    },
    {
        id: '21212731',
        nombre: 'Pley 2 Chipeada',
        descripcion: 'Playstation 2 liberado. Incluye +300 juegos.',
        precioOriginal: 1000,
        precioActual: 890,
        inventario: 6,
        imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizvLntw86HIZiCLKsf2VEBM1tqW3v021RKtZRWAcMdCuoDDuE3nlBYbU&s=10'
    },
    {
        id: '21212731',
        nombre: 'Pley 2 Chipeada',
        descripcion: 'Playstation 2 liberado. Incluye +300 juegos.',
        precioOriginal: 1000,
        precioActual: 890,
        inventario: 6,
        imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizvLntw86HIZiCLKsf2VEBM1tqW3v021RKtZRWAcMdCuoDDuE3nlBYbU&s=10'
    },
    {
        id: '21212731',
        nombre: 'Pley 2 Chipeada',
        descripcion: 'Playstation 2 liberado. Incluye +300 juegos.',
        precioOriginal: 1000,
        precioActual: 890,
        inventario: 6,
        imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizvLntw86HIZiCLKsf2VEBM1tqW3v021RKtZRWAcMdCuoDDuE3nlBYbU&s=10'
    },
    {
        id: '21212731',
        nombre: 'Pley 2 Chipeada',
        descripcion: 'Playstation 2 liberado. Incluye +300 juegos.',
        precioOriginal: 1000,
        precioActual: 890,
        inventario: 6,
        imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizvLntw86HIZiCLKsf2VEBM1tqW3v021RKtZRWAcMdCuoDDuE3nlBYbU&s=10'
    },
    {
        id: '21212731',
        nombre: 'Pley 2 Chipeada',
        descripcion: 'Playstation 2 liberado. Incluye +300 juegos.',
        precioOriginal: 1000,
        precioActual: 890,
        inventario: 6,
        imagenURL: 'https://encrypted-tbn0.gstatic.com/imageANd9GcTizvLntw86HIZiCLKsf2VEBM1tqW3v021RKtZRWAcMdCuoDDuE3nlBYbU&s=10'
    },
    {
        id: '21212731',
        nombre: 'Pley 2 Chipeada',
        descripcion: 'Playstation 2 liberado. Incluye +300 juegos.',
        precioOriginal: 1000,
        precioActual: 890,
        inventario: 6,
        imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizvLntw86HIZiCLKsf2VEBM1tqW3v021RKtZRWAcMdCuoDDuE3nlBYbU&s=10'
    },
    {
        id: '216677731',
        nombre: 'Cuenta Brazzers — 1 año',
        descripcion: 'Sin fecha de expiracion.',
        precioOriginal: 12000,
        precioActual: 790,
        inventario: 1,
        imagenURL: 'https://www.lateja.cr/resizer/0LBdXZyhYsyl7i1VdYbbL6OQJYs=/arc-anglerfish-arc2-prod-gruponacion/public/SCY6D2OPINETPJ2K57NYHMWWIA.jpg'
    },
];


function App() {
    const fechaActual = new Date();
    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];

    const añoActual = fechaActual.getFullYear();
    const mesActual = meses[fechaActual.getMonth()];

    return <>

        {/* Header fijo */}
        <header>
            <div className="flex justify-between items-center py-4 px-6 bg-header text-header">
                {/* Left */}
                <div className="flex items-center gap-4">
                    <div className="bg-orange-500 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                        <ShoppingBag />
                    </div>
                    <div>
                        <h1 className="font-black text-4xl text-white select-none"> El Bazar de <span className="text-yellow-300"> Celeste </span> </h1>
                        <h2 className="uppercase text-sm tracking-wider font-semibold"> Tarjetas · Electrónica · Coleccionables · Y Más </h2>
                    </div>
                </div>

                {/* Right */}
                <div className="flex gap-4 uppercase text-sm tracking-wider font-semibold">
                    <div className="flex items-center gap-2">
                        <Package size={18} />
                        <p> {mockProductos.filter((p) => p.inventario > 0).length} Artículos </p>
                    </div>
                    <p> | </p>
                    <p> Precios en MXN · IVA Incluido </p>
                </div>
            </div>

            <div className="bg-orange-500 text-white py-2 px-6 font-semibold text-sm tracking-wider">
                <p className="uppercase"> {`Catálogo Completo — Actualizado ${mesActual} ${añoActual}`} </p>
            </div>
        </header>


        {/* Catalogo de Productos */}
        <main className="p-6 flex gap-8 flex-wrap">
            {
                mockProductos
                .filter((producto) => producto.inventario > 0)
                .map((p) => <Producto key={p.id} inventario={p.inventario} precioOriginal={p.precioOriginal} precioActual={p.precioActual} descripcion={p.descripcion} nombre={p.nombre} imagenURL={p.imagenURL} />)
            }
        </main>


        {/* Disclimer de Descuento */}
        <section className="bg-emerald-800 px-6 py-4">
            <h3 className="uppercase text-white font-bold text-2xl text-center">
                Celeste ofrece <span className="text-yellow-300"> 5% de descuento </span> extra
            </h3>
            <p className="text-center text-white py-4">
                Al ingresar el número telefónico de un cliente anterior como referencia. Promoción valida una sola vez por cada número telefónico referido.
            </p>
        </section>


        {/* Metodos de Pago y de Entrega */}
        <section className="text-emerald-900 px-6 py-4 gap-1">
            <div>
                <h3 className="uppercase font-bold text-2xl text-center text-white"> Metodos de Pago </h3>
                <div className="flex gap-12 justify-center py-6 text-xl font-semibold">
                    <div className="flex flex-col items-center w-50 text-center gap-2">
                        <Landmark size={60} />
                        <p> Transferencia Bancaria </p>
                    </div>
                    <div className="flex flex-col items-center w-50 text-center gap-2">
                        <Coins size={60} />
                        <p> Deposito Oxxo </p>
                    </div>
                    <div className="flex flex-col items-center w-50 text-center gap-2">
                        <BanknoteArrowUp size={60} />
                        <p> Pago Online </p>
                    </div>
                    <div className="flex flex-col items-center w-50 text-center gap-2">
                        <Bitcoin size={60} />
                        <p> Criptomonedas </p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="uppercase font-bold text-2xl text-center text-white"> Metodos de Entrega </h3>
                <div className="flex gap-12 justify-center py-6 text-xl font-semibold">
                    <div className="flex flex-col items-center w-50 text-center gap-2">
                        <TruckIcon size={60} />
                        <p> Envio a Domicilio </p>
                    </div>
                    <div className="flex flex-col items-center w-50 text-center gap-2">
                        <Mails size={60} />
                        <p> Entrega Digital </p>
                    </div>
                    <div className="flex flex-col items-center w-50 text-center gap-2">
                        <Handshake size={60} />
                        <p> Entrega Personal </p>
                    </div>
                </div>
            </div>
        </section>


        {/* Footer con contacto */}
        <footer className="bg-header">
            <p> Footer </p>
        </footer>
    </>
}

export default App;