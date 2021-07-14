console.log('Estoy en app.js')

//Cargar File System
let fs = require('fs');

//Crear console.log
//fs.writeFileSync('Meeting 9 NodeJS/challenge/js/console.log', 'Valor inicial' + '\n');

//Agregarle  una línea al console.log
//fs.appendFileSync('Meeting 9 NodeJS/challenge/js/console.log', 'Item')

//Creamos function para automatizar
let consoleLogPath = 'Meeting 9 NodeJS/challenge/console.log'

function newFile(fileName, text){
    fs.writeFileSync(fileName, text + '\n');
}
function appendFile(fileName, text){
    fs.appendFileSync(fileName, text + '\n');
}

newFile(consoleLogPath, 'Creé el console.log');
appendFile(consoleLogPath, 'Primer item desde función');
appendFile(consoleLogPath, 'Segundo item desde función');
appendFile(consoleLogPath, 'Tercer item desde función');
appendFile(consoleLogPath, 'Cuarto item desde función');
appendFile(consoleLogPath, 'Quinto item desde función');
