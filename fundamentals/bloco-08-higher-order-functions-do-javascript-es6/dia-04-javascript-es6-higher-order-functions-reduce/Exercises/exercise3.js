const books = require('./db');

/** 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. */

const expectedResult = 43;

function averageAge(arr) {
  // escreva seu código aqui
  const result = arr.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0);
  return result/arr.length;
}

console.log(averageAge(books));