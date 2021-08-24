//Importo mongoose
const MongoClient = require('mongoose');
//Me conecto a la database
MongoClient.connect('mongodb://localhost:27017/bd'),{useNewUrlParser: true, useUnifiedTopology: true}


//Creo un schema para almacenar en la base de datos
schema = {
    nombre: String,
    apellido: String,
    edad: Number
};

//Creo una clase llamada usuarios con el schema que cree.
const Usuarios = mongoose.model('Usuarios', schema);

//Creo un objeto para cargar a la clase Usuarios
const yo = {
    nombre: 'David',
    apellido: 'Guerrero',
    edad: 30
};

//Convierto el usuario en una instancia de la clase
let nuevo_usuario = new Usuarios(yo);

//Agrego el usuario a la base de datos.
nuevo_usuario.save();

//Uso el método FIND... de mongoose?
//Es una promesa por lo tanto necesita .then.
Usuarios.find({
    nombre: "David"
}).then((resultados) => {
    console.log("###############################")
    console.log(resultados)
    console.log("###############################")
})