var random_ten = require('./handler').random_ten;
var hello = require('./handler').hello;

console.log(hello('a', 'b', function(a, b) {console.log('b', b)}));
console.log(random_ten('a', 'b', function(a, b) {console.log('b', b)}));
