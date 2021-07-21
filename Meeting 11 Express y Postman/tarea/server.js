const express = require('express');
const morgan = require('morgan');
const {Celular} = require('./celulares.js')

let coso = new Celular("Samsung","Media","S1","5.5'","Android",15000)

//Activo morgan
server.use(morgan('dev'))

//Declaro una variable para usar express
const server = express();

//Creo array de celulares
let listaCelulares = [];

//Agrego celulares al array de celulares
//coso.agregarCelular("Samsung","Media","S1","5.5'","Android",15000)
coso.agregarCelular("Samsung","Baja","J3","5'","Android",8000)
coso.agregarCelular("Samsung","Alta","S10","7'","Android",40000)

//ENDPOINT que regrese array con objeto por línea. Mostrando características del objeto.
server.get('/listado-completo', (req, res) => {
    res.json(coso);
});

//ENDPOINT que devuelva la mitad del array completo.
server.get('/listado-mitad', (req, res) => {
    res.json(coso.mitadListaCelular());
});

//ENDPOINT que devuelve el menor precio del teléfono
server.get('/menor-precio', (req, res) => {
    res.json(coso.menorPrecio());
});

//ENDPOINT que devuelve el mayor precio de teléfono
server.get('/mayor-precio', (req, res) => {
    res.json(coso.mayorPrecio());
});

//ENDPOINT que devuelve todos los teléfonos por gama
server.get('/gamas', (req, res) => {
    res.json(coso.listaGama());
});


//Inicio server
let port = 3000;
server.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});