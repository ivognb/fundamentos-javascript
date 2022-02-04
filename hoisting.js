console.log('a =', a);
var a = 2
console.log('a =', a);

//hoisting é um comportamento padrão do js pra mover declarações para o topo
var b
console.log('b =', b);
b = 3
console.log('b =', b);


//hoisting não se aplica a let
console.log('c =', c);
let c = 4
console.log('c =', c);