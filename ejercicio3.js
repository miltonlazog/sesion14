function identidad(valor) {
    return valor;
}
const duiInferido = identidad("03678524-9");
const carnetInferido = identidad("U20240931");
const solvenciaInferida = identidad(true);
const duiExplicito = identidad("09867223-1");
const carnetExplicito = identidad("U20260789");
const solvenciaExplicita = identidad(true);
console.log(`
    DUI (inferido): ${duiInferido}, tipo: ${typeof duiInferido}
    Carnet (inferido): ${carnetInferido}, tipo: ${typeof carnetInferido}
    Solvencia (inferida): ${solvenciaInferida}, Tipo: ${typeof solvenciaInferida}

    DUI (explicito): ${duiExplicito}, tipo: ${typeof duiExplicito}
    Carnet (explicito): ${carnetExplicito}, tipo: ${typeof carnetExplicito}
    Solvencia (explicito): ${solvenciaExplicita}, Tipo: ${typeof solvenciaExplicita}

        `);
export {};
