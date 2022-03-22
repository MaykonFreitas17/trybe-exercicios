const { uppercase, getPokemonDetails } = require('./exercises');

describe('Exercicio 7º', (done) => {
  it('Verificando se sai o log certo', (done) => {
    uppercase('hello world', (str) => {
      try {
        expect(str).toBe('HELLO WORLD');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

describe('Exercicio 9º', (done) => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const error = new Error('Não temos esse pokémon para você :(');
    const callback = (err, result) => {
      expect(err).toEqual(error);
      done();
    };
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    const callback = (err, result) => {
      expect(result).toBe(expectedString);
      done();
    };
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
})

beforeEach(() => console.log('1 - beforeEach - (1º)')); // 1º
afterEach(() => console.log('1 - afterEach - (6º)')); // 6º

test('', () => console.log('1 - test - (2º)')); // 2º

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach - (3º)')); // 3º
  afterEach(() => console.log('2 - afterEach - (5º)')); // 5º

  test('', () => console.log('2 - test - (4º)')); // 4º
});