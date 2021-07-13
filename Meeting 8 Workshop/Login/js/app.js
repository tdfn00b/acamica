let usuarios = [];

function crearUsuario() {
    let usuario = document.getElementById("usuario").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let pass = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;

    if (!usuario || !nombre || !apellido || !email || !pais || !pass) {
        console.log("No se puede crear el usuario");
        console.log("Todos los campos son requeridos");
        alert("Todos los campos son requeridos");
        return
    }

    if (pass != repass) {
        console.log("No se puede crear el usuario");
        console.log("Las contraseñas no coinciden");
        alert("Las contraseñas no coinciden");
        return
    }

    // if (usuarios.indexOf(email) != -1) {
    //     console.log("No se puede crear el usuario");
    //     console.log("El email ingresado ya existe");
    //     alert("El email ingresado ya existe");
    //     return
    // }


    for (let i = 0; i < usuarios.length; i++) {
        if (usuario == usuarios[i].getUsuario()) {
            console.log("No se puede crear el usuario");
            console.log("El usuario ingresado ya existe");
            alert("El usuario ingresado ya existe");
            return
        }
        if (email == usuarios[i].getEmail()) {
            console.log("No se puede crear el usuario");
            console.log("El email ingresado ya existe");
            alert("El email ingresado ya existe");
            return
        }

    }

    // if (usuarios.indexOf(usuario) != -1) {
    //     console.log("No se puede crear el usuario");
    //     console.log("El usuario ingresado ya existe");
    //     alert("El usuario ingresado ya existe");
    //     return
    // }

    let nuevo_usuario = new Usuario(usuario, nombre, apellido, email, pais, pass)
    usuarios.push(nuevo_usuario)
    console.log("Usuario " + nuevo_usuario.getUsuario() + " creado exitosamente")
    alert("Usuario " + nuevo_usuario.getUsuario() + " creado exitosamente")
}

function login() {
    let logUser = document.getElementById("logusuario").value;
    let logPass = document.getElementById("logpass").value;
    let arrayIndex;

    for (let i = 0; i < usuarios.length; i++) {
        if (logUser == usuarios[i].getUsuario()) {
            if (logPass == usuarios[i].getPass()) {
                arrayIndex = i;
                console.log("El usuario " + logUser + " ha ingresado correctamente.");
                console.log("Se encontro el usuario en el índice: " + arrayIndex);
                alert("El usuario " + logUser + " ha ingresado correctamente.");
                return arrayIndex; 
            } else {
                console.log("Usuario o contraseña incorrectos");
                alert("Usuario o contraseña incorrectos");
                return false;
            }
        }
    }
}