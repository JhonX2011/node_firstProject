let validateOptions = (n, c, id, callback) => {
    let well = true;
    if (id == '') {
        console.log('\n La opción (course_id, -s) es requerida y debe proporcionar un valor numérico mayor a cero para la misma.');
        well = false;
    }
    if (c == '') {
        console.log('\n La opción (cedula, -c) es requerida y debe proporcionar un valor numérico mayor a cero para la misma.');
        well = false;
    }
    if (n == '') {
        console.log('\n La opción (name, -n) es requerida y debe proporcionar para la misma.');
        well = false;
    }
    callback(well);
}

module.exports = {
    validateOptions
};