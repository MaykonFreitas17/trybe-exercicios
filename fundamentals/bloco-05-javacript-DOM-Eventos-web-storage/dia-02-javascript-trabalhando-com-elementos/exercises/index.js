// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.querySelector('body');
let bodyTitleH1 = document.createElement('h1');
bodyTitleH1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(bodyTitleH1);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;
let mainContent = document.createElement('main');
mainContent.className = 'main-content';
body.appendChild(mainContent);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paragraphCenterContent = document.createElement('p');
paragraphCenterContent.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius consequat nunc, quis varius enim dictum eu. Nullam vel metus vel tellus bibendum vehicula.';
centerContent.appendChild(paragraphCenterContent);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let imageLeftContent = document.createElement('img');
imageLeftContent.className = 'small-image';
imageLeftContent.src = 'https://picsum.photos/200';
leftContent.appendChild(imageLeftContent);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let listRightContent = document.createElement('ul');
let number = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let i = 0; i < number.length; i += 1) {
    let listItemRightContent = document.createElement('li');
    listItemRightContent.innerText = number[i];
    listRightContent.appendChild(listItemRightContent);
}
rightContent.appendChild(listRightContent);

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
let textH3 = ['Tainá', 'Oliveira', 'Lima'];
for (let i = 0; i < 3; i += 1) {
    let subTitlesH3 = document.createElement('h3');
    subTitlesH3.innerHTML = textH3[i];
    mainContent.appendChild(subTitlesH3);
}

