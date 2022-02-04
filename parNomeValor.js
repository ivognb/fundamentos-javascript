// par nome/valor

const saudacao = "Olá!" // contexto lexico

function exec() {
    const saudacao = "Opaa" // contexto lexico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor

const cliente ={
    nome: 'Gabriel',
    idade: 21,
    peso: 65,
    endereco: {
        logradouro: 'Rua central',
        numero: 127
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);