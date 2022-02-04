const resultado = nota => nota >= 7 ? 'Aprovado' : 'reprovado' // ? significa 'if' e : significa 'else'

console.log(resultado(6));
console.log(resultado(8));

/* outra forma de escrever a função

const resultado = nota =>{
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/