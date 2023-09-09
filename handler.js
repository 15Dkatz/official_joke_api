const trJokes = require('./jokes/tr.json');
const enJokes = require('./jokes/en.json');


const randomJoke = (lang = 'en') => {
  let jokesData;

  if (lang === 'tr') {
    jokesData = trJokes;
  } else if (lang === 'en') {
    jokesData = enJokes;
  } else {
    throw new Error('Unsupported language');
  }

  const randomIndex = Math.floor(Math.random() * jokesData.length);
  const joke = jokesData[randomIndex];
  return { ...joke, id: randomIndex + 1 };
};

const randomN = (jokeArray, n) => {
  const limit = Math.min(jokeArray.length, n);
  const randomIndices = new Set();
  
  while (randomIndices.size < limit) {
    const randomIndex = Math.floor(Math.random() * jokeArray.length);
    randomIndices.add(randomIndex);
  }

  const randomJokes = Array.from(randomIndices).map(randomIndex => ({
    ...jokeArray[randomIndex],
    id: randomIndex + 1
  }));

  return randomJokes;
};

const randomTen = (lang = 'en') => {
  let jokesData;

  if (lang === 'tr') {
    jokesData = trJokes;
  } else if (lang === 'en') {
    jokesData = enJokes;
  } else {
    throw new Error('Unsupported language');
  }

  return randomN(jokesData, 10);
};

const randomSelect = (number, lang = 'en') => {
  let jokesData;

  if (lang === 'tr') {
    jokesData = trJokes;
  } else if (lang === 'en') {
    jokesData = enJokes;
  } else {
    throw new Error('Unsupported language');
  }

  return randomN(jokesData, number);
};

const jokeByType = (type, n, lang = 'en') => {
  let jokesData;

  if (lang === 'tr') {
    jokesData = trJokes;
  } else if (lang === 'en') {
    jokesData = enJokes;
  } else {
    throw new Error('Unsupported language');
  }

  const filteredJokes = jokesData.filter(joke => joke.type === type);
  const randomJokes = randomN(filteredJokes, n);
  return randomJokes.map((joke, index) => ({ ...joke, id: filteredJokes.indexOf(joke) + 1 }));
};

const jokeById = (id, lang = 'en') => {
  let jokesData;

  if (lang === 'tr') {
    jokesData = trJokes;
  } else if (lang === 'en') {
    jokesData = enJokes;
  } else {
    throw new Error('Unsupported language');
  }

  const foundJoke = jokesData.find(joke => joke.id === id);
  if (foundJoke) {
    return { ...foundJoke };
  } else {
    return null;
  }
};

module.exports = {
  randomJoke,
  randomN,
  randomTen,
  randomSelect,
  jokeById,
  jokeByType
};
