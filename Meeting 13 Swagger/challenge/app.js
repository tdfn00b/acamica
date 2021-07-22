//FALTA TERMINAR
const express = require('express');
const morgan = require('morgan');

//???
import {
    Escritor
} from './escritor.js'

import {
    Libro
} from './libro.js'

const app = express();
app.use(morgan);

// Middleware que valida si el escritor existe en tu array
function escritorExisteID(req, res, next) {
    let id = req.params.id;
    if (escritores[id]) {
        next();
    } else {
        res.json(`El autor de id ${id} no existe`)
    }
}

//Middleware que valida si el libro existe y si este corresponde al autor
//Falta fijarse que corresponda al autor

function escritorLibroExiste(req, res, next) {
    let id = req.params.id;
    let idLibro = req.body.idLibro;

	if (escritores[id].libros[idLibro]) {
		next();
	}
	else {
		res.json(`El libro no existe`)
	}
}

//Usar la clase Escritor cuando se pueda.
let escritores = [{
    id: 1,
    nombre: "Jorge Luis",
    apellido: "Borges",
    fechaNacimiento: "24/08/1899",
    libros: [{
            id: 1,
            titulo: "Ficciones",
            descripcion: "Se trata de sus mas...",
            publicacion: 1944
        },
        {
            id: 2,
            titulo: "El Aleph",
            descripcion: "Otra recopilación de cuentos...",
            publicacion: 1949
        }
    ]

}]

//GET para obtener todos los autores (escritores).
app.get("/autores", function (req, res) {
    let todosAutores = [];
    escritores.forEach(function (escritor) {
        if (escritor.nombre) {
            todosAutores.push(escritor.nombre);
        }
    });
    res.json(todosAutores)
});

//No sé como formatear el body de la request al enviar,
//por ahora tendría que mandarlo manualmente desde postman... si es que se puede.

//POST para crear un nuevo escritor
app.post("/autores", function (req, res) {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let fechaNacimiento = req.body.fechaDeNacimiento;
    let libros = req.body.libros
    let id = escritores.length + 1
    nuevoAutor = new Escritor(id, nombre, apellido, fechaNacimiento, libros);
    res.json("Autor agregado")
});

//GET que devuelve el autor con el ID indicado
app.get("/autores/:id", escritorExisteID, function (req, res) {
    let id = req.params.id;
    let resultado = escritores.find(escritor => escritor.id == id)
    res.json(resultado);
});

//DELETE que elimina a un autor por ID
app.delete("/autores/:id", escritorExisteID, function (req, res) {
    let id = req.params.id;
    escritores.splice(id, 1)
    res.json(`El autor ${escritores[id].nombre} de id ${id} fue removido`)
});

// PUT que modifica el autor con el id indicado
app.put("/autores/:id", escritorExisteID, function (req, res) {
    let id = req.params.id;
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let fechaNacimiento = req.body.fechaDeNacimiento;
    if (nombre) {
        escritores[id].nombre = nombre
    }
    if (apellido) {
        escritores[id].apellido = apellido
    }
    if (fechaNacimiento) {
        escritores[id].fechaNacimiento = fechaNacimiento
    }

    res.json(`El autor ${escritores[id].nombre} de id ${id} fue modificado`)
});


//GET: devuelve todos los libros de un autor
app.get('/autores/:id/libros', escritorExisteID, function (req, res) {
    let id = req.params.id;
    req.json(escritores[id].libros)
});

//POST: agrega un nuevo libro al autor
app.post('/autores/:id/libros', escritorExisteID, function (req, res) {
    let id = req.params.id;
    let idLibro = escritores[id].libros.length() + 1
    let titulo = req.body.titulo
    let descripcion = req.body.descripcion
    let publicacion = req.body.publicacion
    nuevoLibro = new Libro(idLibro, titulo, descripcion, publicacion)
    escritores[id].libros.push(nuevoLibro)

    res.json(`El ${nuevoLibro} fue agregado`)
});

// GET que devuelve el libro con el id indicado del autor
app.get('/autores/:id/libros/:idLibro', escritorLibroExiste, function (req, res) {
    let id = req.params.id;
    let idLibro = req.body.idLibro;
    libro = escritores[id].libros[idLibro]
    res.json(libro)
});

//PUT que modifica el libro con el id indicado del autor
app.put('/autores/:id/libros/:idLibro', escritorLibroExiste, function (req, res) {
    let id = req.params.id;
    let idLibro = req.params.idLibro;

    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let publicacion = req.body.publicacion;

    if (titulo) {
        escritores[id].libros[idLibro].titulo = titulo
    }
    if (descripcion) {
        escritores[id].libros[idLibro].descripcion = descripcion
    }
    if (publicacion) {
        escritores[id].libros[idLibro].publicacion = publicacion
    }
    res.json(`El ${escritores[id].libros[idLibro].titulo} fue modificado`)
});

//DELETE que elimina el libro con el id indicado del autor
app.delete('/autores/:id/libros/:idLibro', escritorLibroExiste, function (req, res) {
    let id = req.params.id;
    let idLibro = req.body.idLibro;
    let libroEliminado = escritores[id].libros.splice(idLibro, 1)
    escritores[id].libros.splice(idLibro, 1)
    res.json(`El ${libroEliminado} fue modificado`)
});

//Inicio server
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});