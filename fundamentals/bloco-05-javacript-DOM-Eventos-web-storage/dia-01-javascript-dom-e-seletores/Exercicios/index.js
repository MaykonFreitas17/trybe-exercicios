/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
	Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
	Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
	Crie uma função que mude a cor do quadrado vermelho para branco.
	Crie uma função que corrija o texto da tag <h1>.
	Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
	Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function switchingParagraph(id, text) {
	let paragraph = document.getElementById(id);
	paragraph.innerText = text;
	return paragraph;
}

switchingParagraph('my-description', 'Quero está podendo trabalhar na minha área(Programação) e podendo focar em outros objetivos de vida como, por exemplo, investindo na minah carreira de Game Dev')

function switchingBackground(selector, color) {
	let background = document.getElementsByClassName(selector);
	background[0].style.background = color;
	return background;
}

switchingBackground('main-content', 'rgb(76,164,109)');

function switchingBackgroundColor(selector, color) {
	let background = document.getElementsByClassName(selector);
	background[0].style.background = color;
	return background;
}

switchingBackgroundColor('center-content', 'white');

function switchingTitles(selector, newText) {
	let title = document.getElementsByClassName(selector);
	title[0].innerText = newText;
	return title;
}

switchingTitles('title', 'Exercício 5.1 - JavaScript');

function paragraphToUpperCase(selectors) {
	let paragraphs = document.getElementsByTagName(selectors);
	for (let i = 0; i < paragraphs.length; i += 1) {
		paragraphs[i].style.textTransform = 'uppercase';
	}
	return paragraphs;
}

paragraphToUpperCase('p');

function showContentParagraph(selectors) {
	let paragraphs = document.getElementsByTagName(selectors);
	for (let i = 0; i < paragraphs.length; i += 1) {
		console.log(paragraphs[i].innerText);
	}
}

showContentParagraph('p');