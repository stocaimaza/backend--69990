/** CLASE 10 - WEBSOCKETS **/

//Temas:

//¿Que es websocket?
//Socket.io

//Websocket es un protocolo de comunicación bidireccional en tiempo real. A diferencia de HTTP, donde el cliente envia una solicitud y el servidor responde. 
//Me permite una comunicación continua entre cliente y servidor. 

//¿Cómo funciona?

//1) El cliente tiene que enviar una peticion HTTP al servidor y esto se conoce como handshake (apreton de manos). 

//2) El servidor recibe la petición de Handshake y procede a “responderle el saludo”, a esto se le llama “Abrir conexión”.

//3) A partir de este momento la comunicación es bidireccional entre el cliente y el servidor. 

import express from "express";
import exphbs from "express-handlebars";
const app = express(); 
const PUERTO = 8080; 
import viewsRouter from "./routes/views.router.js";

//Middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./src/public"));

//Configuramos Express-Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Rutas
app.use("/", viewsRouter);


const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

//Pasos para trabajar con Socket.io: 

//1) Instalamos con el siguiente comando: npm install socket.io


//2) Importamos el módulo: 
import { Server } from "socket.io";
//Los que escriben en common js: const socket = require("socket.io")

//3) Nos guardamos una referencia de nuestro servidor de express. 
//Ejemplo linea 39, guardamos en httpServer.

//Armamos un array de usuarios: 
const usuarios = [
    {id: 1, nombre: "Lionel", apellido: "Scaloni"},
    {id: 2, nombre: "Lionel", apellido: "Messi"},
    {id: 3, nombre: "Pepe", apellido: "Argento"},
    {id: 4, nombre: "Coky", apellido: "Argento"},
    {id: 5, nombre: "TinkiWinki", apellido: "Teletubbie"},
]


//4) Vamos a generar una instancia del lado del servidor: 
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("Un cliente se conecto");
    
    //Ahora voy a escuchar el evento "mensaje" y lo muestro por consola. 
    //Cuidado, el nombre del evento debe coincidir. 
    socket.on("mensaje", (data) => {
        console.log(data);
    })

    //El servidor le envia un mensaje al cliente: 
    socket.emit("saludito", "Hola Cliente, ¿como estas?");

    //Ahora le enviamos al cliente un array de usuarios: 
    socket.emit("usuarios", usuarios);
})