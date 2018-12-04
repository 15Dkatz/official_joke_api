## Endpoints:

### Grab a random joke!
[https://safe-falls-22549.herokuapp.com/random_joke](https://safe-falls-22549.herokuapp.com/random_joke)

### Grab ten random jokes!
[https://safe-falls-22549.herokuapp.com/random_ten](https://safe-falls-22549.herokuapp.com/random_ten)

## How these jokes were collected

Full disclosure: I did a lot of googling...
But since this repo went open source, many of them were contributed by joke-loving coders around the world!

### Make a contribution!

Submit a Pull Request, with your joke added to the jokes/index.json file. Make sure the joke is in this format:

```javascript
{
  "id": "<last joke id + 1>",
  "type": "your joke's type",
  "setup": "your joke's setup line",
  "punchline": "your joke's punchline"
}
```

### Run Locally
* Clone the repo
* `npm install && npm start`
* Visit `localhost:3000/random_joke` or `localhost:3000/random_ten` on your browser!
