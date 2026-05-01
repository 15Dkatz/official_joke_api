const jokes = require('./jokes/index.json');

let lastJokeId = 0;
jokes.forEach((jk) => (jk.id = ++lastJokeId));

const types = Array.from(new Set(jokes.map((joke) => joke.type)));
const jokesByTypeMap = new Map(types.map((type) => [type, jokes.filter((joke) => joke.type === type)]));

const randomJoke = () => jokes[Math.floor(Math.random() * jokes.length)];
const isValidType = (type) => types.includes(type);

/**
 * Get N random jokes from a jokeArray
 */
const randomN = (jokeArray, n) => {
    const limit = Math.min(jokeArray.length, n);
    const shuffled = [...jokeArray];

    for (let i = shuffled.length - 1; i > shuffled.length - limit - 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(-limit);
};

const randomTen = () => randomN(jokes, 10);

const randomSelect = (number) => {
    if (!Number.isInteger(number) || number <= 0) {
        throw new Error('Number must be a positive integer');
    }
    return randomN(jokes, number);  // ← ADD return
};

const jokeByType = (type, n) => {
	const filtered = jokesByTypeMap.get(type) || [];
	return randomN(filtered, n);
};

const count = jokes.length;
const jokeIndexById = new Map(jokes.map((jk) => [jk.id, jk]));

/**
 * @param {Number} id - joke id
 * @returns a single joke object or undefined
 */
const jokeById = (id) => jokeIndexById.get(id);

module.exports = { jokes, types, randomJoke, randomN, randomTen, randomSelect, jokeById, jokeByType, count, isValidType };
