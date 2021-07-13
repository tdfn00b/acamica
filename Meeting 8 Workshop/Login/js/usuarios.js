class Usuario {
    //Constructor, los datos que hay que cargar
    constructor(usuario, nombre,apellido,email,pais,pass){
        this.usuario = usuario
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.pais = pais
        this.pass = pass
    }

    //Getters
    getUsuario(){return this.usuario}
    getNombre(){return this.nombre}
    getApellido(){return this.apellido}
    getEmail(){return this.email}
    getPais(){return this.pais}
    getPass(){return this.pass}

    //Setter
    setUsuario(usuario){this.usuario = usuario}
    setNombre(nombre){this.nombre = nombre}
    setApellido(apellido){this.apellido = apellido}
    setEmail(email){this.email = email}
    setPais(pais){this.pais = pais}
    setPass(pass){this.pass = pass}
}