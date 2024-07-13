# Official Joke API

## Endpoints:

### Grab a random joke
[https://official-joke-api.appspot.com/random_joke](https://official-joke-api.appspot.com/random_joke)


[https://official-joke-api.appspot.com/jokes/random](https://official-joke-api.appspot.com/jokes/random)

### Get joke types
[https://official-joke-api.appspot.com/types](https://official-joke-api.appspot.com/types)

### Grab ten random jokes
[https://official-joke-api.appspot.com/random_ten](https://official-joke-api.appspot.com/random_ten)


[https://official-joke-api.appspot.com/jokes/ten](https://official-joke-api.appspot.com/jokes/ten)

### Grab any number of random jokes

Usage: `https://official-joke-api.appspot.com/jokes/random/<any-number>`

For example:
* [https://official-joke-api.appspot.com/jokes/random/5](https://official-joke-api.appspot.com/jokes/random/5)
* [https://official-joke-api.appspot.com/jokes/random/25](https://official-joke-api.appspot.com/jokes/random/25)
* [https://official-joke-api.appspot.com/jokes/random/250](https://official-joke-api.appspot.com/jokes/random/250)

### Grab jokes by type

The endpoints are `jokes/:type/random` or `jokes/:type/ten`. For example:

[https://official-joke-api.appspot.com/jokes/programming/random](https://official-joke-api.appspot.com/jokes/programming/random)

[https://official-joke-api.appspot.com/jokes/programming/ten](https://official-joke-api.appspot.com/jokes/programming/ten)


### Grab joke by id

Use endpoint `/jokes/:id`

***

## How these jokes were collected

The majority of these jokes were contributed by joke-loving coders around the world!

### Make a contribution!

Submit a Pull Request, with your joke added to the jokes/index.json file. Make sure the joke is in this format:

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
* Visit `localhost:3005/jokes/random` or `localhost:3005/jokes/ten` on your browser
