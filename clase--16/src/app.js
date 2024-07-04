/** MONGO AVANZADO I - CLASE 16 **/

//Temas de hoy:

//1) Indexacion
//2) Manejo de Populations en MongoDB
//3) PRE


//INDEXACION:  es un técnica o un proceso que se realiza para poder realizar consultas a la Base de Datos mucho más rapido. 

//Esto nos permitirá tener una referencia previa al momento de buscar un documento, con el fin de evitar recorrer toda la coleccion, documento por documento, hasta encontrar dicho valor. 

//Esta referencia se conoce como índice y se crea a partir de uno o varios campos de un documento. Entonces la busqueda se realiza sobre el indice evitando recorrer todos los datos. 

import mongoose from "mongoose";
// import UserModel from "./models/usuario.model.js";

// const main = async () => {

//     mongoose.connect("mongodb+srv://coderhouse69990:coderhouse@cluster0.k8gmho6.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0")

//     const respuesta = await UserModel.find({edad: {$lt:19}}).explain("executionStats");
//     console.log(respuesta);

// }

// main(); 

//Usamos el método explain() para ver las estadisticas de la consulta. El parametro que le tenemos que pasar es "executionStats", que me permite obtener el detalle de los tiempos de consulta. 

//Hice la consulta por los 25000 documentos y demoro 13 milisegundos. 

//Analisis: Vamos a consultar por todos los usuarios que se llaman "Carlos"

//Consultamos por "Carlos"
//nReturned: 111 documentos
//ExecutionTimeMillis: 19 milisegundos

//Ahora aplicando el indice en el nombre, el resultado es el siguiente: 
//ExecutionTimeMillis: 1 milisegundo

//Consulta por edad, los que tienen 18 y 19 añitos
//retorno 384 documentos y demoro 21 milisegundos

//Ahora aplicando el indice en la edad: 
//nReturned: 384,
//executionTimeMillis: 1. 

//2) MANEJO DE POPULATIONS EN MONGODB: 

//Populate es una funcion de Mongoose que me permite relacionar documentos de distintas colecciones (ejemplo: carrito y productos // clientes y mascotas ). 

//EJEMPLO CON ALUMNOS Y CURSOS. 

import CursoModel from "./models/curso.model.js";
import AlumnoModel from "./models/alumno.model.js";

const main = async () => {
    mongoose.connect("mongodb+srv://coderhouse69990:coderhouse@cluster0.k8gmho6.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0")

    //Buscamos a "Juan":
    const estudiante = await AlumnoModel.findById("6685f2356fc4bf7f715a5e03"); 
    //Buscamos el curso de "Backend": 
    const cursoBackend = await CursoModel.findById("6685f2d46fc4bf7f715a5e0a");

    //console.log(estudiante);
    //console.log(cursoBackend);

    //Ahora ingreso el curso al alumno: 
    //estudiante.cursos.push(cursoBackend);

    //Actualizo el documento para que se modifique la Base de Datos: 
    //await AlumnoModel.findByIdAndUpdate(estudiante._id, estudiante);

    //Ahooooora, si quiero ver el alumno con sus cursos yo puedo hacerlo asi: 

    const estudianteConCurso = await AlumnoModel.findById("6685f2356fc4bf7f715a5e03");
    //populate("cursos");

    console.log(estudianteConCurso);
}

main(); 
