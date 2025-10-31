const express = require('express');
const LimitingMiddleware = require('limiting-middleware');
const { types, randomJoke, randomTen, randomSelect, jokeByType, jokeById, count } = require('./handler');

const app = express();

app.use(new LimitingMiddleware().limitByIp());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (_req, res) => {
  res.type('text').send('Official Joke API — customized for SeAMK ✅');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

// --- Staattiset reitit ENNEN parametri­reittejä ---
const jokes = require('./jokes/index.json');
app.get('/jokes/count', (_req, res) => res.json({ count: jokes.length }));
app.get('/types', (_req, res) => res.json(types));

// Yksi satunnainen (helpottaa testejä)
app.get('/jokes/random', (_req, res) => res.json(randomJoke()));

app.get('/jokes/ten', (req, res) => {
  res.json(randomTen());
});

// N kpl satunnaisia
app.get("/jokes/random/:num", (req, res) => {
  let num;
  try {
    num = parseInt(req.params.num);
    if (!num) {
      res.send("The passed path is not a number.");
    } else {
      if (num > count) {
        res.send(`The passed path exceeds the number of jokes (${count}).`);
      } else {
        res.json(randomSelect(num));
      }
    }
  } catch (e) {
    return next(e);
  } 
});



app.get('/jokes/:type/random', (req, res) => {
  res.json(jokeByType(req.params.type, 1));
});

app.get('/jokes/:type/ten', (req, res) => {
  res.json(jokeByType(req.params.type, 10));
});

app.get('/jokes/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const joke = jokeById(+id);
    if (!joke) return next({ statusCode: 404, message: 'joke not found' });
    return res.json(joke);
  } catch (e) {
    return next(e);
  }
});


app.use((err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

