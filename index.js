// Importing data information
const { courses_data } = require('./data/courses_data');

// Importing method files
const { showCourses, getCourseInfo } = require('./methods/showCourses');
const { validateOptions } = require('./methods/validate');
const { createFile } = require('./methods/createFile');

// Importing yargs files
const { yargs_info } = require('./yargs/info.yargs');
const { yargs_subject } = require('./yargs/subject.yargs');

if (yargs_info.list) {
    showCourses(courses_data);
} else {
    validateOptions(yargs_subject.name, yargs_subject.cedula, yargs_subject.course_id, function (res) {
        if (res == true) {
            getCourseInfo(courses_data, yargs_subject.course_id, function (res) {
                if (res == 'error') {
                    console.log('\n El curso soliciatado no ha sido encontrado.');
                    showCourses(courses_data);
                } else {
                    console.log('\n Información del curso solicitado: \n * id: ' + res.id + ' | nombre: ' + res.name + ' | duración: ' + res.duration + ' | valor: ' + res.value);
                    if (yargs_subject.inscribirse) {
                        var full_info  = [];
                        full_info.push({ 
                            course_body: res,
                            student_name: yargs_subject.name,
                            student_cedula: yargs_subject.cedula
                        });
        
                        createFile(full_info[0]);
                    } else {
                        console.log('\n Usted no se ha inscrito.');
                        showCourses(courses_data);
                    }
                }
            });
        }
    });
}

