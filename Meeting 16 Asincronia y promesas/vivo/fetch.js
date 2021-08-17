const fetch = require('node-fetch')

const parrafo = "Tras el descubrimiento de América, los europeos se interesaron por las noticias de grandes yacimientos de oro en ese continente. Carlos V, rey de España, necesitado de fondos para financiar sus campañas bélicas contra Inglaterra, autorizó que cualquier español emprendiera el “rescate de oro” en América con la condición de que su gobierno recibiera la quinta parte.La Historia Verdadera de la Conquista de la Nueva España, escrita por Bernal Díaz del Castillo, quien acompañó a Hernán Cortés, es la fuente principal para conocer los sucesos relacionados con la conquista de México por el Imperio Español. Los relatos de la gente conquistada rara vez se escuchan, pero existen documentos que datan de 1528, escritos en A Cortés, motivado por su ambición personal decía: “Nosotros los españoles sufrimos de una enfermedad que sólo el oro puede curar”. Su contingente consistió de once barcos con aproximadamente 100 marineros, 530 soldados, un doctor, algunos carpinteros, ocho mujeres, algunos cientos de cubanos y algunos africanos, libres y esclavos. Cortés pasó un tiempo en la isla de Cozumel, intentando convertir a los nativos al Cristianismo, después continuó su viaje a la Península de Yucatán. Encontró a Jerónimo de Aguilar, un español que sobrevivió a un naufragio en 1511 y desde entonces había estado viviendo entre los mayas. Cortés luego conoció a una mujer que llamó Doña Marina, conocida comúnmente como Malinche. Estos dos personajes que se integraron al equipo de Cortés fueron la clave del éxito. Cortés le hablaba a Jerónimo de Aguilar en español, él traducía al maya para Malinche y ella traducía al náhuatl, el idioma de los Aztecas La Malinche aprendió español, se convirtió en la amante de Cortés y le dio un hijo. Malinche derivó en malinchista, un término que significa traidor.";

const palabras = parrafo.split(" ");
const to = palabras.length;
const numero = Math.floor(Math.random() * to)

let palabra = coso()

function coso (){
    arreglar_palabra = palabras[numero].replace(",","")
    arreglar_palabra = palabras[numero].replace(".","")
    arreglar_palabra = palabras[numero].replace(";","")
    return arreglar_palabra
}


const url = `https://dle.rae.es/${palabra}?m=form`

console.log(palabra)


fetch(url,{credentials: 'include'})
    .then(res => {
        console.log(res.statusText);
    })
    .catch(err => console.log(err));


const github = 'https://api.github.com/users/tdfn00b'

fetch(github).then(x => {console.log(x.login)}).catch(w =>{console.log(w)}) 