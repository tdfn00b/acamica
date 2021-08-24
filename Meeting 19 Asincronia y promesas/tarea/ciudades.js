//Importo módulo Express
const express = require("Express");
const app = express();
const port = 3000;

//Importo módulo Fetch
const fetch = require('node-fetch')

//Variables a usar
const ciudades = ["Londres", "Lima", "Dhaka", "Buenos Aires", "El Cairo", "Beijing", "Manila", "Delhi", "Tokyo"]
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

/* 
function obtener_temperatura(ciudad){
    const endpoint = `api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=050a18086ca65d0d012464b72c6e4d15`
    respuesta = fetch(endpoint)
        .then(res => {return res.main.temp})
        .catch(err => {return err})
}
 */

const obtener_temperatura = async (ciudad) => {
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=050a18086ca65d0d012464b72c6e4d15&units=metric`;
    const res = await fetch(endpoint);
    const temp = await res.json();
    if (res.status !== 200){
        throw Error(`Algo falló con la ciudad ${ciudad}`)
    }
    return temp.main.temp;
}

//Creo endpoint para recuperar las tres ciudades aleatorias
app.get("/ciudades", async (req,res) => {
        try{
            let respuesta
            for (let index = 0; index < cantidad_ciudades; index++) {

                respuesta.push({"Ciudad":ciudades_aleatorias[index],
            
            })
            }
/* 
            let respuesta = {
                "Ciudad1" : ciudades_aleatorias[0],
                "Temperatura1" : await obtener_temperatura(ciudades_aleatorias[0]),
                "Ciudad2" : ciudades_aleatorias[1],
                "Temperatura2" : await obtener_temperatura(ciudades_aleatorias[1]),
                "Ciudad3" : ciudades_aleatorias[2],
                "Temperatura3" : await obtener_temperatura(ciudades_aleatorias[2]),
            } */
            console.log (ciudades_aleatorias)
            res.json({respuesta})
        } catch (error) {
            console.log(error);
            res.json({error})
        } 
})

app.get("/",(req,res) => {
    res.send('Super API que te da la temperatura de 3 ciudades')
})

app.listen(port, () => {
    console.log(`Servidor iniciado. Escuchando el puerto ${port}.`)
});