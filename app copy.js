// Documentaoción para acceso a archivos de:
// https://nodejs.org/dist/latest-v12.x/docs/api/
// Seleccionar FileSystem,en Table of Contents Fyle System
// Copiar const fs = require('./fs'); // Paquete del proyecto creados por el usuario

/*
// requires
const fs = require('fs'); // Paquetes nativos de nodes
//const fs = require('express');  // Paquetes no nativos de nodes
//const fs = require('express');  // Paquetes no nativos de nodes
*/

//const multiplicar = require('./multiplicar/multiplicar');
// const con destructuración (las llaves siempre van después de una constante o un let)
// Entre las llaves se ponen los archivos que estan en el export de multiplicar.js
const { creandoArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

//const argv = require('yargs').argv;
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, // Obligatorio (true)
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv; // Cierre del yargs

//let base = '5';

/*
let dataFile = '';

for (let i = 1; i <= 10; i++) {
    console.log(base + '*' + i + '=', base * i);
    dataFile += `${ base } * ${ i } = ${ base*i }\n`;
}

// Segmento de código copiado de fs.writeFile(file, data[, options], callback) en
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback 
const data = new Uint8Array(Buffer.from(dataFile));
fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ baase }.txt ha sido creado!`);
});
*/

// Ver module en consola:
//console.log('module: ', module);

//console.log('multiplicar: ', multiplicar);

// Procesos:
//console.log('process: ', process);
// Argumentos pasados por consola
//console.log('process: ', process.argv);


/* Ejercicio Capítulo 31, 32

// Parámetros por consola
let argv = process.argv;
let parametro = argv[2]; // Parámetro en el índice 2 del arreglo, posición 3

// $ node app.js --base=5
console.log('process.argv[2]: ', parametro); // process.argv[2]:  --base=5

base = parametro.split('=')[1]; // Obtiene la segunda posición, indice 1 del arreglo
console.log('base: ', base);

creandoArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log('error:', e));

    */

// Parámetros por consola
let argv2 = process.argv;

console.log('argv: ', argv);
console.log('argv.base: ', argv.base);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log('error:', e));
        break;
    case 'crear':
        console.log('crear');
        //creandoArchivo(base)
        creandoArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log('error:', e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}

console.log('argv.limite: ', argv.limite);
//console.log('argv2: ', argv2);