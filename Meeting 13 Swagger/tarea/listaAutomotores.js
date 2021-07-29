const {Automotor} = require('./automotor');

//Agrego algunos automotores de prueba.
let automotor1 = new Automotor(1,"Volkswagen","Saveiro","2009","3","True");
let automotor2 = new Automotor(2,"Fiat","Punto","2006","5","False");
let automotor3 = new Automotor(3,"Kia","Pride Pop","2000","5","True");

let listaAutomotores = [automotor1 , automotor2, automotor3]

module.exports = {listaAutomotores};