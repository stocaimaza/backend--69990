/** CLASE 4 - NODE JS Y NPM  **/

//¿Que es un módulo? 
//Es un archivo de JavaScript que contiene un conjunto de funciones o variables que nos permiten resolver una tarea en particular. 

//Tenemos diferentes tipos de módulos. 

//1) Modulos escritos por nosotros mismos. 

//Importamos con CommonJS: 
// const saludos = require("./saludos.js");

// saludos.temprano();
// saludos.tarde();
// saludos.noche();


//Importacion con ES Modules. 
//Llega en el año 2015 con ES6. 

// import { temprano, tarde, noche } from "./saludos.js";

// temprano(); 
// tarde(); 
// noche(); 

// console.log("Olis");
//2) Modulos Nativos De Node JS. 
//Estos son los que vienen por defecto con la instalacion de Node JS. Y ya tienen las funciones que nos permiten resolver tareas. 

//Lo mas comunes: 
//fs: nos permite trabajar con un sistema de archivos. 
//http: la usamos para crear servidores web. 
//path: para trabajar con rutas de archivos. 
//crypto: me permite encriptar datos. 
//timers: para trabajar con tareas asincrónicas. 
//console: para mostrar mensajes por consola. 

//import fs from "fs"; 

//console.log(fs);

//3) Modulos de Terceros. 
//Nos permite descargar trabajos de otras personas. Modulos, bibliotecas, frameworks, etc. 
//Generalmente vamos a instalar con el comando: npm install <nombre>


// const suma = require("tinkiwinkisuma");

// console.log(suma(15,5,20,10));

console.log("Olis, ke asen?, todo bien?, tengo hambre "); 


