const { listaAutomotores } = require("./listaAutomotores");

function verificarExistencia(req,res,next){
    id = req.params.id;
    index = listaAutomotores.findIndex(automotor => automotor.id == id);
    automotor = listaAutomotores[index];
   
    if (!automotor) {
        res.status(404).send({resultado: `Id ${id} no existe`});
    } else {
        req.index = index;
        req.automotor = automotor;
        next();
    }
}

module.exports = {verificarExistencia}