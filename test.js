const { randomJoke, randomTen, jokeById } = require('./handler');

console.log('randomJoke', randomJoke());
console.log('randomTen', randomTen());

it('should render the joke with an id of 1 for en language', () => {
    const lang = 'en';
    expect(jokeById(1, lang)).toEqual(
        {
            "id": 1,
            "type": "general",
            "setup": "What did the fish say when it hit the wall?",
            "punchline": "Dam."
        }
    );
});

it('should render the joke with an id of 1 for tr language', () => {
    const lang = 'tr';
    expect(jokeById(1, lang)).toEqual(
        {
          "id": 1,
          "type": "bilmece",
          "soru": "Karşıdan baktım hiç yok, yanına vardım pek çok.",
          "cevap": "Karınca"
        }
    );
});

it('should return undefined with an invalid id for en language', () => {
    const lang = 'en';
    expect(jokeById('one', lang)).toEqual(undefined);
    expect(jokeById('1', lang)).toEqual(undefined);
    expect(jokeById(undefined, lang)).toEqual(undefined);
});

it('should return undefined with an invalid id for tr language', () => {
    const lang = 'tr';
    expect(jokeById('one', lang)).toEqual(undefined);
    expect(jokeById('1', lang)).toEqual(undefined);
    expect(jokeById(undefined, lang)).toEqual(undefined);
});
