const valores = [6.7, 7.8, 8.9, 9.0] 
console.log(valores[1], valores[2]);
console.log(valores[4]);

valores[4] = 10
console.log(valores[4]);
console.log(valores);
console.log(valores.length);

valores.push({id: 5}, false, null, 'teste')
console.log(valores);

console.log(valores.pop());
delete valores[6]
console.log(valores);

console.log(typeof valores);