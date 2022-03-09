/** Agora a prática */

/** 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
 */
const newPersonHired = (completName) => {
  let newEmail = completName.replace(' ','_').toLowerCase();
  const obj = {
    name: completName,
    email: `${newEmail}@trybe.com`,
  }
  return obj;
}

const newEmployees = (func, name) => {
  const employees = {
    id1: func(name),
  };
  return employees;
};

console.log(newEmployees(newPersonHired, 'Maykon Freitas'));

/** 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). 
*/

const verifyNumbers = (number1, number2) => {
  return number1 === number2;
}

const checkDraw = (numberBet, verify) => {
  const numberDraw = Math.floor(Math.random() * 6);
  if (verify(numberBet, numberDraw)) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(checkDraw(5, verifyNumbers));

/** 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. 
*/

const RIGHT_ANSWERS =   ['A',  'C',  'B', 'D', 'A', 'A', 'D',   'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswer = (value1, value2) => {
  if (value1 === value2) {
    return 1;
  } else if (value1 !== value2 && value2 !== 'N.A') {
    return -0.5;
  }
  return 0;
}

const resultCalculate = (feedback, studentAnswers, verify) => {
  let sumPoints = 0;
  for (let i = 0; i < feedback.length; i += 1) {
    sumPoints += verify(feedback[i], studentAnswers[i]);
  }
  return sumPoints;
}

console.log(resultCalculate(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswer));