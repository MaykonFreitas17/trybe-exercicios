const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, 
  // sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno = (object, key, value) => {
  return object[key] = value;
}

addTurno(lesson2, 'turno', 'tarde');

console.log(lesson2);

/** 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
const showKeys = (object) => { return Object.keys(object)}

console.log(showKeys(lesson2));

/** 3. Crie uma função para mostrar o tamanho de um objeto. */
const sizeObject = (object) => Object.keys(object).length;

console.log(sizeObject(lesson3));

/** 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
const showValues = (object) => { return Object.values(object); }

console.log(showValues(lesson2));

/** 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 
 * Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 
*/

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

console.log(allLessons);

/** 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

const countStudent = (object) => { 
  
  let sum = 0;
  const listKeys = Object.keys(object);

  for (let i = 0; i < listKeys.length; i += 1) {
    
    const values = Object.keys(object[listKeys[i]]);
    
    for (let j = 0; j < values.length; j += 1) {

      if (values[j] === 'numeroEstudantes') {
        sum += object[listKeys[i]][values[j]];
      }

    }
  }
  return sum;
}

console.log(countStudent(allLessons));

/** 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */

const getValueByNumber = (obj, index) => {
  const value = Object.values(obj);
  return value[index];
}

console.log(getValueByNumber(lesson1, 0));

/** 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, 
 * sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
 *  */

const verifyPair = (obj, key, value) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for(let i = 0; i < keys.length; i += 1) {
    if (keys[i] === key) {
      if (obj[keys[i]] === value) {
        return true;
      }
    }
  }

  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));