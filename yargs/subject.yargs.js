const options = {
    name: {
        default: '',
        demand: true,
        alias: 'n'
    },
    cedula: {
        default: '',
        demand: true,
        alias: 'c'
    },
    course_id: {
        default: '',
        demand: true,
        alias: 's'
    },
    inscribirse: {
        alias: 'i'
    }
}

const yargs_subject = 
    require('yargs')
    .command('matricula', 'Para realizar el proceso de matricula, ejecute los comandos requeridos.', options)            
    .argv;

module.exports = {
    yargs_subject
};