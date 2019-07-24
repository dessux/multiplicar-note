// requires
const fs = require('fs'); // Paquetes nativos de nodes
// Colores en consola
var colors = require('colors');

//module.exports.creandoArchivo = (base) => {
// 
let creandoArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // Validar si la base enviada es un número
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return; // Detiene la ejecución del código en este punto
        }

        let dataFile = '';

        for (let i = 1; i <= limite; i++) {
            console.log(base + '*' + i + '=', base * i);
            dataFile += `${ base } * ${ i } = ${ base*i }\n`;
        }

        // Segmento de código copiado de fs.writeFile(file, data[, options], callback) en
        // https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback 
        const data = new Uint8Array(Buffer.from(dataFile));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`); // Se regresa solo el nombre del archivo
        });
    })
}

let listarTabla = (base, limite = 10) => { // Base tiene valor por defecto= 10

    console.log('==========================='.green);
    console.log(`=====  tabla de ${ base } =====`.red);
    console.log('==========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(base + '*' + i + '=', base * i);
        console.log(`${ base } * ${ i } = ${ base*i }`);
    }
}

// Todas las funciones a exportar se incluyen aquí
module.exports = {
    creandoArchivo,
    listarTabla
}