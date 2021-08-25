//endpoint que reciba nombre apellido e email
//con un documento personal

//endpoint para añadir puntos de contacto a cada persona
//pueden ser teléfonos, redes sociales o direccición

//Importo librerías
const express = require('express')
const mongoose = require('mongoose');

//Asigno express a una variable.
const app = express();

//Sin usar express.json() el body del request era undefined.
//Tiene relación con el Content-Type PREGUNTA
app.use(express.json()); 

//Me conecto a la database
mongoose.connect('mongodb://localhost:27017/tarea22', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false //Necesito esto para poder usar findOneAndUpdate() y findOneAndRemove() 
});

//Creo un schema para almacenar en la base de datos
//Es como el constructor de una clase.
schema = {
    nombre: String,
    apellido: String,
    email: String
};

//Creo un MODEL Platos con el schema que cree.
//Se parece a una clase.
const Persona = mongoose.model('persona', schema);

//Creo un middleware para saber si el email es duplicado.
const email_duplicado = async (req,res,next) => {
    //Verificar la existencia del plato por nombre.
    let persona_email = req.body.email.toLowerCase();
    const exist = await Persona.exists({"email" : persona_email})

    if (exist){
        return res.send(`Persona existe ${persona_email}`)
    }

    req.email = persona_email
    console.log(persona_email)
    next();
}

//ENDPOINT: Ver todas la colección personas.
app.get('/personas', async (req, res) => {
    const ver_personas = await Persona.find()
    res.json(ver_personas);
});

//ENDPOINT: Crear persona
app.post('/personas', email_duplicado, async (req, res) => {
    let {nombre, apellido, email} = req.body;
        
    await Persona
        .create({nombre,apellido,email}) //cómo recibo este error? en el caso de que el tipo esperado sea distinto al esperado. PREGUNTA
        .then(res.send(`La persona "${nombre}" fue creada`))
        .catch(console.log('Problema'))
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