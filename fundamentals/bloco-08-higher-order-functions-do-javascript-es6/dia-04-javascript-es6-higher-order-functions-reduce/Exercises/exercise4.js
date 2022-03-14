const books = require('./db');

/** 4 - Encontre o livro com o maior nome. */

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook(arr) {
  // escreva seu código aqui
  const biggestName = arr.reduce((acc, curr) => {
    if (curr.name.length > acc) {
      return curr;
    }
    return acc;
  }, '');

  return biggestName;
}

console.log(longestNamedBook(books));