const { assert } = require('console');
const mongoose = require('mongoose');

//Me conecto a la base de datos.
mongoose.connect('mongodb://localhost:27017/challenge4?retryWrites=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Envuelvo todo en una funcion anonima asincrónica para poder usar await
(async () => {

//Creo un modelo
const test_model = mongoose.model('test_model', new mongoose.Schema({
    test_key_1 : String,
    test_key_2 : Number
}));

//Creo una sesión y la recupero en una variable
const test_session = await mongoose.startSession();

//Comienzo una sesión 
test_session.startTransaction()

//Creo un nuevo documento basado en el modelo que cree dentro de la sesión.
let test_document = await test_model.create([{
    test_key_1 : 'test_string_con_array',
    test_key_2 : 1337
}], { session : test_session }); //Cuando creo acá los arrays para pasar la sesión me tira error. Preguntar.

//Inserto el documento en la base de datos
test_model.collection.insert(test_document); //deprecado, usar insertMany

//Busco el documento dentro de la sesión 
let test_document = await test_model.findOne({test_key_1 : 'test_string'}).session(test_session);
assert.ok(test_query);

//Hago commit de la transacción
test_session.commitTransaction();

//Cierro la sesión
test_session.endSession();

})();
//Ejecuto la función anónima.