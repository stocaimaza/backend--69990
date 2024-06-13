/** CHAT COMUNITARIO COMISION 69990**/
// Instalamos nodemon -D
//express socket.io express-handlebars

import express from "express";
import exphbs from "express-handlebars";
import { Server } from "socket.io";

const app = express();
const PUERTO = 8080; 

//Middleware
app.use(express.static("./src/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

//Configuramos Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Rutas
app.get("/", (req, res) => {
    res.render("index");
})


//Listen
const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto de Mar del Plata: ${PUERTO}`);
})

//Websockets: 

//1) Me guardo una referencia del servidor. 
//2) Generamos una instancia de Socket.io en el lado del backend. 

const io = new Server(httpServer);

//Generamos un array donde guardaremos los mensajes

let mensajes = [];

io.on("connection", (socket) => {
    console.log("Un cliente se conecto");

    socket.on("mensaje", (data) => {
        mensajes.push(data);
        //Acá estoy guardando la información que me envia el cliente (usuario + mensaje) y lo voy a almacenar en un array. 

        //Emitimos mensaje al cliente, con todo el array de datos: 
        io.emit("mensajesLogs", mensajes);
    })
})
