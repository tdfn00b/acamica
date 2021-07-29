class Topico {
    constructor(id, owner_id, titulo, descripcion){
            this.id = id;
            this.owner_id = owner_id;
            this.titulo = titulo;
            this.descripcion = descripcion;
            //this.comentarios = comentarios; //Debería?
    }
}

module.exports = {Topico};