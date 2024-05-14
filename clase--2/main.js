//Clase 2 - Nuevas Funcionalidades de EcmaScript: 

//ES6 (2015): 

//Desestructuración: nos permite extraer datos de un array u objeto de manera mas sencilla y legible. 

const pelicula = {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    genero: "Drama",
    lanzamiento: 1972
}

//Antes del ES6: 
let tituloPeli = pelicula.titulo;
console.log(tituloPeli);

//Con ES6:

let { director, lanzamiento, pepe} = pelicula;

console.log(director);

lanzamiento = 1987;

console.log(lanzamiento);
console.log(pelicula);
console.log(pepe);

//Ejemplo con Arrays: 

const numeros = [1, 2, 3, 4, 5];

//Antes de ES6. 
console.log("Ejemplo con Arrays");

let uno = numeros[0];
let dos = numeros[1];
console.log(uno, dos);

//Con ES6: 

let [ , indiceUno, indiceDos] = numeros;

console.log( indiceUno, indiceDos );

///////////////////////////////////////////////////////////////

//Valores por defecto: nos permite asignar valores por defecto a los parametros de una funcion.

function saludar(nombre = "Invitado") {
    console.log(`Hola ${nombre}!`);
}

//saludar("Guillote");
saludar();

//Trabajo por modulos: 

import productosMarolio from "./datos.js";
console.log(productosMarolio);


//Clases: 

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy el ${this.nombre} de ${this.apellido}`);
    }
}

const personita = new Persona("Doble", "LuisMiguel", 50); 
console.log(personita);

personita.saludar();

class Estudiante extends Persona {
    //Si quiero que promedio sea una variable privada, tengo que agregarle el # antes del nombre de la variable. 
    #promedio;
    constructor(nombre, apellido, edad, carrera, promedio) {
        super(nombre, apellido, edad);
        this.carrera = carrera; 
        this.#promedio = promedio; 
    }

    //Y para trabajar con esas variables privads, tengo que crear un metodo que me permita acceder a ellas: 

    get getPromedio() {
        return this.#promedio;
    }
}

const estudiante = new Estudiante("Coky", "Argento", 19, "Ingenieria en Sistemas", 4);

console.log(estudiante.promedio);

//Usando el método correcto si puedo ver la variable privada: 
console.log(estudiante.getPromedio);

//ES7 (2016):
//Dos grandes cambios: Operador de potencia y el método includes. 

//Antes de ES7:

let base = 4; 
let exponente = 3;

let resultado = Math.pow(base, exponente);
console.log(resultado);

//Con ES7: 

let resultado2 = base ** exponente; 
console.log(resultado2);

//Pero.. el includes si lo usamos bastante. 
//Me permite saber si hay algun elemento buscado dentro de un array o string. 
//Retorna un valor booleado, segun corresponda. 

const losSimpsons = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];

//Ante de ES7:

console.log(losSimpsons.indexOf("Ayudante de Santa") > -1 ) //True

//Con ES7:

console.log(losSimpsons.includes("Maggie"));

//ES8 (2017)
//Async Await (lo vemos la clase que viene)
//Object.entries Object.keys Object.values

//Object.values: devuelve un array con las propiedades de un objeto. 

const empleado = {
    nombre: "Pepe", 
    apellido: "Argento",
    puesto: "Vendedor de Zapatos"
}

let resultadoEjemploValues = Object.values(empleado);
console.log(resultadoEjemploValues);

//Object.keys: devuelve un arreglo con las claves de un objeto. 

let resultadoEjemploKeys = Object.keys(empleado);
console.log(resultadoEjemploKeys);

//Object.entries: devuelve un array de array, donde cada sub-array contiene la clave y valor. 

let resultadoEjemploEntries = Object.entries(empleado); 
console.log(resultadoEjemploEntries);

//ES9: (2018)
//Llego el finally ( lo vemos la clase  que viene)
//Spread Operator: Nos permite desparramar los elementos de un iterable (array u objeto) de forma individual en otro contexto. Que ese contexto puede ser un array, una función, un objeto. 

let arrayNombres = ["TinkiWinki", "Dipsi", "Lala", "Po"];

console.log(...arrayNombres);

//Es casi lo mismo que hacer esto: 

console.log(arrayNombres[0], arrayNombres[1], arrayNombres[2], arrayNombres[3]);

//COPIA DE OBJETOS: 

const coky = {
    nombre: "Coky",
    apellido: "Argento",
    edad: 17
}

const coky2 = coky; 
//Esto no lo vamos a hacer porque estamos igualando al referencia en memoria. 
coky.edad = 38;

console.log(coky);
console.log(coky2);

//La forma correcta de copiar objetos: 
const coky3 = {...coky};

// Concatenar Arrays: 

let numeritos = [1, 2, 3, 4, 5];
let numeritos2 = [6, 7, 8, 9, 10]; 

let numeritosConcatenados = [...numeritos2, ...numeritos];
console.log(numeritosConcatenados);

//ES11 (2020):
//Acá llega el nullish y las variables privadas de clases. 

//Nullish Coalescing: Nos permite tener un valor por defecto cuando me envian null o undefined. 

let cliente = null;

console.log(cliente ?? "Invitado ");

