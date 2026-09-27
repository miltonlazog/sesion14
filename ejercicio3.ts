function identidad<T>(valor: T): T{
    return valor;
}

const duiInferido = identidad("03678524-9");
const carnetInferido = identidad("U20240931")
const solvenciaInferida = identidad(true);

const duiExplicito = identidad<string>("09867223-1");
const carnetExplicito = identidad<string>("U20260789");
const solvenciaExplicita = identidad<boolean>(true);

console.log(`
    DUI (inferido): ${duiInferido}, tipo: ${typeof duiInferido}
    Carnet (inferido): ${carnetInferido}, tipo: ${typeof carnetInferido}
    Solvencia (inferida): ${solvenciaInferida}, Tipo: ${typeof solvenciaInferida}

    DUI (explicito): ${duiExplicito}, tipo: ${typeof duiExplicito}
    Carnet (explicito): ${carnetExplicito}, tipo: ${typeof carnetExplicito}
    Solvencia (explicito): ${solvenciaExplicita}, Tipo: ${typeof solvenciaExplicita}

        `);