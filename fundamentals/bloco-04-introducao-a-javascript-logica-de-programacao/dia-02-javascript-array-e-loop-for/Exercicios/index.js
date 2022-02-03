// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // // #1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// // for(number of numbers) {
// //     console.log(number);
// // }

// // //#2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// // let sum = 0;
// // for(number of numbers) {
// //     sum += number;
// // }
// // console.log('SOMA:', sum);

// // //#3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// //     //#3.1 - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// //     //#4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// // sum = 0;
// // let media;
// // for(number of numbers) {
// //     sum += number;
// // }

// // media = sum/(numbers.length);
// // console.log('Média:', media);
// // if (media >= 20) {
// //     console.log("valor maior que 20");
// // }else {
// //     console.log("valor menor ou igual a 20");
// // }

// //#5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let maior = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (maior < numbers[i]) {
//         maior = numbers[i];
//     }
// }    
// console.log('Maior:',maior);

// //#6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let contador = 0;
// for (number of numbers) {
//     if (number % 2 == 1) {
//         contador++;
//     } 
// }
// if (contador > 0) {
//     console.log('Total de impares:', contador);
// }else {
//     console.log("nenhum valor ímpar encontrado");
// }

// //#7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let menor = null;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (i <= 0) {
//         menor = numbers[i];
//     }

//     if (menor > numbers[i]) {
//         menor = numbers[i];
//     }
// }

// console.log('Menor:', menor);

// //#8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// let listaNumeros = [];
// for (let i = 1; i <= 25; i += 1) {
//     listaNumeros.push(i);
// }
// console.log(listaNumeros);

// //#9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// let listaDivisao = [];
// for (number of listaNumeros) {
//     console.log(number / 2);
// }

//Bônus
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }


// console.log('Forma Crescente', numbers);

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }


// console.log('Forma Decrescente', numbers);

/* 
    Agora crie um novo array a partir do array numbers , sem perdê-lo. 
    Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
    Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). 
    Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. 
    Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . 
    O resultado deve ser o array abaixo:
    
    [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
*/

let newListNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
    let newNumber = 0;
    
    if (numbers[i + 1] != undefined) {
        newNumber = numbers[i] * numbers[i + 1];
    }else {
        newNumber =  numbers[i] * 2;
    }
    
    newListNumbers.push(newNumber);
}

console.log('Novo Array:', newListNumbers);