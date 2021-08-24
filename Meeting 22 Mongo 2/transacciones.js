//Importo librería
const { assert } = require('console');
const db = require('mongoose');

db.connect('mongodb://localhost:27017/Mongo2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Creo model Usuario
const Usuario = db.model('User', new db.Schema({nombre : String}));

//Creo una sesión
const session = await db.startSession();

//Comienzo una transacción en la sesión.
session.startTransaction();

//Creo un nuevo documento con create() dentro de la sesión.
await Usuario.create({nombre : 'David'}, { session : session });
await Usuario.create({nombre : 'Maximiliano'}, { session : session });

/* ////////////////////////////////////////////////////////////
//Termino la sesión antes de que el documento sea comiteado
await session.abortTransaction();

//Ningún documento persiste en la base de datos
const count = await Usuario.countDocuments(); //Seguro 

//Verifico si la cantidad de documentos dentro de usuario es 0.
assert.strictEqual(count, 0);

//Termino la sesión
session.endSession();
*/ ////////////////////////////////////////////////////////////


//El documento no está presente porque no se hizo commit.
//La transacción no se completo todavía.
let doc = await Usuario.findOne({nombre : 'David'}); 
//Verifico con assert. TODO: Buscar documentación de assert.ok().
assert.ok(!doc);

//Aún así puedo buscar el documento dentro de la sesión.
doc = await Usuario.findOne({nombre : 'David'}).session(session);
//Verifico con assert.
assert.ok(doc);

//Hago commit de la transacción
await session.commitTransaction();

//Busco si el documento existe fuera de la transacción.
doc = await Usuario.findOne({nombre : 'David'});
assert.ok(doc);

//Termino la sesión session.
session.endSession();