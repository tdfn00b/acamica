//Importo la clase Usuario
const {Usuario} = require('./usuario')

//Creo la lista de usuarios registrados
let usuariosRegistrados = []
let listaTopicos = []
let listaComentarios = []

//listaTopicos = [{1, 1, "Como se hace un foro en javascript usando nodeJS", "Ayuda please", }, {}]
//listaComentarios = [{1,1,2, "no tengo idea, saludos."}]

//Creo usuarios de prueba
usuario1 = new Usuario(1,"David","Guerrero","guerrerodavidm@gmail.com");
usuario2 = new Usuario(2,"Juan","Perez","juanperez@gmail.com");
usuario3 = new Usuario(3,"Pepe","Gonzalez","pepegonzalez@gmail.com");

//Agrego usuario a lista de usuarios registraos
usuariosRegistrados.push(usuario1);
usuariosRegistrados.push(usuario2);
usuariosRegistrados.push(usuario3);

//Exporto lista de usuarios registrados
module.exports = {usuariosRegistrados, listaTopicos, listaComentarios};
