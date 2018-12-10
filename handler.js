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

module.exports = { randomJoke, randomTen };
