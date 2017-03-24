'use strict';


var jokes = require('./jokes/index.json');

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({hello: 'Hello, world'}),
  };

  callback(null, response);
};




module.exports.random_ten = (event, context, callback) => {
  var r_indices = [];
  while (r_indices.length < 10) {
    var random_index = Math.floor(Math.random() * jokes.length);
    if (!r_indices.indexOf(random_index) > -1) {
      r_indices.push(random_index);
    }
  }
  var r_jokes = [];
  for (var i=0; i<r_indices.length; i++) {
    var r_index = r_indices[i];
    r_jokes.push(jokes[r_index]);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify([r_jokes])
  }

  callback(null, response);
}

module.exports.random_joke = (event, context, callback) => {
  var random_index = Math.floor(Math.random() * jokes.length);
  var r_joke = jokes[random_index];
  const response = {
    statusCode: 200,
    body: JSON.stringify(r_joke)
  }
  callback(null, response);
}

// app.get('/random_joke', function(req, res) {
//   var random_index = Math.floor(Math.random() * jokes.length);
//   var r_joke = jokes[random_index];
//   res.json(r_joke);
// })
