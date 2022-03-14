/** 1 - Dada uma matriz, transforme em um array. */

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const numbers = [50, 85, -30, 3, 15];

function flatten(arr) {
  // escreva seu código aqui
  const list = [];
  const newArray = arr.reduce((acc, curr) => {

    return acc.concat(curr, list);
  });

  return newArray;
}

console.log(flatten(arrays));