const { randomJoke, randomTen, randomSelect, jokeById, jokeByType, types, isValidType } = require('./handler');
console.log('randomJoke', randomJoke());
console.log('randomTen', randomTen());

describe('Joke API Handler Tests', () => {
  describe('jokeById', () => {
    it('should return the joke with id 1', () => {
      expect(jokeById(1)).toEqual(
        {
            id: 1,
            type: "general",
            setup: "What did the fish say when it hit the wall?",
            punchline: "Dam."
        }
    );
    });

    it('should return undefined with an invalid id', () => {
      expect(jokeById('one')).toEqual(undefined);
      expect(jokeById('1')).toEqual(undefined);
      expect(jokeById()).toEqual(undefined);
    });
  });

  describe('randomJoke', () => {
    it('should return a joke object with required properties', () => {
      const joke = randomJoke();
      expect(joke).toHaveProperty('id');
      expect(joke).toHaveProperty('type');
      expect(joke).toHaveProperty('setup');
      expect(joke).toHaveProperty('punchline');
    });
  });

  describe('randomTen', () => {
    it('should return an array of up to 10 jokes', () => {
      const jokes = randomTen();
      expect(Array.isArray(jokes)).toBe(true);
      expect(jokes.length).toBeLessThanOrEqual(10);
      expect(jokes.length).toBeGreaterThan(0);
    });
  });

  describe('randomSelect', () => {
    it('should return requested number of jokes', () => {
      const jokes = randomSelect(5);
      expect(jokes.length).toBeLessThanOrEqual(5);
    });

    it('should throw error for invalid input', () => {
      expect(() => randomSelect(0)).toThrow();
      expect(() => randomSelect(-1)).toThrow();
      expect(() => randomSelect('five')).toThrow();
    });
  });

  describe('jokeByType', () => {
    it('should return jokes of specified type', () => {
      const jokes = jokeByType('general', 1);
      expect(jokes.length).toBeLessThanOrEqual(1);
      if (jokes.length > 0) {
        expect(jokes[0].type).toBe('general');
      }
    });
  });

  describe('isValidType', () => {
    it('should validate correct types', () => {
      expect(isValidType('general')).toBe(true);
    });

    it('should reject invalid types', () => {
      expect(isValidType('invalid')).toBe(false);
    });
  });
});