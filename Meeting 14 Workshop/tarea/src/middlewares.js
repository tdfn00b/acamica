const { usuariosRegistrados } = require("./datos");

function verificarExistenciaUsuario(req, res, next) {
    user_id = req.params.user_id;
    index = usuariosRegistrados.findIndex(user => user.id == user_id);
    user = usuariosRegistrados[index];

    if (!user) {
        res.status(404).send({
            resultado: `Id ${user_id} no encontrado`
        });
    } else {
        req.index = index;
        req.user = user;
        next();
    }
}

const esAdministrador = (req, res, next) => {
    /*
    lógica:
    Si el usuario haciendo el pedido (req.body.user?) tiene la propiedad de administrador, entonces next();
    */

    const usuarioAdministrador = true ;
    if (usuarioAdministrador) {
        next();
    } else {
        res.json({
            respuesta: 'No tiene los privilegios para realizar esta acción'
        });
    }
};

const esPropietario = (req, res, next) => {
        const usuarioPropietario = true;
        /*
        lógica:
        Si el usuario haciendo el pedido (req.body.user?) es propietario de topic_id o user_id, entonces next();
        
        */
        if (usuarioPropietario) {
            next();
        } else {
            res.json({
                respuesta: 'No tiene los privilegios para realizar esta acción'
            });
        }
    };

module.exports = {
    verificarExistenciaUsuario,
    esAdministrador,
    esPropietario
}