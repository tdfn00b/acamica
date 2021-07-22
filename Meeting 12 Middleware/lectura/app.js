const express = require('express');
const app = express();

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

app.get('/estudiantes', esAdministrador,function (req, res) {
    res.send([{
        id: 1,
        nombre: "Lucas",
        edad: 35
    }])
});

app.post('/estudiantes', function (req, res) {
    res.status(201).send();
});

app.listen(5000, () => console.log("listening on 5000"));