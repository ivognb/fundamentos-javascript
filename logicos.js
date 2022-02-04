function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || é a operação pra 'ou'
    const comprarTv50 = trabalho1 && trabalho2 // && é o operador pra 'e'
    // const comprarTv32 = trabalho1 = !!(trabalho1 ^ trabalho2) // operador 'ou exclusivo'
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // ! é o operador unitario de 'não' 

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true));

console.log(compras(true, false));

console.log(compras(false, true));

console.log(compras(false, false));