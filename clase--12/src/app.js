import express from "express";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";

const app = express();
const PUERTO = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./src/public")); 

//Express-Handlebars
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

// Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);

const httpServer = app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});

import ProductManager from "./controllers/product-manager.js";
const productManager = new ProductManager("./src/models/productos.json");

const io = new Server(httpServer); 


io.on("connection", async (socket) => {
    console.log("Un cliente se conecto"); 

    //Enviamos el array de productos: 
    socket.emit("productos", await productManager.getProducts());

    //Recibimos el evento "eliminarProducto" desde el cliente: 
    socket.on("eliminarProducto", async (id) => {
        await productManager.deleteProduct(id);

        //Le voy a enviar la lista actualizada al cliente: 
        io.sockets.emit("productos", await productManager.getProducts());
    })

    //Agregamos productos por medio de un formulario: 
    socket.on("agregarProducto", async (producto) => {
        await productManager.addProduct(producto); 
        //Le voy a enviar la lista actualizada al cliente: 
        io.sockets.emit("productos", await productManager.getProducts());
    })
})