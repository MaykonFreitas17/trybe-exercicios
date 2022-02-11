const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele; (OK)
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador. (OK)
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
    // As outras divs estavam sem a class TECH

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener("click", addClassTech);
secondLi.addEventListener("click", addClassTech);
thirdLi.addEventListener("click", addClassTech);

function addClassTech(event) {
    let current = event.target;
    if (firstLi.className !== 'tech' && secondLi.className !== 'tech' && thirdLi.className !== 'tech') {
        current.className = 'tech';
    }else {
        if (current.className === 'tech') {
            current.className = '';
        }
    }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let allListItem = document.querySelectorAll('li');
input.addEventListener('keyup', function () {
    for (let i = 0; i < allListItem.length; i += 1) {
        if (allListItem[i].className === 'tech') {
            allListItem[i].innerText = input.value;
        }
    }
}) ;

input.addEventListener('click', function () {
    input.value = '';
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function(){
    window.location.href = "https://maykonfreitas17.github.io/";
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function(){
    myWebpage.style.color = '#807A78';
});
myWebpage.addEventListener('mouseout', function(){
    myWebpage.style.color = 'white';
});
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.