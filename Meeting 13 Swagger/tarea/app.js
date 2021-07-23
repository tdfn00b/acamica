/*
Objetivo: documentar una API para que un local de venta de vehículos pueda gestionar aquellos que se encuentran disponibles para la venta.

Marca (char)
Modelo (char)
Fecha de fabricación (date)
Cantidad de puertas (entero)
Disponible para la venta (booleano)

La API debe permitir poder realizar las operaciones CRUD.
*/

//Importando cosas
const express = require('express');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Programamos Juntos - Meeting 13 Swagger',
            version: '1.0.0'
        }
    },
    apis: ['./app.js'],
};

// Importacion de clases y middlewares
const {Automotor} = require('./automotor')
const {verificarExistencia} = require('./middlewares');


// Inicializacion de Express y Morgan
const app = express();
app.use(express.json());
app.use(morgan('dev'));

//Lista de Automotores
let listaAutomotores = require('./listaAutomotores');

//Creacion de ENDPOINTS
//CRUD - Create, Read, Update, Delete

app.get('/automotores', function (req, res) {
    //Lee toda la lista de automotores
    //Devuelve la lista de todos los automotores.
    res.json(listaAutomotores);
});

app.post('/automotores', function (req, res) {
    //Agrega un automotor, si ya existe no agregarlo.
    //Devuelve el automotor agregado y la lista completa de automotores.
    res.json();
});

app.put('/automotores/:id', verificarExistencia,  function (req, res){
    //Modifica un automotor por id
});

app.delete('/automotores/:id', verificarExistencia, function (req, res) {
    //Remueve un automotor por id
});


//Inicio server
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});