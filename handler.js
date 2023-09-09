const trJokes = require('./jokes/tr.json'); // Türkçe espri verilerini yükleyin
const enJokes = require('./jokes/en.json'); // İngilizce espri verilerini yükleyin

const randomN = (jokeArray, n) => {
  const limit = jokeArray.length < n ? jokeArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * jokeArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return jokeArray[randomIndex];
  });
};

const randomJoke = (lang = 'tr') => {
  let jokesData;

  if (lang === 'tr') {
    jokesData = trJokes;
  } else if (lang === 'en') {
    jokesData = enJokes;
  } else {
    throw new Error('Unsupported language');
  }

  return jokesData[Math.floor(Math.random() * jokesData.length)];
};

const randomTen = (lang = 'tr') => {
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

const randomSelect = (number, lang = 'tr') => {
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

const jokeByType = (type, n, lang = 'tr') => {
  let jokesData;

  if (lang === 'tr') {
    jokesData = trJokes;
  } else if (lang === 'en') {
    jokesData = enJokes;
  } else {
    throw new Error('Unsupported language');
  }

  return randomN(jokesData.filter(joke => joke.type === type), n);
};

const jokeById = (id, lang = 'tr') => {
  let jokesData;

  if (lang === 'tr') {
    jokesData = trJokes;
  } else if (lang === 'en') {
    jokesData = enJokes;
  } else {
    throw new Error('Unsupported language');
  }

  return jokesData.filter(jk => jk.id === id)[0];
};

module.exports = {
  randomJoke,
  randomN,
  randomTen,
  randomSelect,
  jokeById,
  jokeByType
};
