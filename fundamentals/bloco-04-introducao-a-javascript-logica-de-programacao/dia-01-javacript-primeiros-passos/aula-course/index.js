//crianção de variaveis - palavra_chave(var - let) nome_variavel/nomeVariavel = valor_da_variavel
let age = 20;
let fullName = "Maykon Freitas";

//Constantes
const myAge = 20;
const girlFriend = "Tainá Oliveira";

//Exibindo informações no terminal (OUTPUT)
console.log(fullName);
console.log(age);

function forFixer() {
    
    const myName = "Maykon Freitas";
    const birthCity = "Russas-CE";
    let birthYear = 2002;

    console.log(myName);
    console.log(birthCity);
    console.log(birthYear);

    birthYear = 2030
    console.log(birthYear);

}

function forFixer02() {
    
    const result = 65;
    
    if (result >= 80) {
        console.log("Parabéns, você foi aprovada(o)!");
    }else if(result < 80 && result >=60) {
        console.log("Você está na nossa lista de espera");
    }else {
        console.log("Você foi reprovada(o)");
    }
}

function forFixer03() {
    
    const result = "lista";
    
    switch (result) {
        case "aprovado":
            console.log("Parabéns, você foi aprovada(o)!");
            break;
        case "lista":
            console.log("Você está na nossa lista de espera");
            break;
        case "reprovado":
            console.log("Você foi reprovada(o)");
            break;
        default:
            console.log("ERRO 404");
            break;
    }
}

forFixer(); //Aula 01
forFixer02();
forFixer03();
