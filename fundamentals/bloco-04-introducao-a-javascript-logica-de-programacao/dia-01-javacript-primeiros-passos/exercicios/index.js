/*
    1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
        1.1 - Adição (a + b)
        1.2 - Subtração (a - b)
        1.3 - Multiplicação (a * b)
        1.4 - Divisão (a / b)
        1.5 - Módulo (a % b)
*/
function exercicio01() {
    //Constantes
    const a = 10, b = 20;

    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a + b);

}

//2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
function exercicio02() {
    const num1 = 10, num2 = 20;
    if (num1 > num2) {
        console.log(num1);
    }else {
        console.log(num2);
    }
}

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function exercicio03() {
    const num1 = 40, num2 = 30, num3 = 50;
    
    if (num1 > num2 & num1 > num3) {
        console.log(num1);
    }else if (num2 > num1 & num2 > num3) {
        console.log(num2);
    }else {
        console.log(num3);
    }
}

//4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário
function exercicio04() {
    const num1 = 0;
    
    if (num1 > 0) {
        console.log("Positivo!");
    }else if (num1 == 0) {
        console.log("Zero!");
    }else {
        console.log("Negativo");
    }
}

//5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function exercicio05() {
    
    const angle1 = 60,angle2 = 60, angle3 = 60;
    let sum_angles = (angle1 + angle2 + angle3);

    if(angle1 > 0 && angle2 > 0 && angle3 > 0) {
        if (sum_angles == 180) {
            console.log(true);
        }else {
            console.log(false);
        }
    }else {
        console.log("Erro, valor de algum dos angulos é negativo!");
    }
}

//6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
function exercicio06(chessPieces) {
    
    let piece = chessPieces.toLowerCase();
    switch(piece) {
        
        case "peão":
            console.log("Os Peões se movem somente para frente, uma casa por vez.");
        break;

        case "bispo":
            console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.");
        break;

        case "torre":
            console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.");
        break;

        case "cavalo":
            console.log("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.");
        break;

        case "rainha":
            console.log("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
        break;

        case "rei":
            console.log("O Rei pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor.");
        break;

        default:
            console.log("Peça de Xadrez não reconhecida!");
        break;
    }

}

/* 

    7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
        
        Porcentagem >= 90 -> A
        Porcentagem >= 80 -> B
        Porcentagem >= 70 -> C
        Porcentagem >= 60 -> D
        Porcentagem >= 50 -> E
        Porcentagem < 50 -> F
        
        O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

*/

function exercicio07(nota) {
    let porcentagem = (nota * 10)/100;
    
    if(porcentagem >= 0.9) {
        console.log("A");
    }else if (porcentagem < 0.9 && porcentagem >= 0.8) {
        console.log("B");
    }else if (porcentagem < 0.8 && porcentagem >= 0.7) {
        console.log("C");
    }else if (porcentagem < 0.7 && porcentagem >= 0.6) {
        console.log("D");
    }else if (porcentagem < 0.6 && porcentagem >= 0.5) {
        console.log("E");
    }else {
        console.log("F");
    }
}

/*  
    8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
        Bonus: use somente um if .
*/

function exercicio08() {
    const a = 9,b = 11,c = 13;
    if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        console.log(true);
    }else {
        console.log(false);
    }
}

/*
    9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
    Bonus: use somente um if .
*/

function exercicio09() {
    const a = 10,b = 14,c = 12;
    if(a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
        console.log(true);
    }else {
        console.log(false);
    }
}

/* 
    10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
            -> Atente que, sobre o custo do produto, incide um imposto de 20%.
            -> Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
            -> O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
                -> valorCustoTotal = valorCusto + impostoSobreOCusto
                -> lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

function exercicio10() {
    
    const custo = 30, valorVenda = 50;
    let valorVendasTotal;
    let totalVendas = 1000;
    
    if(custo > 0 && valorVenda > 0) {
        
        let custoDeProduto = custo * (20/100);
        
        custoDeProduto *= totalVendas;
        valorVendasTotal = valorVenda * totalVendas;

        let lucro = valorVendasTotal - custoDeProduto;
        
        console.log(lucro);
    
    }else {
        console.log("Erro! ... Valores Errado");
    }
}

