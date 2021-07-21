const fs = require('fs');


function trazabilidad(req, res, next) {
    respuesta = {
        respuesta: 'Endpoint ' + req.url
    };
    line = new Date().toISOString() + ' ' + JSON.stringify(respuesta) + "\n";
    fs.writeFile('./logs/traza.log', line, {
        'flag': 'a'
    }, function (err) {
        if (err) {
            console.log(err);
        }
    });
    next();
}

function handlerRoot(req, res) {
    res.json({
        version: "1.0.0"
    });
}

function handlerTime(req, res) {
    res.json({
        time: new Date().toISOString()
    });
}



module.exports = {
    handlerRoot,
    trazabilidad,
    handlerTime
}