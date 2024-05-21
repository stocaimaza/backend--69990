//Calculadora de edad: 

//Importamos el módulo
const moment = require("moment"); 

//Variable que almacene la fecha actual
const fechaActual = moment(); 

//Variable que almacene la fecha de nacimiento 
const fechaNacimiento = moment("1987-03-10"); 

//Validamos la fecha: 

if (fechaNacimiento.isValid()) {
    const diasPasados = fechaActual.diff(fechaNacimiento, "days");

    //Mostramos el resultado por consola: 
    console.log(`Pasaron ${diasPasados} desde mi nacimiento`);
} else {
    console.log(`La fecha de nacimiento no es valida`);
}




