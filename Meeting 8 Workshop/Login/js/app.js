//Crear lista vacía de usuarios
let usuarios = [];

//Función que crea usuarios
function crearUsuario() {
    //Recuperar información del html (puede ser fuera de la función pero no tiene otro uso hasta ahora)
    let usuario = document.getElementById("usuario").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let pass = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;

    //Si alguno de los constructores de usuario no existen, no se puede hacer nada
    if (!usuario || !nombre || !apellido || !email || !pais || !pass) {
        console.log("No se puede crear el usuario");
        console.log("Todos los campos son requeridos");
        alert("Todos los campos son requeridos");
        return
    }

    //Si el password no es el mismo en los dos capmos de input, no es puede hacer nada
    if (pass != repass) {
        console.log("No se puede crear el usuario");
        console.log("Las contraseñas no coinciden");
        alert("Las contraseñas no coinciden");
        return
    }

    //Como uso el arr.indexof() en objetos?

    // if (usuarios.indexOf(email) != -1) {
    //     console.log("No se puede crear el usuario");
    //     console.log("El email ingresado ya existe");
    //     alert("El email ingresado ya existe");
    //     return
    // }


    // if (usuarios.indexOf(usuario) != -1) {
    //     console.log("No se puede crear el usuario");
    //     console.log("El usuario ingresado ya existe");
    //     alert("El usuario ingresado ya existe");
    //     return
    // }

    //Corroborar que el usuario y el email no existen
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
    //Crear un nuevo objeto usuario
    let nuevo_usuario = new Usuario(usuario, nombre, apellido, email, pais, pass)

    //Agregar usuario objeto al array de usuarios
    usuarios.push(nuevo_usuario)

    //Alertar al usuario y mostrar en consola el resultado
    console.log("Usuario " + nuevo_usuario.getUsuario() + " creado exitosamente")
    alert("Usuario " + nuevo_usuario.getUsuario() + " creado exitosamente")
}

//Función para loguear 
function login() {
    //Recuperar información del html
    let logUser = document.getElementById("logusuario").value;
    let logPass = document.getElementById("logpass").value;
    
    //Crear array para poder hacer el return
    let arrayIndex;

    //Recorrer el array de usuarios
    for (let i = 0; i < usuarios.length; i++) {
        //Para cada elemento del array comparar el nombre de usuario
        if (logUser == usuarios[i].getUsuario()) {
            //Si el usuario coincide, comparar contraseñas
            if (logPass == usuarios[i].getPass()) {
                arrayIndex = i;
                console.log("El usuario " + logUser + " ha ingresado correctamente.");
                console.log("Se encontro el usuario en el índice: " + arrayIndex);
                alert("El usuario " + logUser + " ha ingresado correctamente.");
                return arrayIndex; 
            } else {
                // Si no coincide el usuario o la contraseña, devolver un mensaje
                console.log("Usuario o contraseña incorrectos");
                alert("Usuario o contraseña incorrectos");
                return false;
            }
        }
    }
}