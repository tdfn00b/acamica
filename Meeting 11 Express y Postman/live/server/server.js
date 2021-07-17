const express = require('express');
const morgan = require('morgan');
const server = express();
let arr = [1, 2, 3, 4, 5, 6, 7, 8];


server.use(morgan('dev'))

server.get('/', function (req, res) {
    res.send('App web desarrollada en meeting 11 Express y Postman')
});
server.get('/hola', function (req, res) {
    res.send('Hola Mundo nodemon!')
});
server.get('/chau', function (req, res) {
    res.send('Chau Mundo nodemon!')
});
server.get('/phones', function (req, res) {
    res.json(arr)
});
server.get('/phones/:id', function (req, res) {
    let id = req.params.id;
    res.json(arr[id])
});
server.delete('/phones/:id', function (req, res) {
    let id = req.params.id;
    let arrnuevo = arr.splice(id,1)
    res.json(arrnuevo)
});

server.post('/phones/:id', function (req, res) {
    console.log(req.body)
    res.json({Resultado : "Función sin implementar"})
});

server.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});