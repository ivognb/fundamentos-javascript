//função sem retorno

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(10, 2, 3, 6, 7)

//função com retorno

function soma(a, b = 2){
    return a + b
}

console.log(soma(2, 3));
console.log(soma(2));