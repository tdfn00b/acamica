const express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hola mundo');
});

app.get('/saludo', function (req, res) {
  res.send('Hola mundo desde otro lugar');
});

app.listen(3000, function () {
  console.log('Escuchando el puerto 3000!');
});