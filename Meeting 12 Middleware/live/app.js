const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const app = express();

app.use(compression()); //TODO: ver documentación del módulo compression.
app.use(morgan('dev')); 
app.use(express.json()); //TODO: Fijarme qué hace el express.use y el express.json

const {
    middleware1,
    middleware2
} = require('./middlewares.js');

const {
    handlerRoot,
    handlerTime,
    trazabilidad
} = require('./handlers.js');

let router = express.Router()
router.get('/', trazabilidad, middleware1, middleware2, handlerRoot);
router.get('/time', trazabilidad, handlerTime);

app.use(router);

app.listen(3000, function () {
    console.log('Escuchando el puerto 3000!');
});