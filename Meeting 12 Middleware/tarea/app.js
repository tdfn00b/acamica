//Cargo y asigno el módulo Express.
const express = require('express');
const app = express();

//Cargo la function middleware de un archivo externo.
const {
    middle,
} = require('./middleware.js');

//Uso el middleware globalmente
app.use(middle);

//Creo una lista de usuarios
let usuarios = [{
        id: 1,
        nombre: 'Pepe',
        email: 'pepe@nada.com'
    },
    {
        id: 2,
        nombre: 'Hugo',
        email: 'hugo@nada.com'
    },
    {
        id: 3,
        nombre: 'Juan',
        email: 'juan@nada.com'
    }
];

//Primer endpoint - devuelve la lista de usuarios
app.get('/usuarios/', middle, (req, res) => {
    console.log(usuarios);
    res.json(usuarios);
});

//Segundo endpoint - devuelve el resultado de la búsqueda por ID dentro de la lista de usuarios
app.get('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    let resultado = usuarios.find(usuario => usuario.id == id); // Usando find en vez de forloop?
    console.log(resultado)
    res.json(resultado)
});

// Tercer endpoint - devuelve el resultado de la búsqueda por NOMBRE dentro de la lista de usuarios
app.get('/usuarios/nombre/:nombre', (req, res) => {
    let nombre = req.params.nombre;
    usuarios.forEach(function (usuario) {
        if (usuario.nombre == nombre) {
            res.json(usuario);
        }
    });
    res.json('Usuario no encontrado')
});

//Inicio server
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});