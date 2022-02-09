/**
 * Bônus
 * 
 * 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
    Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
    
    Dicas:
    Uma string é um array de caracteres, então cada elemento do array é uma letra.
    O valor de cada numeral romano é:
 */

/**
* 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, 
* busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
* let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
*/

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// let vector = [1, 2,3,4,5,6,7,8,9,10];
function arrayOfNumbers(listNumber) {
	let listParNumber = [];
	for(let i = 0; i < listNumber.length; i += 1) {
		if (listNumber[i].length != undefined) {
				for(let j = 0; j < listNumber[i].length; j += 1) {
					if(listNumber[i][j] % 2 == 0) {
							listParNumber.push(listNumber[i][j]);
					}
				}
		}else {
				if(listNumber[i] % 2 == 0) {
					listParNumber.push(listNumber[i]);
				}
		}
	}

	return listParNumber;
}

console.log(arrayOfNumbers(vector));

