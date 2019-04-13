const jokes = require('./jokes/index.json');

const randomJoke = () => {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

const randomTen = () => {
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < 10) {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return jokes[randomIndex];
  });
};

const jokeByType = type => {
  let typeArray = [];
  for (let i = 0; i < jokes.length; i++) {
    if (jokes[i].type === type) {
      typeArray.push(jokes[i]);
    }
  }
  if (typeArray.length <= 0) {
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  return typeArray[Math.floor(Math.random() * typeArray.length)];
};

module.exports = { randomJoke, randomTen, jokeByType };
