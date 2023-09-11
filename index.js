const express = require('express');
const LimitingMiddleware = require('limiting-middleware');
const { randomJoke, randomTen, randomSelect, jokeByType, jokeById } = require('./handler');

const app = express();

app.use(new LimitingMiddleware().limitByIp());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Try /random_joke, /random_ten, /jokes/random, or /jokes/ten');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/random_joke', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(randomJoke(lang));
});

app.get('/random_ten', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(randomTen(lang));
});

app.get('/jokes/random', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(randomJoke(lang));
});

// TODO: Needs fixing
app.get("/jokes/random(/*)?", (req, res) => {
  const lang = req.query.lang || 'en';
  let num;

  try {
    num = parseInt(req.path.substring(14, req.path.length));
  } catch (err) {
    res.send("The passed path is not a number.");
  } finally {
    const count = Object.keys(jokes).length;

    if (num > Object.keys(jokes).length) {
      res.send(`The passed path exceeds the number of jokes (${count}).`);
    } else {
      res.json(randomSelect(num, lang));
    }
  }
});

app.get('/jokes/ten', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(randomTen(lang));
});

app.get('/jokes/:type/random', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(jokeByType(req.params.type, 1, lang));
});

app.get('/jokes/:type/ten', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(jokeByType(req.params.type, 10, lang));
});

app.get('/jokes/:id', (req, res, next) => {
  try {
    const lang = req.query.lang || 'en';
    const { id } = req.params;
    const joke = jokeById(+id, lang);
    if (!joke) return next({ statusCode: 404, message: 'joke not found' });
    return res.json(joke);
  } catch (e) {
    return next(e);
  }
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
