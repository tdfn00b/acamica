class Comentario {
    constructor(id, topic_id, usuario_id, comentario){
            this.id = id;
            this.topic_id = topic_id;
            this.usuario_id = usuario_id;
            this.comentario = comentario;
    }
}

module.exports = {Comentario};