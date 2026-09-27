function obtenerPrimerElemento(coleccion) {
    return coleccion[0];
}
const nombresEnEspera = ["Carlos", "María", "José", "Ana"];
const primerNombre = obtenerPrimerElemento(nombresEnEspera);
const correlativosTickets = [101, 102, 103, 104];
const primerCorrelativo = obtenerPrimerElemento(correlativosTickets);
console.log(`
    Primer nombre en espera: ${primerNombre}
    Tipo: ${typeof primerNombre}
    Primer correlativo: ${primerCorrelativo}
    Tipo: ${typeof primerCorrelativo}
    `);
export {};
