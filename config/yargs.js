const opts = { // Opciones de parámetros
    base: {
        demand: true, // Obligatorio (true)
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera in archivo con la tabla de multiplicar', opts)
    .help()
    .argv; // Cierre del yargs

module.exports = {
    argv
}