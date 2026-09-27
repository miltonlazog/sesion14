type reporteProceso = {
    cantidadElementos: number;
    confirmacion: string;
};

function generarReporte<T>(coleccion: T[]): reporteProceso {
  return {
    cantidadElementos: coleccion.length,
    confirmacion: `Se procesaron ${coleccion.length} elemento(s) correctamente.`
  };
}

const codigoBarras: string[] = ["012345678901", "098765432101", "246801357910"];
const reporteCodigos = generarReporte(codigoBarras);

const listaDescripciones: string[] = ["Pan Sinai", "Coca Cola 2.5 L", "Aceite Mazola"];
const reporteDescrip = generarReporte(listaDescripciones);

const stock: boolean[] = [true, false, true];
const reporteStock = generarReporte(stock);

console.log("Codigo de Barras:", reporteCodigos);
console.log("Descripcion:", reporteDescrip);
console.log("Stock:", reporteStock);