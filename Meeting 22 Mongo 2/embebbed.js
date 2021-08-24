//Importo librerías / módulos
const { ObjectID } = require('bson');
const db = require('mongoose');

//Conecto a una base de datos local llamada "foro"
db.connect('mongodb://localhost:27017/foro', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Creo un schema para usar en otro schema.
const Comentario = new db.Schema({
    titulo : String,
    cuerpo : String,
    fecha : Date
});

//Creo el otro schema
const Posteo = new db.Schema({
    autor : ObjectID,
    titulo : String,
    cuerpo : String,
    fecha : Date,
    comentarios : [Comentario], //Uso el schema anterior en este array
    meta : {
        votos : Number,
        favs : Number
    }
});

//Asigno el modelo a una variabale.
const Posteo = mongoose.model('Posteo', Posteo);

//Agrego documento embebido a un array.
//Creo un post nuevo.(Es esto un documento?)
let post = new Posteo();

//Creo un comentario dentro del post.
//pero no hago refencia al schema?
post.comentarios.push({
    titulo: 'Super titulo de comentario',
    cuerpo: 'Que raro que los comentarios tengan titulo',
    fecha : new Date
});

//Guardo el post.
//El callback se hace para manejar cualquier error que suceda.
post.save((err) => {
    if (!err) {console.log('Guardado')};
});

//Elimino un documento embebido por id
post.comentarios.id(doc_id).remove();

//Guardo el documento
post.save((err) => {
    if (!err) {console.log('Eliminado')}
})

//Encuentro un Posteo por ID y elimino el primer comentario embebido.
//Guardo el documento post.
//TODO: Buscar cómo consigo el ID
Posteo.findById(doc_id, (err, post) => {
    if (!err) {
        post.comentarios[0].remove();
        post.save((err) => {
            if (!err) {console.log('Eliminado')}
        })
    }
})
