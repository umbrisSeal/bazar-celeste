import { Package } from "lucide-react";

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
            <div className="flex justify-between py-4 px-6 bg-header">
                <div>
                    <div>
                        <p> Icono shopping </p>
                    </div>
                    <div className="text-white">
                        <h1> El Bazar de <span className="text-yellow-300"> Celeste </span> </h1>
                        <h2 className="uppercase text-sm"> Tarjetas · Electrónica · Coleccionables · Y Más </h2>
                    </div>
                </div>
                <div className="flex gap-4 uppercase text-sm">
                    <div className="flex gap-2">
                        <Package />
                        <p> 12 Articulos </p>
                    </div>
                    <p> | </p>
                    <p> Precios en MXN · IVA Incluido </p>
                </div>
            </div>
            <div className="bg-header-banner text-white py-2 px-6 font-semibold text-sm tracking-wider">
                <p className="uppercase"> {`Catálogo Completo — Actualizado ${mesActual} ${añoActual}`} </p>
            </div>
        </header>
        {/* Catalogo de Productos */}
        <main>
            <p> Catalogo </p>
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