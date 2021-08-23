//Importo librerías
const express = require('express')
const MongoClient = require('mongoose');

//Asigno express a una variable.
const app = express();

//Sin usar express.json() el body del request era undefined.
//Tiene relación con el Content-Type
app.use(express.json()); 

//Me conecto a la database
MongoClient.connect('mongodb://localhost:27017/menues', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false //Necesito esto para poder usar findOneAndUpdate() y findOneAndRemove()
});


//Creo un schema para almacenar en la base de datos
//Es como el constructor de una clase.
schema = {
    nombre: String,
    precio: Number,
    tipo_de_plato: String
};

//Creo un MODEL Platos con el schema que cree.
//Se parece a una clase.
const Platos = MongoClient.model('platos', schema);

//Creo un middleware para saber si el plato existe por nombre.
const plato_existe_por_nombre = async (req,res,next) => {
    //Verificar la existencia del plato por nombre.
    let plato_nombre = req.params.nombre.toLowerCase();
    const exist = await Platos.exists({"nombre" : plato_nombre})

    if (!exist){
        return res.send(`No se encontró el plato ${plato_nombre}`)
    }

    req.nombre = plato_nombre
    console.log(req.nombre)
    next();
}

//ENDPOINT: Ver todos los platos
app.get('/platos', async (req, res) => {
    const ver_platos = await Platos.find()
    res.json(ver_platos);
});

//ENDPOINT: Crear plato
app.post('/platos', async (req, res) => {
    let {nombre, precio, tipo_de_plato} = req.body;

    nombre = nombre.toLowerCase()
    tipo_de_plato = tipo_de_plato.toLowerCase()
    
    const exist = await Platos.exists({"nombre" : nombre})
    if (exist) {
        return res.send(`Un plato con el nombre ${req.body.nombre} ya existe`)
    }

    await Platos
        .create({nombre,precio,tipo_de_plato}) //cómo recibo este error?
        .then(res.send(`El plato "${nombre}" fue agregado`))
        .catch(console.log('Problema al crear el plato'))
    });

//ENDPOINT: busco plato por nombre y lo modifico
app.put('/platos/:nombre', plato_existe_por_nombre, async (req, res) => {
    await Platos
        .findOneAndUpdate({"nombre" : req.nombre}, req.body)
        .then(res.send(`Plato ${req.nombre} fue modificado.`))
        .catch(console.log('Problema al modificar el plato'))
});

//ENDPOINT: busco plato por nombre y lo borro
app.delete('/platos/:nombre', plato_existe_por_nombre, async (req, res) => {
    await Platos
        .findOneAndRemove({"nombre" : req.params.nombre})
        .then(res.send(`Plato ${req.nombre} fue eliminado.`))
        .catch(console.log('Problema al borrar el plato'))
});

//ENDPOINT: busco plato por nombre y lo muestro
app.get('/platos/:nombre', plato_existe_por_nombre, async (req, res) => {
    const el_plato = await Platos.findOne({"nombre" : req.nombre})
    res.json(el_plato)    
});

//ENDPOINT: Borro todos los platos de la base de datos.
app.delete('/platos', async (req, res) => {
    await Platos
        .deleteMany()
        .then(res.send('Base de datos limpiada'))
        .catch(console.log('Continua ejecutando porque no hay return'))
});

//Inicio servidor
let port = 3000;

app.listen(port, () => {
    console.log(' ')
    console.log('####################################################')
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
    console.log('####################################################')
    console.log(' ')
});