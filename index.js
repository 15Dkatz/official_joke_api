const express = require('express');
const { random_joke, random_ten } = require('./handler');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/random_joke', (req, res) => {
  res.json(random_joke());
});

app.get('/random_ten', (req, res) => {
  res.json(random_ten());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
