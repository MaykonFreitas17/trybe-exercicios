// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerText = data.joke;
      console.log(data.joke, jokeContainer)
    });
};

window.onload = () => fetchJoke();