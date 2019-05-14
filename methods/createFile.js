const fs = require('fs');

let createFile = (info) => {
    text = 'El estudiante: ' + info.student_name + ' identificado con numero de cédula: \n' + info.student_cedula +
            ' se ha matriculado al curso de: ' + info.course_body.name + '\nel cual tiene una duración de: ' + info.course_body.duration +
            ' y cuesta: ' + info.course_body.value;

    fs.writeFile('inscripciones.txt', text, (err) => {
        if (err) throw (err);
        console.log('\n Estudiante inscrito exitosamente.');
        console.log('\n Se ha creado un archivo con la información de la inscripción del estudiante, llamado inscripciones.txt.');
    });
}

module.exports = {
    createFile
};