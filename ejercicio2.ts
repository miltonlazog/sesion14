function invertirColeccion<T>(coleccion: T[]): T[] {
    return [...coleccion].reverse();
}

const codigodeDespacho: string[] = ["D1-001", "D1-002", "D1-003", "D1-004"];
const codigosInvertidos = invertirColeccion(codigodeDespacho);
const montosFactura: number[] = [25.5, 40.0, 12.75, 100.00];
const montosInvertidos = invertirColeccion(montosFactura);

console.log(`
    Codigos:
    Original: ${codigodeDespacho}
    Invertido: ${codigosInvertidos}
    
    Montos:
    Original: ${montosFactura}
    Invertido: ${montosInvertidos}`);