let fs = require('fs');
let hobbies = ['Mirar videos', 'Escuchar canciones', 'Tocar la guitarra', ]
let ruta = 'Meeting 9 NodeJS/live/hobbies/texto.txt'

hobbies.forEach(element => {
    fs.appendFileSync(ruta, element + '\n');
});

