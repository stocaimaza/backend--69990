//1) Importamos mongoose: 
import mongoose from "mongoose";
//const mongoose = require("mongoose"); === con Common JS. 

//2) Dejo una constante con el nombre de la colleccion: 

const coleccion = "pacientes";

//3) Definimos el esquema de los documentos: "schema"

//El objeto "schema" nos permite definir la forma de los documentos. Configuramos el nombre de los campos y el tipo de dato que almacenaran. 

const pacienteSchema = new mongoose.Schema({
    nombre: String, 
    apellido: String, 
    edad: Number
})

//4) Definimos el "modelo": 

const pacientesModel = mongoose.model(coleccion, pacienteSchema); 

export default pacientesModel; 
