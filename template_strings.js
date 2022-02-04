const nome = "Ivo"
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá ${nome}!!!`

console.log(concatenacao, template);

console.log(`1 + 1 = ${ 1 + 1 }`); 

function hello(name='Chris') {
    console.log(`Hello ${name}!`);
  }
  
  hello('Ari'); // Hello Ari!
  hello();      // Hello Chris!