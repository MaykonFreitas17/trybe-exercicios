// arquivo script.js
// 1. Acesse o elemento elementoOndeVoceEsta
let whereYouAre = document.querySelector('#pai').children[1];
console.log(whereYouAre);

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let fatherElement = whereYouAre.parentNode;
fatherElement.style.background = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let firstChildren = document.querySelector('#primeiroFilhoDoFilho');
firstChildren.innerText = 'Hello World';

// 4. Acesse o primeiroFilho a partir de pai .
let firstChildToFather = document.querySelector('#pai').firstElementChild;
console.log(firstChildToFather);

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let outherFirstChildren = whereYouAre.previousElementSibling;
console.log(outherFirstChildren);

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let nodeWarning = whereYouAre.nextSibling;
console.log(nodeWarning);

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let threeChildren = whereYouAre.nextElementSibling;
console.log(threeChildren);

// 8. Agora acesse o terceiroFilho a partir de pai .
let father = document.querySelector('#pai').children;
console.log(father[2]);
father = document.querySelector('#pai')
//PARTE II - CRIANDO ELEMENTOS
// 1. Crie um irmão para elementoOndeVoceEsta .
let newBrother = document.createElement('section');
newBrother.id = 'elementoOndeVoceEsta2';
father.appendChild(newBrother);

// 2. Crie um filho para elementoOndeVoceEsta .
let childWhereYouAre = document.createElement('div');
childWhereYouAre.className = 'children';
whereYouAre.appendChild(childWhereYouAre);

// 3. Crie um filho para primeiroFilhoDoFilho .
let firstChildChildChild = document.createElement('div');
firstChildChildChild.className = 'primeiroFilhoDoFilhoDoFilho';
whereYouAre.firstElementChild.appendChild(firstChildChildChild);

// 4. A partir desse filho criado, acesse terceiroFilho .
let threeChild = firstChildChildChild.parentNode.parentElement;
console.log(threeChild.nextElementSibling);
