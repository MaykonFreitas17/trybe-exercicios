/** Para fixar - Parte I */

/** Para fixar
1 - Use o método forEach chamando a callback showEmailList para apresentar os emails */

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach((email) => {
  showEmailList(email);
});

/** Para Fixar - Parte II */

/** 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:*/
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => {
  // Adiciona seu código aqui
  const returnNumber = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return returnNumber;
}

console.log(findDivisibleBy3And5(numbers));

/** 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: */
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (names) => {
  // Adicione seu código aqui:
  const returnName = names.find((name) => name.length === 5);
  return returnName;
}

console.log(findNameWithFiveLetters(names));

/** 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista: */
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  const returnMusic = musicas.find((musica) => musica.id === id);
  return returnMusic;
}

console.log(findMusic('31031685'))

/** Para Fixar - Parte III */

/** 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso 
 * contrário, retorne false , use some ; */

 const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

 const hasName = (arr, name) => arr.some((element) => element === name);
 
 console.log(hasName(names2, 'Ana'));

 /** 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a 
  * idade maior ou igual a mínima e caso contrário false , use every ;
 */

  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => arr.every((element) => element.age >= minimumAge);
  
  console.log(verifyAges(people, 18));

/** Para Fixar - Parte IV */

/** 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente . */

// people.sort((a, b) => a.age - b.age);

// console.log(people);

/** 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente . */
/** Source: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a */
people.sort((a, b) => {
  if (a.age > b.age) return -1;
  if (a.age < b.age) return 1;
  return 0;
});
console.log(people);