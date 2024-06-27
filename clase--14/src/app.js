/** CLASE 14 - MONGOOSE  **/

//Temas de hoy: 

//1) Clientes de base de datos
//2) MongoDB Atlas 
//3) DBaas (Database as a service)
//4) Configuracion e instalacion de Mongoose
//5) CRUD en nuestra App. 

//Instalen nodemon
//Instalen express

import express from "express";
import pacientesRouter from "./routes/pacientes.router.js"; 
const app = express(); 
const PUERTO = 8080; 

//Middleware: 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

//Rutas: 
app.use("/pacientes", pacientesRouter); 


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto de Mar del Plata`); 
})

//Nos conectamos con MongoDB Atlas: 

//1) Primer paso: importamos mongoose

import mongoose from "mongoose";

//2) Segundo pasiño: usamos el método "connect"

mongoose.connect("mongodb+srv://coderhouse69990:coderhouse@cluster0.k8gmho6.mongodb.net/Clinica")
    .then(() => console.log("Conectados a la Base de Datos"))
    .catch((error) => console.log("Tenemos un error fatal, vamos a morir: ", error)) 


