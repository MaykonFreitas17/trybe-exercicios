myFizzBuzz = require('../scripts/myFizzBuzz');

/**
 * 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , 
 * retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio 
 * número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
 * 
    - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

describe("3º Exercicio - Função myFizzBuzz", () => {

  it("Se com um número divisível por 3 e 5 o retorno é fizzbuzz", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  it("Se com um número divisível por 3 e o retorno é fizz", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });

  it("Se com um número divisível por 5 e o retorno é fizz", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });

  it("Se com um número não divisível por 3 e 5 o retorno é o próprio número", () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  it("Se com um valor não númerico o retorno é false", () => {
    expect(myFizzBuzz('3')).toBeFalsy();
  });

});
