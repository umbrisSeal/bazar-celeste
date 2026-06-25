
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
            <div>
                <p> Titulo </p>
            </div>
            <div className="bg-header-banner text-white py-2 px-6 font-semibold text-xs tracking-wider">
                <p> {`Catálogo Completo — Actualizado ${mesActual} ${añoActual}`.toUpperCase()} </p>
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