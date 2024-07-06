//Acá hacemos la conexion con Mongoose: 

//1) Importamos el modulo: 

import mongoose from "mongoose"; 

//2) Usamos el metodo connect para vincular la BD: 

mongoose.connect("mongodb+srv://coderhouse69990:coderhouse@cluster0.k8gmho6.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then( () => console.log("Conexion exitosa!")) 
    .catch( (error) => console.log("Vamos a morir, tenemos un error", error))