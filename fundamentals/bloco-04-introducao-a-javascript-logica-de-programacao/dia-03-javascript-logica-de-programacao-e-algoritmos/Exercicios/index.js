//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
    //O fatorial é representado pelo sinal ! => 4! = 4 x 3 x 2 x 1 = 24
    //Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

    // let number = 2;
    // let factorial = 1;
    // for (let i = number; i > 0; i -= 1) {
    //     factorial *= i;
    // }
    // console.log(factorial);

/*
    2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 
    Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
*/
    // let word = 'tryber';
    // let newWord = '';
    // for (let i = 1; i <= word.length; i += 1) {
    //     //newWord += word[i - 1];
    //     newWord += word[word.length - i];
    // }
    // console.log(newWord);

/*
    3 - Considere o array de strings abaixo:

        let array = ['java', 'javascript', 'python', 'html', 'css'];

    Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

*/

    // let array = ['java', 'javascript','python','html', 'css'];

    // let larger = 0;
    // let small = 0;
    
    // let wordLarger;
    // let wordSmall;
    
    // for(let i = 0; i < array.length; i += 1) {
    //     let count = 0;
        
    //     for (let j = 1; j <= array[i].length; j += 1) {
    //         count += 1;
    //     }

    //     if (larger < count) {
    //         larger = count;
    //         wordLarger = array[i];
    //     }else {
    //         if (small > count || small <= 0) {
    //             small = count;
    //             wordSmall = array[i];
    //         }
    //     }
    // }

    // console.log(`Maior Palavra: ${wordLarger}`);
    // console.log(`Menor Palavra: ${wordSmall}`);


/*/ 
    4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo 
    que retorne o maior número primo entre 0 e 50.
*/

let number = 50;
let primoLarger = 0;
let primeNumbers = [];

for(let i = 0; i <= number; i += 1) {
    let count = 0;
    for (let j = 1; j < number; j += 1) {
        if (i % j == 0) {
            count++;
        }
    }

    if (i != 1 && count <= 2) {
        if(primoLarger < i) {
            primeNumbers.push(i);
            primoLarger = i;
        } 
    }
}

console.log(`Todos os número primos de 0 até ${number}: ${primeNumbers}`);
console.log(`O Maior Número Primo: ${primoLarger}`);

//Bônus
/**
 * 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
        n = 5

        *****
        *****
        *****
        *****
        *****
 */

let n = 5;
for(let i = 0; i < n; i += 1) {
    let string = '';
    for(let j = 0; j < n; j += 1) {
        string += '*';
    }
    console.log(string);
}   

/**
 * 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
        n = 5

        *
        **
        ***
        ****
        *****
 */

for (let i = 1; i <= n; i += 1) {
    let string = ''
    for(let j = 1; j <= i; j += 1) {
        string += '*';
    }
    
    console.log(string);
}

/**
 * 3- Agora inverta o lado do triângulo. Por exemplo:
        *
       **
      ***
     ****
    *****
 */

    // for (let i = 1; i <= n; i += 1) {
    //     string = '';
    //     for(let j = n; j >= 0; j -= 1) {
    //         if (j > j - i) {
    //             string += '';
    //         }else {
    //             string += '*';
    //         }
    //     }

    //     console.log(string);
    // }

/**
 * 
    4- Depois, faça uma pirâmide com n asteriscos de base:
      *
     ***
    *****

 */

for (let i = 0; i < n; i += 1) {
    let string = ''
    for(let j = 0; j < n; j += 1) {
        if (j % 2 == 1) {
            string += '*';
        }
    }
    
    console.log(string);
}