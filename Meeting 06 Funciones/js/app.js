//Ingresar un número para hacer las operaciones
let numero = prompt("Inserta un número")

//Calcular si el número es par
let esPar = (numero%2 == 0) ? console.log(numero + " es par") : console.log(numero + " es impar");

//Calcular el cuadrado del número
let cuadrado = (numero) => console.log("El cuadrado del número " + numero + " es: " (numero * numero) )

//Calcular el factorial del número
function factorial(n) {
    if (n == 0) { 
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

//Calcular el área de un círculo
let pi = Math.PI;
let areaCirculo = (r) => pi * (r * r);

/* Crea una función que reciba los parámetro de
usuario y contraseña, y debe retornar true o false
dependiendo si son o no válidos.
Crea un array donde cada elemento
contenga otro array de 2 posiciones para
almacenar una combinación de usuario y
contraseña válido */

const credenciales = {
    "usuario1" : "contraseña1",
    "usuario2" : "contraseña2",
    "usuario3" : "contraseña3",
}

function login(user, pass) {
    let result = false;
    credenciales.forEach(function(usuario){ 
        if(user == credenciales[0] && pass == usuario[1]){
            result = true;
        }
        else{
            result = false;
        }
        
    });return result;
}

//Llamar a las funciones para resolver los cálculos
cuadrado(numero);
console.log("El factorial de " + numero + " es " + factorial(numero));
areaCirculo(numero);


function validateField(user,password) {
    const userData = {
        user: '',
        password:'',

    }
}