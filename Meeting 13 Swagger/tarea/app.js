//Importando cosas
const express = require('express');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Programamos Juntos - Meeting 13 Swagger',
            version: '1.0.0'
        }
    },
    apis: ['./app.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Importacion de clases, middleware y ¿base de datos?
const {Automotor} = require('./automotor')
const {verificarExistencia} = require('./middlewares');
let {listaAutomotores} = require('./listaAutomotores');

// Inicializacion de Express y Morgan
const app = express();
app.use(express.json());
app.use(morgan('dev'));

//Creacion de ENDPOINTS
//CRUD - Create, Read, Update, Delete

/**
 * @swagger
 * /:
 *  get:
 *    summary: Programa
 *    description : Venta de Automotores
 *    responses:
 *     200: 
 *       description: Programa venta de automotores
 */

app.get('/', (req, res) => {
    res.json({"Programa":"Venta de Automotores v0.0.1"})
});

/**
 * @swagger
 * /automotores:
 *  get:
 *    summary: Automotores
 *    description: Lista de automotores
 *    responses:
 *       200:
 *         description: Lista de todos los automotores
 */
app.get('/automotores', (req, res) => {
    //Lee toda la lista de automotores
    //Devuelve la lista de todos los automotores.
    res.json(listaAutomotores);
});


/**
 * @swagger
 * /automotores/{id}:
 *  get:
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID del automotor
 *        required: true
 *        type: integer
 *      responses:
 *          201:
 *              description: Automotor encontrado.
 *          404:
 *              description: El ID pedido no existe.
 *          
 * 
*/
app.get('/automotores/:id',verificarExistencia, (req,res) => {
    //Lee la lista de automotores
    //Devuelve de la lista el automotor con el index buscado
    let index = req.index
    res.json(listaAutomotores[index]);
});

/**
 * @swagger
 * /automotores:
 *  post:
 *    summary: automotores.
 *    description : Listado de automotores.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: automotores
 *        description: Crea un nuevo automotor.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              description: ID de automotor a agregar
 *              type: integer
 *            marca:
 *              description: Marca del automotor
 *              type: string
 *            modelo:
 *              description: Modelo del automotor
 *              type: string
 *            fechaFabricacion:
 *              description: Fecha de fabricacion del automotor
 *              type: string
 *            cantidadPuertas:
 *              description: Cantidad de puertas del automotor
 *              type: integer
 *            disponibleVenta:
 *              description: Disponiniblidad de venta
 *              type: boolean
 *    responses:
 *      201:
 *       description: Automotor agregado.
 *      
 */

app.post('/automotores', (req, res) => {
    //Agrega un automotor, si ya existe no agregarlo.
    //Devuelve el automotor agregado y la lista completa de automotores.
    let automotor = req.body;
    listaAutomotores.push(automotor);
    res.json(automotor);
});

/**
 * @swagger
 * /automotores/{id}:
 *  put:
 *    summary: Modificación de automotor segun ID.
 *    description : Modificación de automotor segun ID.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID del automotor
 *        required: true
 *        type: integer
 *      - in: body
 *        name: automotores
 *        description: Automotor a modificar
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              description: ID de automotor a modificar
 *              type: integer
 *            marca:
 *              description: Marca del automotor
 *              type: string
 *            modelo:
 *              description: Modelo del automotor
 *              type: string
 *            fechaFabricacion:
 *              description: Fecha de fabricacion del automotor
 *              type: string
 *            cantidadPuertas:
 *              description: Cantidad de puertas del automotor
 *              type: integer
 *            disponibleVenta:
 *              description: Disponiniblidad de venta
 *              type: boolean
 *    responses:
 *      201:
 *       description: Automotor modificado.
 *      
 */

app.put('/automotores/:id', verificarExistencia, (req, res) => {
    // Modifica un automotor por ID
    let autoNuevo = req.body;
    let index = req.index
    resultado = 'Actualización según el indice: ' + index
    listaAutomotores[index] = autoNuevo;
    res.json({ resultado: resultado, valor: autoNuevo });
});

/**
 * @swagger
 * /automotores/{id}:
 *  delete:
 *    summary: Eliminar un automotor según su ID
 *    description: Elimina el automotor.
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del automotor a eliminar.
 *         schema:
 *           type: integer
 *           example: 1
 *    responses:
 *       200:
 *        description: Automotor eliminado correctamente.
 *       404:
 *        description: Automotor no encontrado.  
 */

app.delete('/automotores/:id', verificarExistencia, (req, res) => {
    //Remueve un automotor por id
    let automotor = req.automotor
    let index = req.index
    resultado = 'Borrado según el indice: ' + index
    listaAutomotores.splice(index, 1);
    res.json({ "resultado": resultado, "valor": automotor });
});


//ENDPOINT para swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//Inicio server
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});