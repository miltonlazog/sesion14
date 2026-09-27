function obtenerPrimerElemento<T>(coleccion: T[]): T {
  return coleccion[0];
}

const nombresEnEspera: string[] = ["Carlos", "María", "José", "Ana"];
const primerNombre = obtenerPrimerElemento(nombresEnEspera);
const correlativosTickets: number[] = [101, 102, 103, 104];
const primerCorrelativo = obtenerPrimerElemento(correlativosTickets);

console.log(`
    Primer nombre en espera: ${primerNombre}
    Tipo: ${typeof primerNombre}
    Primer correlativo: ${primerCorrelativo}
    Tipo: ${typeof primerCorrelativo}
    `)