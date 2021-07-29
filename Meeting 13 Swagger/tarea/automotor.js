class Automotor {
    constructor(id, marca, modelo,fechaFabricacion,cantidadPuertas, disponibleVenta){
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.fechaFabricacion = fechaFabricacion;
            this.cantidadPuertas = cantidadPuertas;
            this.disponibleVenta  = disponibleVenta;
    }
}

module.exports = {Automotor};