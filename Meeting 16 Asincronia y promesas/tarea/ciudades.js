//Importo módulo Express
const express = require("Express");
const app = express();
const port = 3000;

//Variables a usar
const ciudades = ["Londres", "Lima", "Dhaka", "Buenos Aires", "El Cairo", "Beijing", "Manila", "Delhi", "Ciudad de México", "Seúl","Jacarta","Tokyo"]
const to = ciudades.length
const cantidad_ciudades = 3

let ciudades_aleatorias = obtener_ciudades_aleatorias()

//Función que popula el array de ciudades aleatorias.
function obtener_ciudades_aleatorias(){
    let array_ciudades = []
    
    for (let index = 0; index < cantidad_ciudades; index++) {
        do {
            numero = Math.floor(Math.random() * to)
        } while (array_ciudades.some(ciudad => ciudad == ciudades[numero]))
        array_ciudades.push(ciudades[numero])
    }
    
    return array_ciudades
}


async function obtener_temperatura(ciudad){
    let data = `api.openweathermap.org/data/2.5/weather?q={${ciudad}}&appid={050a18086ca65d0d012464b72c6e4d15}`
    const res = await fetch(data)
        .then(res => res.main.temp)
        .catch(err => err)
}


const respuesta = {
    "Ciudad" : ciudades_aleatorias[0],
    "Temperatura" : obtener_temperatura(ciudades_aleatorias[0]),
    "Ciudad" : ciudades_aleatorias[1],
    "Temperatura" : obtener_temperatura(ciudades_aleatorias[1]),
    "Ciudad" : ciudades_aleatorias[2],
    "Temperatura" : obtener_temperatura(ciudades_aleatorias[2])
}


/* const respuesta = {
    "Ciudad" : ciudades_aleatorias[0],
    "Temperatura" : obtener_temperatura(ciudades_aleatorias[0]),
    "Ciudad" : ciudades_aleatorias[1],
    "Temperatura" : obtener_temperatura(ciudades_aleatorias[1]),
    "Ciudad" : ciudades_aleatorias[2],
    "Temperatura" : obtener_temperatura(ciudades_aleatorias[2])
} */

//Creo endpoint para recuperar las tres ciudades aleatorias
app.get("/ciudades", (req,res) => {
    res.json({respuesta});
})

app.get("/",(req,res) => {
    res.send("Super API que recupera temperaturas de ciudades")
})


app.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});