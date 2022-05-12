const math = require('../src/index');

describe('1º Exercicio - Parte I', () => {
  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    generatorNumber = jest.fn().mockReturnValue(10);
    generatorNumber();
    // Verificando se a função foi chamada
    expect(generatorNumber).toHaveBeenCalled();
    // Verificando se a função retorna o valor 10
    expect(generatorNumber()).toBe(10);
    // Verificando se a função é chamada pelo menos 1 vez
    expect(generatorNumber).toHaveBeenCalledTimes(2);
  });
});

describe('2º Exercicio - Parte 1', () => {
  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    math.generatorNumber = jest.fn().mockImplementationOnce((a, b) => (a / b));
    expect(math.generatorNumber(10, 5)).toBe(2);
    expect(math.generatorNumber).toHaveBeenCalledTimes(1);
    expect(math.generatorNumber).toHaveBeenCalled();
    expect(math.generatorNumber).toHaveBeenCalledWith(10, 5);
  });
});

describe('3º Exercicio - Parte 1', () => {
  it('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros.', () => {
    math.generatorNumber = jest.fn().mockImplementationOnce((a, b, c) => (a * b * c));
    expect(math.generatorNumber(1, 1, 1)).toBe(1);
    expect(math.generatorNumber).toHaveBeenCalledTimes(1);
    expect(math.generatorNumber).toHaveBeenCalled();
    expect(math.generatorNumber).toHaveBeenCalledWith(1, 1, 1);
  });

  it('Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.', () => {
    math.generatorNumber.mockReset();
    math.generatorNumber = jest.fn().mockImplementationOnce((number) => (number * 2));
    expect(math.generatorNumber(5)).toBe(10);
    expect(math.generatorNumber).toHaveBeenCalledTimes(1);
    expect(math.generatorNumber).toHaveBeenCalled();
    expect(math.generatorNumber).toHaveBeenCalledWith(5);
  });
});

describe('4º Exercicio - Parte 1', () => {
  it('Faça o mock das funções para com os seguintes casos.', () => {
    // Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
    const firstFunction = jest.spyOn(math, "stringToUpperCase").mockImplementation((string) => string.toLowerCase());

    // Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string
    const secondFunction = jest.spyOn(math, "stringReturnFirstLetter").mockImplementation((string) => string[string.length - 1]);

    // Implemente, na terceira função: ela deve receber três strings e concatená-las.
    const thirdFunction = jest.spyOn(math, "concatenateStrings").mockImplementationOnce((str1, str2, str3) => str1 + str2 + str3);

    // B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
    expect(firstFunction('Hello, World')).toBe('hello, world');
    expect(math.stringToUpperCase).toHaveBeenCalledTimes(1);
    expect(math.stringToUpperCase).toHaveBeenCalledWith('Hello, World');

    expect(secondFunction('Hello, World')).toBe('d');
    expect(math.stringReturnFirstLetter).toHaveBeenCalledTimes(1);
    expect(math.stringReturnFirstLetter).toHaveBeenCalledWith('Hello, World');

    expect(thirdFunction('Hello, ', 'World', ' in JS')).toBe('Hello, World in JS');
    expect(math.concatenateStrings).toHaveBeenCalledTimes(1);
    expect(math.concatenateStrings).toHaveBeenCalled();
    expect(math.concatenateStrings).toHaveBeenCalledWith('Hello, ', 'World', ' in JS');

  });

  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    math.stringToUpperCase.mockRestore();
    expect(math.stringToUpperCase('Hello, World')).toBe('HELLO, WORLD');
  });

});
