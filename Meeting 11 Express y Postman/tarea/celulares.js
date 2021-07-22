//FALTA TERMINAR

let listaCelulares = [];

class Celular {
    constructor(marca, gama, modelo, pantalla, os, precio) {
        this.marca = marca;
        this.gama = gama;
        this.modelo = modelo;
        this.pantalla = pantalla;
        this.os = os;
        this.precio = precio;
    }

    //Getters
    get_marca() {
        return this.marca
    }
    get_gama() {
        return this.gama
    }
    get_modelo() {
        return this.modelo
    }
    get_pantalla() {
        return this.pantalla
    }
    get_os() {
        return this.os
    }
    get_precio() {
        return this.precio
    }

    //Setter
    set_marca(marca) {
        this.marca = marca
    }
    set_gama(gama) {
        this.gama = gama
    }
    set_modelo(modelo) {
        this.modelo = modelo
    }
    set_pantalla(pantalla) {
        this.pantalla = pantalla
    }
    set_os(os) {
        this.os = os
    }
    set_precio(precio) {
        this.precio = precio
    }
    
    //Funciones

    //Agrega celular a la lista de celulares
    agregarCelular(marca, gama, modelo, pantalla, os, precio) {
        nuevoCel = new Celular(marca, gama, modelo, pantalla, os, precio);
        listaCelulares.push(nuevoCel);
    }

    //Muestra por consola la lista de celulares linea por linae
    mostrarListaCelular() {
        console.log(listaCelulares)
        return listaCelulares; //temporary return
        }

    //Muestra la mitad de la lista de celulares
    mitadListaCelular() {
        nuevaLista = listaCelulares.slice(0, listaCelulares.length / 2);
        console.log(nuevaLista);
        return nuevaLista; //temporary return
    }

    menorPrecio() {
        let menorPrecio = listaCelulares[0].get_precio();
        for (let i = 0; i < listaCelulares.length; i++) {
            if (listaCelulares[i].get_precio < menorPrecio) {
                console.log(i);
                menorPrecio = listaCelulares[i].precio;
            }
        }
        return menorPrecio //temporary return
    }

    mayorPrecio() {
        let mayorPrecio = listaCelulares[0].get_precio();
        for (let i = 0; i < listaCelulares.length; i++) {
            if (listaCelulares[i].get_precio() > mayorPrecio) {
                console.log(i);
                mayorPrecio = listaCelulares[i].get_precio();
            }
        }
        return mayorPrecio //temporary return
    }

    listaGama() {
        let gamaAlta = []
        let gamaMedia = []
        let gamaBaja = []

        for (let i = 0; i < listaCelulares.length; i++) {
            if (listaCelulares[i].get_gama() === "Alta") {
                gamaAlta.push(listaCelulares[i]);
            }
        }

        for (let i = 0; i < listaCelulares.length; i++) {
            if (listaCelulares[i].get_gama() === "Media") {
                gamaMedia.push(listaCelulares[i]);
            }
        }

        for (let i = 0; i < listaCelulares.length; i++) {
            if (listaCelulares[i].get_gama() === "Baja") {
                gamaBaja.push(listaCelulares[i]);
            }
        }

        let listaPorGamas = [gamaAlta, gamaMedia, gamaBaja];

        return listaPorGamas; //temporary return
    }

}

export {Celular, listaCelulares}