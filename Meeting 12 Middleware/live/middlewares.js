let contador = 0;

function middleware1(req, res, next) {
    console.log(contador++)
    console.log(req.url);
    console.log('Middleware1');
    let respuestaDirecta = false;
    if (respuestaDirecta === true) {
        res.json({
            respuesta: 'Middleware1'
        });
    } else {
        next();
    }
}

function middleware2(req, res, next) {
    console.log(contador++)
    console.log(req.url);
    console.log('Middleware2');
    let respuestaDirecta = false;
    if (respuestaDirecta === true) {
        res.json({
            respuesta: 'Middleware2'
        });
    } else {
        next();
    }
}

module.exports = {
    middleware1,
    middleware2
};