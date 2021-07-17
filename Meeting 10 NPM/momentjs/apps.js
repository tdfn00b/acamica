const moment = require('moment');

let local = moment().format('LTS')
let utc = moment.utc().format('LTS')
let diferencia = utc.diff(local)
console.log(local)
console.log(utc)
console.log(diferencia)
console.log(moment().date())