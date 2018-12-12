const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tare por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de unas tarea ', {
        descripcion,
        completado
    })

.command('borrar', 'Borra una  tarea ', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}