var env = require('./env.variables.json');

var node_env = process.env.NODE_ENV || 'development';
var variables = env[node_env];

console.log(`El puerto de desarrollo es: ${variables.PORT}`);