import { BanknoteArrowUp, Bitcoin, Coins, Handshake, Landmark, Mails, MessageCircleQuestionMark, Package, ShoppingBag, Store, TruckIcon } from "lucide-react";
import Producto from "./components/Producto";
import CarritoSticky from "./components/CarritoSticky";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import { BounceLoader } from "react-spinners";

const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZ2fK7QAyjJO8fTVYvVOUzihMqlUSKbL50j-6DZ-qCeJFOjbfIrQ0I9MIxxZ8Ms77N2jgdPSfQbp_7/pub?gid=0&single=true&output=csv";

function App() {
    const [carrito, setCarrito] = useState([]);
    const [catalogo, setCatalogo] = useState([]);
    const [errorCatalogo, setErrorCatalogo] = useState(false);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch(csvURL)
        .then(res => res.text())
        .then(csv => {
            const papaResult = Papa.parse(csv, {
                header: true,
                skipEmptyLines: true
            });

            const productosLimpios = papaResult.data.map((producto) => {
                return {
                    ...producto,
                    precioOriginal: Number(producto.precioOriginal),
                    precioActual: Number(producto.precioActual),
                    inventario: Number(producto.inventario)
                };
            });

            //console.log(productosLimpios);
            setCatalogo(productosLimpios);
        })
        .catch(error => {
            console.log("Error al consultar el catalogo. Error:");
            console.log(error);
            setErrorCatalogo(true);
        })
        .finally(() => {
            setCargando(false);
        });

    }, []);

    const telefonoCeleste = '525526687957';

    function handleAñadirProducto(id = 0) {
        const productoElegido = catalogo.find(p => p.id === id);
        if(productoElegido === undefined) {
            console.log("Error: No se encontro el producto con ID ", id);
            return;
        };

        // Agregar producto o incrementar deseados si ya existe.
        setCarrito(prev => {
            const existeProducto = prev.some(p => p.id === id);
            if(existeProducto) {
                // El producto existe, buscarlo y solo incrementar +1 en cantidad. Los demas dejarlos igual.
                return prev.map((producto) => producto.id === id ? {...producto, cantidad: producto.cantidad +1} : producto);
            } else {
                // No existe el producto, añadirlo.
                return [...prev, { id, nombre:  productoElegido.nombre, precioActual: productoElegido.precioActual, cantidad: 1}];
            }
        });
    };

    function handleBorrarProducto(id = 0) {
        setCarrito(prev => {
            const productoAEliminar = prev.find(p => p.id === id);
            if(productoAEliminar != undefined) {
                if(productoAEliminar.cantidad > 1) {
                    // Buscar y reducir la cantidad en 1.
                    return prev.map((producto) => producto.id === id ? {...producto, cantidad: producto.cantidad -1} : producto);
                } else {
                    // Buscar y eliminar el producto.
                    return prev.filter((producto) => producto.id !== id);
                }
            } else {
                console.log(`Error: El producto con ID ${id} no existe actualmente en el carrito.`);
                return [...prev];
            };
        });
    };

    function handleBotonOrdenar() {
        if(carrito.length === 0) {
            console.log("Error: No hay ningun producto en el carrito.");
            return;
        };

        // Generar mensaje URI de carrito:
        const mensaje = [
            "¡Hola! deseo ordenar esto:",
            "",
            ...carrito.map(producto => `x${producto.cantidad} ${producto.nombre} $${(producto.precioActual * producto.cantidad).toFixed(2)}`),
            "",
            `Por un Total de: ${carrito.reduce((t, p) => t + (p.precioActual * p.cantidad), 0).toFixed(2)} MXN`
        ].join("\n");

        //const mensajeURI = encodeURIComponent(mensaje);

        const linkWA = new URL(`https://wa.me/${telefonoCeleste}`);
        linkWA.searchParams.set("text", mensaje);

        console.log(`Link de orden generado: ${linkWA}`);
        console.log("Redirigiendo...");
        window.open(linkWA.toString(), "_blank");
        return;
    };

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
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center py-4 px-6 bg-header text-header">
                {/* Left */}
                <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
                    <div className="bg-orange-500 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                        <ShoppingBag />
                    </div>
                    <div>
                        <h1 className="font-black text-4xl text-white select-none"> El Bazar de <span className="text-yellow-300"> Celeste </span> </h1>
                        <h2 className="uppercase text-sm tracking-wider font-semibold"> Tarjetas · Electrónica · Coleccionables · Y Más </h2>
                    </div>
                </div>

                {/* Right */}
                <div className="flex gap-4 uppercase text-sm tracking-wider justify-center items-center font-semibold text-center lg:text-left">
                    <div className="flex items-center gap-2">
                        <Package size={18} />
                        <p> {catalogo.filter((p) => p.inventario > 0).length} Artículos </p>
                    </div>
                    <p> | </p>
                    <p> Precios en MXN · IVA Incluido </p>
                </div>
            </div>

            <div className="bg-orange-500 text-white py-2 px-6 font-semibold text-sm tracking-wider text-center lg:text-left">
                <p className="uppercase"> {`Catálogo Completo — Actualizado ${mesActual} ${añoActual}`} </p>
            </div>
        </header>


        {/* Catalogo de Productos */}
        <main className="p-6 flex flex-col justify-center items-center min-h-100">
            {/* Vista normal, catalogo */}
            <div className={`flex gap-8 flex-wrap justify-center w-full ${cargando || errorCatalogo ? 'hidden' : ''}`}>
                {
                    catalogo
                    .filter((producto) => producto.inventario > 0)
                    .map((p) => <Producto key={p.id} id={p.id} inventario={p.inventario} precioOriginal={p.precioOriginal} precioActual={p.precioActual} descripcion={p.descripcion} nombre={p.nombre} imagenURL={p.imagenURL} fnAñadir={handleAñadirProducto} fnBorrar={handleBorrarProducto} />)
                }
            </div>
            {/* Vista Cargando */}
            <div className={`flex flex-col gap-2 items-center justify-center ${cargando ? '' : 'hidden'}`}>
                <BounceLoader color="#dadada" />
                <h4 className="text-lg text-white"> Consultando catalogo ... </h4>
            </div>
            {/* Vista Error */}
            <div className={`flex flex-col gap-8 items-center justify-center text-white ${errorCatalogo ? '' : 'hidden'}`}>
                <MessageCircleQuestionMark size={80} />
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-lg font-bold"> No se ha podido consultar el catalogo </h4>
                    <p className="text-base"> Actualice la pagina o intentelo mas tarde. </p>
                </div>
            </div>
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
            <div className="">
                <h3 className="uppercase font-bold text-2xl text-center text-white"> Metodos de Pago </h3>
                <div className="flex flex-wrap gap-8 lg:gap-12 justify-center py-6 text-xl font-semibold">
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
        <footer className="bg-header text-header text-center py-8 uppercase text-xs px-6 lg:text-sm tracking-wider font-semibold">
            <p> &copy; El bazar de celeste · Todos los derechos reservados </p>
        </footer>

        {/* Control Sticky */}
        <CarritoSticky carrito={carrito} fnOrdenar={handleBotonOrdenar} />
    </>
}

export default App;