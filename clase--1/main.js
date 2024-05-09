
//Clase 1 - Principios básicos de JavaScript 

//Temas de hoy: 
//- Plantillas literales 
//- Funciones 
//- Scope
//- Closures
//- Clases y POO en JS. 

//1) Plantillas Literales: 

let mascota = "Fatiga"; 

let mascotaEdad = 5; 

console.log("Nuestro perro " + mascota + " tiene " + mascotaEdad + " años");

//Los templates strings son una forma de concatenar strings mucho más L-Gante y sencilla. 

console.log(`Nuestro perrito ${mascota} tiene ${mascotaEdad} añitos`);

//backsticks = alt + 96 
``

//Lo que hacemos acá se conoce como una interpolación de variables. 

console.log(`Ahora nuestro perrito ${mascota} tiene ${ mascotaEdad + 1}`);

//2) Funciones: 
//Son bloques de código que podemos reutilizar en nuestro programa. Es importante destacar que una función debe tener una sola responsabilidad. 

//Nos encontramos con dos tipos de funciones: 

//FUNCIONES DECLARATIVAS: 

//1 paso, las declaramos: 

function saludar(curso) {
    console.log("Hola comision " + curso);
}

//2 paso, las invocamos
saludar("backendo");

//¿Se puede invocar una funcion antes de su declaracion?
//Efectivamente, esto se puede hacer gracias al "hoisting". 
//Esto es un proceso interno que realiza el lenguaje durante la lectura del código, en donde eleva las declaraciones. 
//Guarda!! (solo las declarativas!)

//FUNCIONES EXPRESIVAS: 
//Utilizan una expresión. (Recuerden que una expresion es una combinación de valores, variables y operadores que producen algun resultado.)

//Las trabajamos asignandolas a variables. 

//Función anónima:
let nuevoSaludo = function(){
    console.log("Olis, k asen?");
}

nuevoSaludo();

//En ES6 año 2015, llega la función flechiña. 
//Son una forma resumida de escribir funciones expresivas. 

let ultimoSaludo = (curso) => {
    console.log("Saluditos " + curso)
}

ultimoSaludo("curso de backend");

let saluditoResumido = persona => console.log("Olis " + persona);

saluditoResumido("Adrian");

//Scope: 
//El scope es el alcance que tienen las variables dentro de nuestro programacion. 

//Tenemos dos tipos de scope: 
// scope global: las variables declaradas en este scope puede ser accedidas desde cualquier parte del programa. 
// scope local: las variables declaradas en este scope solo pueden ser accedidas desde el bloque en el que fueron declaradas. 


let global = 2024;

function saludosAdrian() {
    console.log("Hola Adrian, estamos en el año " + global);
    let curso = "Backend";
}

saludosAdrian(); 
//console.log("Curso de " + curso);

//CLOSURES: 

//Los cierres o clausulas en JS es un concepto que se refiere a la capacidad de una función anidada de acceder a las variables de su función padre, incluso cuando la funcion padre ya termino su ejecucion. 

//funcion padre
//funcion anidada
//varible

function padre() {
    let deuda = 1500000; 
    function anidada() {
        console.log(deuda);
    }
    return anidada;
}

let clausula = padre(); 
clausula(); 

//console.log(deuda);


//CLASES: son moldes que nos permiten crear objetos con caracteristicas similares (ejemplo la torta y sus moldes ). 

//Ejemplo creamos la clase persona: 

class Persona {
    //Podemos implementar una función constructora, que se ejecuta cuando creamos un objeto de esta clase. 
    constructor(nombre, edad) {
        this.nombre = nombre; 
        this.edad = edad; 
        //la palabra reservada "this" hace referencia al objeto que se esta creando. 
        //Cada vez que creamos un objeto a partir de una clase decimos que estamos creando una instancia de la misma. 
    }

    saludar() {
        console.log("Hola, soy  " + this.nombre);
    }

    despedir() {
        console.log("Hola, me fui, y soy " + this.nombre );
    }
    //Método estatico: son metodos que se ejecutan sin necesidad de crear una instancia de la clase

    static especie() {
        console.log("Soy un ser humano");
    }

    //Propiedad estatica: 

    static planeta = "Tierra";

}

//¿Como puedo invocar un método estatico? 

Persona.especie();

//Propiedad estatica: 

console.log(Persona.planeta);


let tinki = new Persona("TinkiWinki", 50); 
console.log(tinki);

let dipsi = new Persona("Dipsi", 55); 
console.log(dipsi);

tinki.saludar();
dipsi.saludar();

let po = {
    nombre: "Po",
    edad: 60
}

//Vamos a crear una clase que herede de la clase Persona: 

class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
        super(nombre, edad); 
        this.sueldo = sueldo;
        //Super significa que estamos llamando al constructor de la clase Padre. 
    }
}

let pepe = new Empleado("Pepe Argento", 55, 1500000);

console.log(pepe);

//JS es un lenguaje basado en prototipos: 
//Un prototipo es un objeto del cual otro objeto hereda sus propiedades y métodos. 

const animal = {
    especie: "Animal",
    comer: function() {
        console.log("Comiendo");
    }
}

const gato = {
    raza: "Gato",
    maullar: function() {
        console.log("Miau");
    }
}

gato.__proto__ = animal; 
//Guarda! Esto es solo educativo, no lo usamos en un proyecto real. 


gato.comer(); 




