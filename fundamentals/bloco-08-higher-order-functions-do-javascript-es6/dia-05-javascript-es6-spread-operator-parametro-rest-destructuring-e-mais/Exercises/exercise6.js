
/** 
 * 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, 
 * cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função 
 * toObject que, dada uma lista, retorna um objeto representando o carro:
 * Dica: use array destructuring e abbreviation object literal . 
 * */

const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const palio = ['Palio', 'Fiat', 2019];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([prop1, prop2, prop3]) => ({prop1, prop2, prop3});

console.log(toObject(shelbyCobra));