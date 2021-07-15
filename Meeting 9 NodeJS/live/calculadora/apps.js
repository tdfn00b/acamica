import fs from 'fs';
import {sumar,restar,multiplicar,dividir} from './calculator.js';

let x = 1;
let y = 0;

let array = [
sumar(x,y),
restar(x,y),
multiplicar(x,y),
dividir(x,y)
]

array.forEach(element => {
    console.log(element)
    fs.appendFileSync('./log.txt', String(element) + '\n');
});