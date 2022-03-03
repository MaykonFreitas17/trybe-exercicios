/** 
 * Parte II
    Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
    
    1. Crie uma função que receba um número e retorne seu fatorial.
    Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/

const factorialNumber = (number) => {
	let factorial = 1;
	if (number === 0) { return 1; }
	for (let i = 1; i <= number; i += 1) {
			factorial *= i;
	}
	return factorial;
}

console.log(factorialNumber(6));

/** Bônus */
const factorialNumberBonus = (number) => {
	return number <= 1 ? 1 : number * factorialNumberBonus(number - 1);
}	

console.log(factorialNumberBonus(5));

/**
* 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

const longestWord = (phase) => {
	const words = phase.split(' ');
	let higherNumber = 0;
	let word;
	for (let i = 0; i < words.length; i += 1) {
		if (words[i].length > higherNumber) {
			higherNumber = words[i].length;
			word = words[i];
		}
	}
	return word;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/**
 * 3. Crie uma página que contenha:
	Um botão ao qual será associado um event listener ;
	Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
	Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

/**
 * 	4. Crie um código JavaScript com a seguinte especificação:
 * 		Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela 
 * 		letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. 
 * 		Sua função deve retornar essa nova string .
			Exemplo:
			String determinada: "Tryber x aqui!"
			Parâmetro: "Bebeto"
			Retorno: "Tryber Bebeto aqui!"
 */

const changingLetter = (string, word) => {
	let newString = '';
	for (let i = 0; i < string.length; i += 1) {
		if (string[i] === 'x') {
			newString += word;
		} else {
			newString += string[i];
		}
	}
	return newString;
}

console.log(changingLetter('Tryber x aqui!', 'Tainá'));

const mySkills = ['HTML', 'JavaScript', 'Game Maker Studio 2', 'Unity'];

const addString = (func, skills) => {
	let newString = `${func} Minhas cinco principais habilidades são:`;
	for (let i = 0; i < skills.length; i += 1) {
		newString += ` ${skills[i]}; `;
	}
	return newString;
}

console.log(addString(changingLetter('Tryber x aqui!', 'Tainá'), mySkills));

