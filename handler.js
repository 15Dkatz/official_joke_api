const jokes = require('./jokes/index.json');

const random_ten = () => {
  const r_indices = [];
  while (r_indices.length < 10) {
    const random_index = Math.floor(Math.random() * jokes.length);
    if (!r_indices.indexOf(random_index) > -1) {
      r_indices.push(random_index);
    }
  }
  const r_jokes = [];
  for (let i=0; i<r_indices.length; i++) {
    const r_index = r_indices[i];
    r_jokes.push(jokes[r_index]);
  }

  return r_jokes;
};

const random_joke = () => {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

module.exports = { random_ten, random_joke };
