/** CLASE 6 - SERVIDORES WEB **/

//Temas de hoy: 

//1) ¿Que es un servidor?
//2) Protocolo HTTP
//3) Modulo Nativo HTTP
//4) Express JS
//5) Objeto Request
//6) Actividad Práctica (antes era desafio, ahora es opcional)

//1) Servidor: software o hardware que almacena y administra recursos. Como imagenes, archivos, sitios web, videos, datos, juegos, etc. Su funcion es responder a las peticiones de los clientes. Aclaramos que el servidor puede responder a multiples clientes al mismo tiempo. 
//A esta relacion se la conoce como MODELO CLIENTE- SERVIDOR. 

//CLIENTE = puede ser el navegador = pedido = request 
//SERVIDOR = escucha el pedido y responde = response

//¿Bajo que protocolo se comunican?
//HTTP: significa "Hypertext Transfer Protocol", es un protocolo de comunicación, es decir un conjunto de reglas que definen como se comunican dos o mas dispositivos. 


//console.log("Hola Mamá, estoy programando!!"); 


//Modulo Nativo HTTP: Viene por defecto con Node JS y me permite crear un servidor web, enviando información a traves del protocolo HTTP. 

/////// Creamos nuestro primer servidor: 

//1) Vamos a importar el modulo HTTP

//import http from "http" con ES Modules. 

//const http = require("http"); 

//2) Vamos a crear el servidor web. Para esto vamos a utilizar el método createServer() del modulo HTTP. Este método recibe como parametro una funcion callback que va a ser ejecutada cada vez que se realice una peticion. Y esta funcion callback recibe dos parametros: Request Y Response. 


// const server = http.createServer((request, response) => {
//     console.log("Se realizo una peticion al servidor"); 
//     response.end("Mi primer Hola Mundo desde el Backend!");
//     //El método end del objeto response me permite enviar un mensaje al cliente (navegador);
// })

//3) Vamos a poner a escuchar a nuestro servidor

// const PUERTO = 8080;

// server.listen(PUERTO, () => {
//     console.log("Escuchando en el puerto " + PUERTO);
// })

/////////////////////////////////////////////////////////////////////

//CREANDO UN SERVIDOR CON EXPRESS JS: 

//Express JS: Es un framework minimalista de Node JS que nos permite crear servidores web de una forma mucho más simple. 

//Instalamos con el comando: npm install express
//Se nos deberia descargar la version 4.19

//1) Importamos el módulo de express: 
//import express from "express"(Con ES Modules);

const express = require("express");
const PUERTO = 8080;

//2) Creamos la aplicación de Express: 

const app = express(); 

//3) Vamos a crear una ruta: 

app.get("/clientes", (req, res) => {
    res.send("mi primera chamba con express js");
})

//4) Ponemos a escuchar a nuestro servidor: 

app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`);
})

//Métodos o verbos: 

//Los métodos HTTP o verbos son los que nos permiten indicarle al servidor que tipo de acción queremos realizar. Los mas usados son los siguientes: 

//GET: pedimos datos al servidor. 
//POST: enviamos datos al servidor. 
//PUT: actualizamos datos del servidor. 
//DELETE: eliminamos algun dato del servidor. 

//Practicamos con nuevas rutas:

app.get("/tienda", (req, res) => {
    res.send("Llegaste a la seccion: Tienda");
})

app.get("/", (req, res) => {
    res.send("Bienvenidos a Tienda Coder");
})

app.get("/contacto", (req, res) => {
    res.send("Formulario de Contacto");
})

//REQUEST = CLIENTE
//RESPONSE = SERVIDOR

//Objeto Request = es un objeto que representa la peticion que realiza el cliente al servidor. Este objeto tiene información sobre el metodo, la url, los parametros, etc. 

//REQ.PARAMS
//Realizamos un endpoint que reciba un parametro: 

app.get("/cliente/:nombre", (req, res) => {
    //let nombre = req.params.nombre; 
    
    //Otra forma de hacerlo: 

    let {nombre} = req.params;
    res.send("El nombre del cliente es: " + nombre);
})

//Creamos un array de Productos: 

const misProductos = [
    {id: 1, nombre: "Fideos", precio: 150},
    {id: 2, nombre: "Arroz", precio: 350},
    {id: 3, nombre: "Aceite", precio: 650},
    {id: 4, nombre: "Tomate", precio: 1050},
    {id: 5, nombre: "Pan", precio: 1000},
    {id: 6, nombre: "Vino", precio: 10},
]

//Vamos a crear una ruta de productos que me retorne todo el array: 

app.get("/productos", (req, res) => {
    res.send(misProductos);
})

//Creamos una rutita que me retorne un producto especifico por ID. 

app.get("/productos/:id", (req, res) => {
    //let id = req.params.id;
    let {id} = req.params; 
    //Siempre que nosotros recuperamos un dato de los params este viene en String
    //Lo podemos parsear:
    let productoBuscado = misProductos.find(producto => producto.id === parseInt(id)); 

    if (productoBuscado) {
        res.send(productoBuscado);
    } else {
        res.send("Producto no encontrado")
    }
})

//Req.query: query se refiere a multiples consultas que se pueden hacer en determinado endpoint. Simplemente le tenemos que colocar el simbolo de ? luego del nombre de la consulta. 


app.get("/usuarios", (req, res) => {
    let nombre = req.query.nombre; 
    let apellido = req.query.apellido; 

    //Otra forma de hacerlo: 
    //let {nombre, apellido} = req.query; 

    res.send(`Bienvenido Usuario ${nombre} - ${apellido}`);
})

//Ejemplo para testearlo: 
//http://localhost:8080/usuarios?nombre=Samuel&apellido=Tocaimaza