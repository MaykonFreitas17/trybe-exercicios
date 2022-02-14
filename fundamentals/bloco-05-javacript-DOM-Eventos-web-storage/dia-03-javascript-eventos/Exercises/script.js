function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/**
 * Exercício 1:
		O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
		Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
		Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
		Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
 */

const weekDaysList = document.querySelector('.week-days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function setDaysInList(listDays, className) {
	// Criando os dias dinamicamentes
	for (let i = 0; i < listDays.length; i += 1) {
		let day = document.createElement('li');

		day.innerText = listDays[i];
		day.className = className;

		if (listDays[i] === 24 || listDays[i] === 25 || listDays[i] === 31) {
			day.className += ' holiday';
		}
		if (listDays[i] === 4 || listDays[i] === 11 || listDays[i] === 18 ||listDays[i] === 25) {
			day.className += ' friday';
		}

		// Adicionando como filho da lista
		weekDaysList.appendChild(day);
	}

}

// Chamando a função
setDaysInList(dezDaysList, 'days');

/**
 * Exercício 2:
		Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
		Adicione a este botão a ID "btn-holiday" .
		Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
 */

// Pegando o buttons-container
let buttonsContainer = document.querySelector('.buttons-container');

function createButtonChild(string) {
	// Criando e configurando o Botão
	let button = document.createElement('button');
	button.id = 'btn-holiday';
	button.innerText = string;
	
	// Adicionando ao pai
	buttonsContainer.appendChild(button);
}

createButtonChild('Feriados');

/**
* 	Exercício 3:
			Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
			É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
let listDays = document.querySelectorAll('.holiday');

let button = buttonsContainer.children[0];

button.addEventListener('click', switchingColorHoliday);

let holiday = document.querySelectorAll('.holiday');
let holidayOn = false;

function switchingColorHoliday () {
	let listDays = document.querySelectorAll('.holiday');
	
	if (holidayOn === false) {
		for (let i = 0; i < listDays.length; i += 1) {
			listDays[i].style.background = '#008000';
			listDays[i].style.color = 'white';
			holidayOn = true;
		}
	}else {
		for (let i = 0; i < listDays.length; i += 1) {
			listDays[i].style.background = 'rgb(238,238,238)';
			listDays[i].style.color = '#666666';
			holidayOn = false;
		}
	}
	
}

/**
 * Exercício 4:
		Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
		Adicione a este botão o ID "btn-friday" .
		Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createButtonFriday(string) {
	let button = document.createElement('button');
	button.className = 'btn-friday';
	button.innerText = string;
	buttonsContainer.appendChild(button);
}

createButtonFriday('Sexta-feira');

/**
 * Exercício 5:
		Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
		É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

buttonFriday = buttonsContainer.children[1];
let fridayOn = false;
buttonFriday.addEventListener('click', function(){
	let day = [4, 11, 18, 25];
	let listDays = document.querySelectorAll('.friday');
	if (fridayOn) {
		for (let i = 0; i < listDays.length; i += 1) {
			listDays[i].innerText = day[i];
			fridayOn = false;
		}
	}else {
		for (let i = 0; i < listDays.length; i += 1) {
			listDays[i].innerText = 'SEXTA-FEIRA!';
			fridayOn = true;
		}
	}
});

/**
 * Exercício 6:
		Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
		Dica - Propriedade: event.target .
*/

let allDays = document.querySelectorAll('.days');
for (let i = 0; i < allDays.length; i += 1) {
	//aplicar o Zoom
	allDays[i].addEventListener('mouseover', function(event){
		let currentDay = event.target;
		currentDay.style.fontSize = '50px';
	});

	//Tirar o Zoom
	allDays[i].addEventListener('mouseout', function(event){
		let currentDay = event.target;
		currentDay.style.fontSize = '20px';
	});
}

/**
 * Exercício 7:
		Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
		O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

let myTasksContainer = document.querySelector('.my-tasks');

function createTask(task) {
	let myTask = document.createElement('span');
	myTask.innerText = task;
	myTasksContainer.appendChild(myTask);
}

createTask('Dia 15: Projetos');

/**
 * Exercício 8:
		Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
		O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
		O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function createSubtitleColor(color) {
	let subtitle = document.createElement('div');
	
	subtitle.className = 'task';

	subtitle.style.width = '20px';
	subtitle.style.height = '20px';
	subtitle.style.background = color;

	myTasksContainer.appendChild(subtitle);
}

createSubtitleColor('red');

/**
 * Exercício 9:
		Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
		Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. 
*/
let taskDivList = document.querySelectorAll('.task');
let taskDivListOn = false;
for (let i = 0; i < taskDivList.length; i += 1) {
		
		taskDivList[i].addEventListener('click' , function(event){
			let task = event.target;
			if (taskDivListOn) {
				task.className = 'task';
				taskDivListOn = false;
			}else{
				task.className = 'task selected';
				taskDivListOn = true;
			}
		});
}

/**
 * Exercício 10:
		Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
		Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
 */
console.log(taskDivList[0].style.background);
for (let i = 0; i < allDays.length; i += 1) {
	//aplicar o Zoom
	allDays[i].addEventListener('click', function(event){
		if (taskDivListOn) {
			let currentDay = event.target;
			currentDay.style.color = taskDivList[0].style.background;
		}else {
			let currentDay = event.target;
			currentDay.style.color = 'rgb(119,119,119)';
		}
	});
}