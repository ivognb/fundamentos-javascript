const obj1 = {}

obj1.nome = 'Carro'

console.log(obj1.nome);

function Obj(nome) {
    this.name = nome
    this.exec = function () {
        console.log('Executando...');
    }
}

const obj2 = new Obj('Mesa')
const obj3 = new Obj('Mesa')

console.log(obj2.name);
console.log(obj3.name);
obj2.exec()