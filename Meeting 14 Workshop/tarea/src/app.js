//Importando cosas
const express = require('express');
const morgan = require('morgan');
/*
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Meeting 14 - Workshop',
            version: '1.0.0'
        }
    },
    apis: ['./app.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
*/

// Importacion de clases, middleware y ¿base de datos?
const {Usuario} = require('./usuario.js')
const {Topico} = require('./topico')
const {Comentario} = require('./comentario')
const {verificarExistenciaUsuario, esAdministrador, esPropietario} = require('./middlewares');
let {usuariosRegistrados, listaTopicos, listaComentarios} = require('./datos');

// Inicializacion de Express, Morgan y Swagger
const app = express();
app.use(express.json());
app.use(morgan('dev')); 
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


//Creacion de ENDPOINTS
app.get('/users', (req, res) => {
    //Lee toda la lista usuarios registrados
    //Devuelve la lista de todos los usuarios registrados
    //Solo para el desarrollo
    res.json(usuariosRegistrados);
});

app.post('/users', (req, res) => {
    //Agrega un usuario.
    //TODO: si ya existe no agregarlo. Hecho?
    //Devuelve el usuario agregado.
    req.body.id = usuariosRegistrados.length + 1
    if (!usuariosRegistrados.find(usuario => usuario.email == req.body.email)) {
    let usuario = new Usuario(req.body.id, req.body.nombre, req.body.apellido, req.body.email)
    usuariosRegistrados.push(usuario);
    res.json(usuario);
    } else {
        res.json('El usuario ya existe')
    }
});

app.put('/users/:user_id', verificarExistenciaUsuario, esPropietario, (req, res) => {
    // Modifica un usuario existente.
    let usuarioNuevo = req.body;
    let index = req.index
    usuariosRegistrados[index] = usuarioNuevo;
    res.json({ usuarioNuevo });
});

app.delete('/users/:user_id', verificarExistenciaUsuario, esPropietario, (req, res) => {
    //Remueve un usuario por id
    let usuario = req.usuario
    let index = req.index
    usuariosRegistrados.splice(index, 1);
    res.json(`El usuario fue eliminado`);
});

app.post('/topics',(req,res) =>{
    //Dar de alta un nuevo tópico
    let id = listaTopicos.length + 1;
    let owner_id = req.body.user_id;
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion
    let topic = new Topico(id,owner_id,titulo,descripcion)
    listaTopicos.push(topic)
    res.json(`Nuevo tópico ${topic.titulo} publicado`)
});

app.put('/topics/:topic_id', esAdministrador, esPropietario,(req,res) =>{
    //Modificar un tópico
    let topic_id = parseInt(req.params.topic_id);
    let topicoNuevo = req.body
    listaTopicos[topic_id] = topicoNuevo
    res.json(`El topico ${listaTopicos[topic_id].titulo} fue modificado.`)
});

app.delete('/topics/:topic_id', esAdministrador, esPropietario, (req,res) =>{
    //Eliminar un tópico
    let topic_id = req.params.topic_id;
    const isSameId = (element) => element.id == topic_id;
    listaTopicos.splice(listaTopicos.findIndex(isSameId),1)
    res.json(`El topico fue eliminado.`)
});

app.post('/topics/:topic_id/comments',(req,res) =>{
    //Crear un nuevo comentario en un tópico
    nuevoComentario = new Comentario(id, topic_id, usuario_id, comentario)
    res.json(`El comentario fue agregado exitosamente.`)
});

app.put('/topics/:topic_id/comments/:post_id',esPropietario,(req,res) =>{
    //Modificar un comentario
    let post_id = post_id; //Referencia al ID del comentario existente
    //Suponiendo que el req.body tiene la informacion requerida para modificar el comentario
    let id = listaComentarios[post_id].id
    let topic_id = req.params.topic_id;
    let usuario_id = req.body.usuario_id;
    let comentario = req.body.comentario;

    //Creo el comentario modificado
    let nuevoComentario = new Comentario(id,topic_id,usuario_id,comentario)
    
    //Agrego el comentario a la lista de comentarios.
    listaComentarios[post_id] = nuevoComentario

    res.json(`El comentario fue modificado exitosamente`)
});

app.delete('/topics/:topic_id/comments/:post_id',(req,res) =>{
    //Eliminar o dar de baja un comentario
    post_id = req.params.post_id
    topic_id = req.params.topic_id
    const isSameId = (element) => element.id == topic_id;
    listaComentarios.splice(listaComentarios.findIndex(isSameId),1)
    res.json(`El comentario fue eliminado.`)
});


//Endpoints temporales para corroborar cosas
app.get('/users', (req,res) => {
res.json(usuariosRegistrados)
})

app.get('/topics', (req,res) => {
res.json(listaTopicos)
})

app.get('/comments', (req,res) => {
res.json(listaComentarios)    
})

//Inicio server
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});