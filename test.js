const { randomJoke, randomTen, jokeById } = require('./handler');

console.log('randomJoke', randomJoke());
console.log('randomTen', randomTen());

it('should render the joke with an id of 1', () => {
    expect(jokeById(1)).toEqual(
        [{
            "id": 1,
            "type": "general",
            "setup": "What did the fish say when it hit the wall?",
            "punchline": "Dam."
        }]
    );
})