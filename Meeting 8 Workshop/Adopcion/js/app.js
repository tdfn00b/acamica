let listaPerros = []
let estado = ["En adopción", "En proceso de adopción", "Adoptado"]

function cargarPerro() {
    let loopeando = true;

    while (loopeando) {
        //Cargo datos
        let nombre = prompt("¿Cuál es el nombre del perro?")
        let raza = prompt("¿Cuál es la raza del perro?")
        let edad = prompt("¿Cuál es la edad del perro?")
        let color = prompt("¿Cuál es el color del perro?")

        //Creo objeto
        perro = new Perro(nombre, raza, edad, color, estado[0])
        //Agrego a la lista
        listaPerros.push(perro)
        //Repito para agregar otro perro?
        loopeando = window.confirm("¿Desea agregar otro perro?");
    }
    //Actualizo el elemento html
    actualizarLista();
}

function actualizarLista() {
    //Declarar variables a usar en la función
    let display = document.getElementById("lista");
    let texto = '<tr><th>ID</th><th>Nombre</th><th>Raza</th><th>Edad</th><th>Color</th><th>Estado</th></tr>';

    //Verificar si la lista de perros está vacía o no.
    if (listaPerros.length == 0) {
        display.innerHTML = "No hay perros en adopción.";
    }
    //Si la lista no está vacía, ciclar por cada elemento de la lista y agregarlos a una variable como string
    else {
        for (i = 0; i < listaPerros.length; i++) {
            texto += "<tr><td>" + (i + 1) + "</td>" + "<td>" + listaPerros[i].getNombre() + "</td>" + "<td>" + listaPerros[i].getRaza() + "</td>" + "<td>" + listaPerros[i].getEdad() + "</td>" + "<td>" + listaPerros[i].getColor() + "</td>" + "<td>" + listaPerros[i].getEstado() + "</td> </tr>"
        }
        // Agregar la variable al documento html
        display.innerHTML = texto
    }
    //Visualizar todos los perros en la lista de perritos
    for (let i = 0; i < listaPerros.length; i++) {
        console.log("Lista de perritos")
        imprimir(listaPerros[i])
    }
    //Visualizar todos los perros en adopción
    for (let i = 0; i < listaPerros.length; i++) {
        console.log("Lista de perritos en adopción")
        if (listaPerros[i].getEstado() == estado[0]) {
            imprimir(listaPerros[i])
        }
    }
    //Visualizar todos los perros en proceso de adopción
    for (let i = 0; i < listaPerros.length; i++) {
        console.log("Lista de perritos en proceso de adopción")
        if (listaPerros[i].getEstado() == estado[1]) {
            imprimir(listaPerros[i])
        }
    }
    //Visualizar todos los perros adoptados
    for (let i = 0; i < listaPerros.length; i++) {
        console.log("Lista de perritos adoptados")
        if (listaPerros[i].getEstado() == estado[2]) {
            imprimir(listaPerros[i])
        }
    }
}

function cambiarEstado() {
    let id = prompt("Escribe el ID del perro");
    let nuevoEstado = prompt("Selecciona el nuevo estado: \n(1) En adopción \n(2) En proceso de adopción \n(3) Adoptado");
    listaPerros[id - 1].setEstado(estado[nuevoEstado - 1])
    //Actualizo el elemento html
    actualizarLista();
}

function imprimir(index) {
    console.log(
        listaPerros[index].getName
    )
}