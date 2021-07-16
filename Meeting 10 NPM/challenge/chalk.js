const chalk = require('chalk');
const text = 'Hola Mundo!';
let arrayText = Array.from(text);
let n = 0
let print = '';

arrayText.forEach(element => {
    if (n % 2 != 1) {
        print += chalk.blue(String(element))
    } else {
        print += chalk.yellow(String(element))
    }
    n++;

});

console.log(print);