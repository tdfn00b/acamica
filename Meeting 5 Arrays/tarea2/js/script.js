var autos = [] //Crear array de autos vacio

//Función que agrega el input de texto y lo agrega al
//array de autos
function agregarAuto() { 
    let marca = document.getElementById("marca").value
    if (marca){
        if (!verificarDuplicados(marca)) {
            autos.push(marca);
            actualizarLista();
        }  
    }
}

//Función que verifica duplicados
function verificarDuplicados(elemento){
    let lista = autos;
    let resultado = false;
    /*
    for (let i = 0 ; i < lista.length;i++){ 
            if (lista[i] == elemento) {
                resultado = true;
                break;
            } 
    */  

    if (lista.indexOf(elemento) == -1){
        resultado = false
        } else { 
        resultado = true
        }

    if (resultado) {
        console.log("La marca " + elemento +  " ya existe, no se agrega.")
        return true;
    } else {
        console.log("Agregando " + elemento + ".")
        return false;
    }
}

//Función que remueve el primer elemento del array autos
function shiftAuto(){
    if (autos.length === 0) {
        console.log("No hay nada para remover")
    } else {
    let elemento = autos.shift()
    console.log("Removiendo el elemento " + elemento + " de la primera posición")
    }

    actualizarLista();
}
//Función que remueve el último elemento del array autos
function popAuto(){

    if (autos.length === 0) {
        console.log("No hay nada para remover")
    } else {
        let elemento = autos.pop();
        console.log("Removiendo el elemento " + elemento + " de la última posición")
    }
    actualizarLista();
}
//Función que actualiza la lista autos
function actualizarLista(){
    if (autos.length === 0) {
        display.innerHTML = "No hay elementos en la lista de autos.";
    } else {
        let display = document.getElementById("display");
        display.innerHTML = autos;
    }
}

//Función que cicla entre el array de autos y los
//va mostrando cada cierto tiempo
function ciclarAutos(){
    let lista = autos;
    let presentacion = document.getElementById("presentacion");
    let delay = 5
    // No sé como hacerlo
}