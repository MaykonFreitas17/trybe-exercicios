/** 
* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
* Dica: use parâmetro rest .*/

// escreva sum abaixo
const sum = (...args) => args.reduce((sum, val) => sum + val);

console.log(sum(1,1,3,6,7,7));

