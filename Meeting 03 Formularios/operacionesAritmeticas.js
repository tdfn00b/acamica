/*
var n1 = document.getElementById("In1").value;
var n2 = document.getElementById("In2").value;
*/

function getElements(){
    window.n1 = document.getElementById("In1").value;
    window.n2 = document.getElementById("In2").value;
}


function suma(){
    var resultado = parseInt(n1) + parseInt(n2)
    alert("La suma da como resultado: " + resultado)
}

function resta(){
    var resultado = parseInt(n1) - parseInt(n2)
    alert("La resta da como resultado: " + resultado)
}

function multiplicacion(){
    var resultado = parseInt(n1) * parseInt(n2)
    alert("La multiplicacion da como resultado: " + resultado)
}

function division(){
    var resultado = parseInt(n1) / parseInt(n2)
    alert("La division da como resultado: " + resultado)
}

function cuadrado(){
    var resultado = ( parseInt(n1) ** 2 ) + ( parseInt(n2) ** 2 )
    alert("La suma del cuadrado da como resultado: " + resultado)
}
