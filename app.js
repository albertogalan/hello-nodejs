var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json('Hello, World!');
});

PORT=8085

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT} !`);
  console.log(`This is feature 2`);
  console.log(`This is feature 3 fixed`);
});


console.log(`This is a hotfix`);
module.exports = app;
