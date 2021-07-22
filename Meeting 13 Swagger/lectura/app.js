const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Lectura Acámica SWAGGER',
            version: '1.0.0'
        }
    },
    apis: ['./app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const logger = function (req, res, next) {
    console.log(`request HTTP method: ${req.method}`);
    next();
}

const esAdministrador = function (req, res, next) {
    const usuarioAdministrador = false;
    if (usuarioAdministrador) {
        console.log('El usuario está correctamente logueado.');
        next();
    } else {
        res.send('No está logueado');
    }
};

app.use(logger);

app.get('/estudiantes', esAdministrador, function (req, res) {
    res.send([{
        id: 1,
        nombre: "Lucas",
        edad: 35
    }])
});

/**
 * @swagger
 * /estudiantes:
 *  post:
 *    description: Crea un nuevo estudiante
 *    parameters:
 *    - name: nombre
 *      description: Nombre del estudiante
 *      in: formData
 *      required: true
 *      type: string
  *    - name: edad
 *      description: Edad del estudiante
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 * 
 */
app.post('/estudiantes', function (req, res) {
    res.status(201).send();
});

app.use('/api-docs',
   swaggerUI.serve,
   swaggerUI.setup(swaggerDocs));

app.listen(5000, () => console.log("listening on 5000"));