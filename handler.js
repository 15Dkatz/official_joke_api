const jokes = require("./jokes/index.json");

let lastJokeId = 0;
jokes.forEach((jk) => (jk.id = ++lastJokeId));

const randomJoke = () => {
  return jokes[Math.floor(Math.random() * jokes.length)];
};

/**
 * Get jokes in specific order for pagination purpose
 * @param {Number} pageSize - Number of items per page
 * @param {Number} pageNumber - Page number
 * @param {String} sortKey - The key to sort the jokes "type" | "setup" | "punchline"
 * @param {String} sortOrder - How to sort the jokes "asc" | "desc"
 * @returns an array of jokes
 */

const paginateJokes = (
  pageSize,
  pageNumber,
  sortKey = null,
  sortOrder = "asc"
) => {
  // Zero-based index for the current page slice
  --pageNumber;

  // Apply sorting if sortKey is provided
  if (sortKey) {
    jokes.sort((a, b) => {
      const valueA =
        typeof a[sortKey] === "string" ? a[sortKey].toUpperCase() : a[sortKey];
      const valueB =
        typeof b[sortKey] === "string" ? b[sortKey].toUpperCase() : b[sortKey];

      if (sortOrder.toLowerCase() === "asc") {
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      } else {
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      }
    });
  }

  return jokes.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
};

/**
 * Get N random jokes from a jokeArray
 */
const randomN = (jokeArray, n) => {
  const limit = jokeArray.length < n ? jokeArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * jokeArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map((randomIndex) => {
    return jokeArray[randomIndex];
  });
};

const randomTen = () => randomN(jokes, 10);

const randomSelect = (number) => randomN(jokes, number);

const jokeByType = (type, n) => {
  return randomN(
    jokes.filter((joke) => joke.type === type),
    n
  );
};

/**
 * @param {Number} id - joke id
 * @returns a single joke object or undefined
 */
const jokeById = (id) => jokes.filter((jk) => jk.id === id)[0];

module.exports = {
  jokes,
  randomJoke,
  randomN,
  randomTen,
  randomSelect,
  jokeById,
  jokeByType,
  paginateJokes,
};
