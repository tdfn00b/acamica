//Importación de módulos
const express = require('express');
const morgan = require('morgan');
/*
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Meeting 15 - Demo',
            version: '1.0.0'
        }
    },
    apis: ['./app.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
*/

// Importación de clases, middlewares y ¿base de datos?
const {User} = require('./demo')
const {Product} = require('./demo')
const {Order} = require('./demo')
let {isLoggedIn, orderStatus} = require('./middlewares');

let {userList, productList, orderList} = require('./init');
let {logList} = require('./demo')

// Inicialización de Express, Morgan y Swagger
const app = express();
app.use(express.json());
app.use(morgan('dev')); 
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//Creación de ENDPOINTS

//Lista de Usuarios
app.get('/users', (req, res) => {
    //Solo para el desarrollo
    res.json(userList);
});

//Lista de Productos
app.get('/products', (req, res) => {
    //Solo para el desarrollo
    res.json(productList);
});

//Lista de Ordenes
app.get('/orders/:user_id', isLoggedIn,(req, res) => {
    if(req.user.getPrivileges() <= 2){
        res.send('No puedes ver esta página')
    } else {
    res.json(orderList);}
});

//Lista de logueados (tiene que ser solo 1)
app.get('/login', (req, res) => {
    //Solo para el desarrollo
    res.json(logList);
});

//Registro de usuario
app.post('/users/register', (req, res) => {
    //Agrega un usuario.
    //Devuelve el usuario agregado.
    const {nickname,pass,pass2, full_name, phone_number, email, address} = req.body;
    if (!nickname || !pass || !full_name || !phone_number || !email || !address) {
        res.status(404).json({"respuesta":"Por favor, completa todos los campos."})
        return;
    }

    if (pass != pass2){
        res.status(404).json({"respuesta":"Las contraseñas no coinciden."})
        return;
    }

    if (pass.length < 4 ){
        res.status(404).json({"respuesta":"Tu contraseña tiene que tener más de 4 caracteres o no."})
        return;
    }

    if (userList.find(user => user.email == email || user.nickname == nickname)) {
        res.status(404).json({"respuesta" : "El nombre de usuario o email ya está registrado."})
        return;
    }

    newUser = new User(nickname,pass,full_name,phone_number,email,address)
    userList.push(newUser);
    
    res.send(newUser);
});

//Inicio de sesión
app.post('/users/login',(req, res) => {
    const {userLog, passLog} = req.body;
    
    if (logList[0]){
        res.send(`Cierra la sesión actual para continuar.`)
        return;
    }

    user = userList.find(user => (user.email == userLog || user.nickname == userLog) && (user.pass == passLog))
    
    if(user){
        logList.push(user);
        res.send(`Has iniciado sesión.`);
        return;
    } else {
        res.status(404).json({"respuesta" : "El nombre de usuario o contraseña son incorrectos."})
    }
});

//Cerrado de sesión
app.get('/users/logout', (req,res) =>{
    if (!logList[0]){
        res.send('No has iniciado sesión.')
    }

    usuario = logList[0].nickname
    logList.pop()
    res.send(`${usuario} has cerrado la sesión.`)
})

//Realizar pedido
app.post('/users/:user_id/orders',isLoggedIn,(req,res) => {
    //TODO: no permitir abrir otro pedido si ya hay un pedido en estado pendiente(1)
    // haciendo
    console.log(req.user.nickname)
    //console.log(orderList)
    let order = orderList.find(asd => asd.user.nickname == req.user.nickname)
    console.log(order)
    if (order) {
        if (order.status == 1) { 
            res.send('Tiene otro pedido pendiente')
            return;
        }
    }

    const {payment_method} = req.body;
    newOrder = new Order(req.user, payment_method)
    orderList.push(newOrder);
    res.send(`El usuario ${req.user.nickname} ha comenzado un pedido.`)
});

//Agregar productos a un pedido no confirmado
app.post('/users/:user_id/orders/:order_number', isLoggedIn, orderStatus,(req,res) => {
    //1 = Pendiente, 2 = Confirmado, 3 = En preparación, 4 = Enviado, 
    //5 = Entregado, 100 = Rechazado
    if (req.status == 100) {
        res.send('Su pedido fue rechazado.')
    }

    if (req.status >= 2) {
        res.send('No puede modificar el pedido.')    
    }

    const {product, qty} = req.body;

    orderList[req.order_index].addProduct(product,qty)
    res.send(`Producto agregado`)
});

//Cancelar pedido
app.delete('/users/:user_id/orders/:order_number',isLoggedIn, orderStatus, (req,res) => {
    //1 = Pendiente, 2 = Confirmado, 3 = En preparación, 4 = Enviado, 
    //5 = Entregado, 100 = Rechazado
    if (res.status >= 4) {
        res.send(`No es posible cancelar el pedido número ${res.order.orderNumber}.`)
    } 
    orderList.splice(req.order_index,1)
    res.send('Su pedido fue cancelado.')
});

//Ver pedido
app.get('/users/:user_id/orders/:order_number',isLoggedIn, orderStatus, (req,res) => {
    res.json(orderList[req.order_index])
});

//Confirmar pedido 
app.put('/users/:user_id/orders/:order_number',isLoggedIn, orderStatus,(req,res) => {
    const {newStatus} = req.body;
    orderList[req.order_index].setStatus(req.user, newStatus);
    res.send('Su pedido fue confirmado');
});

//Inicio server
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});

//TODO investigar como usar router para tener este archivo más organizado
//Investigar ERROR / ERR
//No es correcto que los endpoints usen varibles del usuario en la URL
//Aunque no pensaba en que el ENDPOINT se veía en el URL.
//TODO buscar como buscar esto ja


//Usar POST para el LOGOUT
//Investigar los VERBOS y lo que hacen