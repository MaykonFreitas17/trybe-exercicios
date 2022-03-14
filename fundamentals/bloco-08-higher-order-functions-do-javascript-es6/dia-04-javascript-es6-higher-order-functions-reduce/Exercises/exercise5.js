/** 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra A maiúscula ou minúscula. */

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  // escreva seu código aqui
  const counter = arr.reduce((counter, curr) => {
    let count = 0;
    const letters = curr.split('');
    
    letters.forEach((letter) => {
      if (letter.toLowerCase() === 'a') {
        count += 1;
      };
    });

    return counter += count || 0;

  }, 0);

  return counter;
}

console.log(containsA(names));

