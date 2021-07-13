class Perro {
    //Constructor, los datos que hay que cargar
    constructor(nombre,raza,edad,color,estado){
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
        this.color = color
        this.estado = estado
    }

    //Getters
    getNombre(){return this.nombre}
    getRaza(){return this.raza}
    getEdad(){return this.edad}
    getColor(){return this.color}
    getEstado(){return this.estado}

    //Setter
    setNombre(nombre){this.nombre = nombre}
    setRaza(raza){this.raza = raza}
    setEdad(edad){this.edad = edad}
    setColor(color){this.color = color}
    setEstado(estado){this.estado = estado}
}