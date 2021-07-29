class Usuario {
    constructor(id, nombre,apellido,email){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        let permisos = "Permisos de usuario pete"
    }
    setPermisos () {
        this.permisos = permisos
    }

}



module.exports = {Usuario};


/*
class Usuario {
    #rol= 1
    constructor() {

        const otros = "";
        const datos = "";
    }

    setRol (id){
        rol = id;
    }

}

const user = new Usuario();

console.log(user.rol);
user.setRol(2);

console.log(user.rol);
*/