const normalRick = {
  name: 'Rick Sanchez',
  age: '70',
  dimension: 'C-137'
};

const weirdRick = {
  name: 'Rick Sanchez',
  age: '70',
  dimension: 'J19ζ7'
};

const weirdCharacter = {
  name: 'Squanchy',
  fetish: ' Auto-Erotic Asphyxiation Masturbation'
};

if (normalRick.name != 'Rick Sanchez') {
  console.log('Wabba lab doob doob');
}

function addMorty(rick) {
  const newRick = rick;

  newRick.morty = {
    name: 'Morty',
    age: '14',
    dimension: 'C-137'
  };

  return newRick;
}

addMorty(weirdRick);
addMorty(weirdRick);
addMorty(weirdRick);
addMorty(weirdRick);
addMorty(weirdRick);
addMorty(weirdRick);
addMorty(normalRick);
addMorty(weirdCharacter);
