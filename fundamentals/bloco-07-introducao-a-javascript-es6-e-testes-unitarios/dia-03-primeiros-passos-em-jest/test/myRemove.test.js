const myRemove = require('../scripts/myRemove');

/**
 * 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
    Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

// describe('2º Exercício - Função myRemove', () => {
it('Se myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
  const newArray = [1, 2, 4];
  expect(myRemove([1, 2, 3, 4], 3)).toEqual(newArray);
});

it('Se myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 4]', () => {
  const newArray = [1, 2, 3, 4];
  expect(myRemove([1, 2, 3, 4], 3)).not.toBe(newArray);
});

it('Se myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 4]', () => {
  const newArray = [1, 2, 3, 4];
  expect(myRemove([1, 2, 3, 4], 5)).toEqual(newArray);
});