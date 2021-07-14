let fs = require('fs');

import {
    sumar
} from './calculator';

let num1 = 5;
let num2 = 4;

fs.appendFileSync('./log.txt', sumar(num1, num2))