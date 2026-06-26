import { Package, ShoppingBag } from "lucide-react";
import Producto from "./components/Producto";

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
                        <p> 12 Artículos </p>
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
        <main className="p-6">
            <Producto />
        </main>



        {/* Metodos de Pago y de Entrega */}
        <section>
            <p> Metodos de Pago </p>
        </section>
        {/* Footer con contacto */}
        <footer>
            <p> Footer </p>
        </footer>
    </>
}

export default App;