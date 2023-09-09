# Official Joke API with Multi-Language Support

This is a fork of the Official Joke API originally created by [5Dkatz](https://github.com/5Dkatz/official_joke_api). The fork, [osman-koc/joke_api](https://github.com/osman-koc/joke_api), adds multi-language support.

## Endpoints:

### Grab a random joke!

- Türkçe: [https://official-joke-api.appspot.com/random_joke?lang=tr](https://official-joke-api.appspot.com/random_joke?lang=tr)
- English: [https://official-joke-api.appspot.com/random_joke?lang=en](https://official-joke-api.appspot.com/random_joke?lang=en)

### Grab ten random jokes!

- Türkçe: [https://official-joke-api.appspot.com/random_ten?lang=tr](https://official-joke-api.appspot.com/random_ten?lang=tr)
- English: [https://official-joke-api.appspot.com/random_ten?lang=en](https://official-joke-api.appspot.com/random_ten?lang=en)

### Grab jokes by type!

The endpoints are `jokes/:type/random` or `jokes/:type/ten`. For example:

- Türkçe: [https://official-joke-api.appspot.com/jokes/programming/random?lang=tr](https://official-joke-api.appspot.com/jokes/programming/random?lang=tr)
- English: [https://official-joke-api.appspot.com/jokes/programming/random?lang=en](https://official-joke-api.appspot.com/jokes/programming/random?lang=en)

### Grab joke by id!

Use endpoint `/jokes/:id`

***

## How these jokes were collected

The majority of these jokes were contributed by joke-loving coders around the world!

### Make a contribution!

To contribute, please follow these steps:

1. Submit a Pull Request with your joke.
2. Determine the language for your joke: Turkish (tr) or English (en).
3. Add your joke to the respective JSON file:
   - If your joke is in Turkish, add it to `jokes/tr.json`.
   - If your joke is in English, add it to `jokes/en.json`.

Make sure your joke is in the following format:

```javascript
{
  "type": "programming",
  "setup": "What's the best thing about a Boolean?",
  "punchline": "Even if you're wrong, you're only off by a bit."
}
```

***

### Run Locally
* Clone the repo
* `npm i && npm run dev`
* Visit `localhost:3005/jokes/random` or `localhost:3005/jokes/ten` on your browser!
