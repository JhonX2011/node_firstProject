const options = {
    name: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    },
    course_id: {
        demand: true,
        alias: 's'
    },
    matricularme: {
        alias: 'm'
    }
}

const yargs_subject = 
    require('yargs')
    .command('matricula', 'Para realizar el proceso de matricula, ejecute los comandos requeridos.', options)            
    .argv;

module.exports = {
    yargs_subject
};