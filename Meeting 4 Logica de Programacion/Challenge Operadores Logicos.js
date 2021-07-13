var condicionUno = (1=="1");
var condicionDos = (1==="1");
var condicionTres = 0 || 1;
var condicionCuatro = true && 1;
var condicionCinco = (1-1) && (2-2);
var condicionCinco2 = (1-1) && (2+2);
var condicionSeis = (1-1) || (2-2);
var condicionSiete = (1-1) || (2+2);
var condicionOcho = true || true;
var condicionNueve = false || false;

console.log("1 == string 1   >" + condicionUno)
console.log("1 === string 1   >" + condicionDos)
console.log("0 || 1   >" + condicionTres)
console.log("true && 1   >" + condicionCuatro)
console.log(" 1-1 && 2-2   >" + condicionCinco)
console.log(" 1-1 && 2+2   >" + condicionCinco2)
console.log(" 1-1 || 2-2   >" + condicionSeis)
console.log(" 1-1 || 2+2   >" +condicionSiete)
console.log(" true || true   >" +condicionOcho)
console.log(" false || false   >" +condicionNueve)

if (condicionCinco) {
    console.log("es verdadero")
}
else
{
    console.log ("es falso")
}