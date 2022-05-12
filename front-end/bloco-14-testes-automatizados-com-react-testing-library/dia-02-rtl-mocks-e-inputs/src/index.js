const generatorNumber = () => {
  const generatedNumber = Math.floor(Math.random() * 100);
  return generatedNumber;
}

const stringToUpperCase = (string) => {
  return string.toUpperCase();
};

const stringReturnFirstLetter = (string) => {
  console.log(string[string.length - 1]);
  return string[0];
};

const concatenateStrings = (...strings) => {
  const str = strings.reduce((acc, curr) => acc.concat(curr));
  return str;
}

// Crie uma função que faça requisição para a api dog pictures.
function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

fetchDog();

module.exports = {
  generatorNumber,
  stringToUpperCase,
  stringReturnFirstLetter,
  concatenateStrings,
};