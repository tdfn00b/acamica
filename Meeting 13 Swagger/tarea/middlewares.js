const { listaAutomotores } = require("./listaAutomotores");

function verificarExistencia(req,res,next){
    id = req.params.id;
    index = listaAutomotores.findIndex(automotor => automotor.id == id);
    automotor = listaAutomotores[index];
   
    if (!auto) {
        res.status(404).send({resultado: `Id auto ${id} no existe`});
    } else {
        req.index = index;
        req.auto = auto;
        next();
    }
}

module.exports = {verificarExistencia}