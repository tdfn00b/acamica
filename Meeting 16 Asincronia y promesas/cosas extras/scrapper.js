const cheerio = require('cheerio');
const request = require('request-promise');

module.exports = {
    async existe(palabra) {
        const $ = await request({
            uri: 'https://dle.rae.es/srv/search?w=' + palabra,
            transform: body => cheerio.load(body)
        });

        const resultado = await $("#resultados").text().trim();

        var buf = Buffer.from(resultado);

        if (buf.indexOf("Aviso") == 0) {
            return "Esta palabra no existe";
        } else {
            return "Esta palabra si existe";
        }
    },
    async significado(palabra) {
        const $ = await request({
            uri: 'https://dle.rae.es/srv/search?w=' + palabra,
            transform: body => cheerio.load(body)
        });
        const resultado = await $("#resultados").text().trim();
        return resultado;
    }
};
