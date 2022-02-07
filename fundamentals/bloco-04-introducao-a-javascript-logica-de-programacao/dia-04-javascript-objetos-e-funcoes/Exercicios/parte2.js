/**
 * Parte II - Funções
 */

/**
 * 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
 */

function verificaPalindrome(palavra)  {
    count = 0;
    countMax = palavra.length;
    
    for (let i = 0; i < palavra.length; i += 1) {
        
        if(palavra[i] == palavra[palavra.length - (i + 1)]) {
            count += 1;
        }
    }

    if(count == countMax) {
        return true;
    }else {
        return false;
    }
}

console.log(verificaPalindrome('java'));

/**
 * 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/

let intergerNumber = [2, 3, 6, 12, 7, 10, 1];

function verificarMaiorInteiros(listNumbers) {
    
    let largerNumber = 0;
    
    for(let number of listNumbers) {
        if (largerNumber < number) {
            largerNumber = number;
        }
    }

    return listNumbers.indexOf(largerNumber);
}

console.log(verificarMaiorInteiros(intergerNumber));

/**
 * 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
 */

function verificarMenorInteiros(listNumbers) {
    
    let smallNumber = 0;
    
    for(let number of listNumbers) {
        if (smallNumber > number || smallNumber <=0) {
            smallNumber = number;
        }
    }

    return listNumbers.indexOf(smallNumber);
}

console.log(verificarMenorInteiros(intergerNumber));

/**
 * 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
 */

names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Monkey D. Luffy'];

function verificandoMaiorNome(listNames) {
    let biggestName = '';
    
    for (let name of listNames) {
        
        if(biggestName.length < name.length) {
            biggestName = name;
        }
    }

    return biggestName;
}

console.log(verificandoMaiorNome(names));

/**
 * 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
 */

let outherInteger = [2, 3, 2, 5, 8, 2, 3]; 

function verificandoInteiroMaisOcorrente(listInterger) {
    
    let listaOcorrencia = [];
    let maiorOcorrencia = {interger: 0, ocorrencia: 0};

    for(let interger of listInterger) {
        let count = 0;
        for (let interger2 of listInterger) {
            if (interger == interger2) {
                count += 1;
            }
        }
        listaOcorrencia.push({
            interger: interger,
            ocorrencia: count
        })
    }

    for (let i = 0; i < listaOcorrencia.length; i += 1) {
        
        if (maiorOcorrencia.ocorrencia < listaOcorrencia[i].ocorrencia) {
            maiorOcorrencia.interger = listaOcorrencia[i].interger;
            maiorOcorrencia.ocorrencia = listaOcorrencia[i].ocorrencia;
        }
    }

    return maiorOcorrencia.interger;
}

console.log(verificandoInteiroMaisOcorrente(outherInteger));

/**
 * 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N
 */

function somatorioNatural(nutaralNumber) {
    let somatorio = 0;
    
    for (let i = 1; i <= nutaralNumber; i += 1) {
        somatorio += i;
    }

    return somatorio;
}

console.log(somatorioNatural(5));

/**
 * 7 -  Crie uma função que receba uma string word e outra string ending . 
 *      Verifique se a string ending é o final da string word . 
 *      Considere que a string ending sempre será menor que a string word .
 */

function verificarEndingString(string, stringEnding) {
    if (string.length > stringEnding.length) {
        
        let count = 0;
        
        for (let i = 0; i < stringEnding.length; i += 1) {
            
            if (string[string.length - stringEnding.length + i] == stringEnding[i]) {
                count += 1;
            }   
        }

        if (count == stringEnding.length) {
            return true
        }

        return false;
    }
    
    return 'ERRO 404';
}

console.log(verificarEndingString('Maykon', 'kon'));