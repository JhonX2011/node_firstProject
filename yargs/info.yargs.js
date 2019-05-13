const options = {
    list: {
        demand: true,
        alias: 'l'
    }
}

const yargs_info = 
    require('yargs')
    .command('info', 'Despliegue la información de los cursos, ejecutando el comando -l.', options)            
    .argv;

module.exports = {
    yargs_info
};