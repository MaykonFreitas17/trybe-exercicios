const books = require('./db');

/** 2 - Crie uma string com os nomes de todas as pessoas autoras. */
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(arr) {
  // escreva seu código aqui
  const action = arr.reduce((acc, curr, index) => acc.concat(`${curr.author.name}, `, ''), '');
  return action;
}

console.log(reduceNames(books));