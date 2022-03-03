const btnClick = document.querySelector('#btn-click');
const countClick = document.querySelector('#count-clicks');

let clickCount = 0;

btnClick.addEventListener('click', (event) => {
    clickCount += 1;
    countClick.innerText = `Quantidade de Clique: ${clickCount}`;
});