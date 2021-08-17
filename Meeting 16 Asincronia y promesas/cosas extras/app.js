var app = require('express')();
var scraper = require('./scrapper');

app.get('/', async (req, res) => {
    res.send('application loaded');
});

app.get('/significado/:word', async (req, res) => {
    const { word } = req.params;
    console.log(word);
    res.send({ significado: await scraper.significado(word) });
});

app.get('/existe/:word', async (req, res) => {
    const { word } = req.params;
    console.log(word);
    res.send(await scraper.existe(word));
});

app.listen(3000, () => {
    console.log('Listen on port 3000');
});