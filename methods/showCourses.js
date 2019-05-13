let showCourses = (list) => {
    let res;

    console.log('\n Listado de cursos: \n');
    setTimeout(function() {
        res = ' * id: ' + list[0].id + ' | nombre: ' + list[0].name + ' | duración: ' + list[0].duration + ' | valor: ' + list[0].value + '\n';
        console.log(res);
    }, 2000);
    setTimeout(function() {
        res = ' * id: ' + list[1].id + ' | nombre: ' + list[1].name + ' | duración: ' + list[1].duration + ' | valor: ' + list[1].value + '\n';
        console.log(res);
    }, 4000);
    setTimeout(function() {
        res = ' * id: ' + list[2].id + ' | nombre: ' + list[2].name + ' | duración: ' + list[2].duration + ' | valor: ' + list[2].value + '\n';
        console.log(res);
    }, 6000);
}

let getCourseInfo = (list, course_id, callback) => {
    let res;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == course_id) {
            res = list[i];
            break;
        } else {
            count++;
        }
    }
    if (count == list.length) {
        res = 'error';
        setTimeout(function() {
            callback(res);
        }, 2000);
    } else {
        setTimeout(function() {
            callback(res);
        }, 2000);
    }
}

module.exports = {
    showCourses,
    getCourseInfo
};