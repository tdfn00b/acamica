function agregarCelular(marca, gama, modelo, pantalla, os, precio) {
    nuevoCel = new Celular(marca, gama, modelo, pantalla, os, precio);
    listaCelulares.push(nuevoCel);
}

function mostrarListaCelular() {
    for (let i = 0; i < listaCelulares.length; i++) {
        console.log("Lista de Celulares")
        imprimir(listaCelulares[i])
    }
}

function mitadListaCelular() {
    mitadLista = listaCelulares.length / 2;
    nuevaLista = listaCelulares.slice(0, mitadLista);
    return nuevaLista //temporary return
}

function menorPrecio() {
    let menorPrecio = listaCelulares[0].get_precio();
    for (let i = 0; i < listaCelulares.length; i++) {
        if (listaCelulares[i].get_precio < menorPrecio) {
            console.log(i);
            menorPrecio = listaCelulares[i].precio;
        }
    }
    return menorPrecio //temporary return
}

function mayorPrecio() {
    let mayorPrecio = listaCelulares[0].get_precio();
    for (let i = 0; i < listaCelulares.length; i++) {
        if (listaCelulares[i].get_precio() > mayorPrecio) {
            console.log(i);
            mayorPrecio = listaCelulares[i].get_precio();
        }
    }
    return mayorPrecio //temporary return
}

function listaGama() {
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