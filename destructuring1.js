const pessoa = {
    nome: 'Ivo',
    idade: 21,
    endereco: {
        logradouro: 'Rua coronel',
        numero: 614
    }
}

const { nome, idade } = pessoa

console.log(nome, idade);

const { nome: name, idade: age } = pessoa

console.log(name, age);

const { endereco: { logradouro, numero } } = pessoa

console.log(logradouro+',', numero);