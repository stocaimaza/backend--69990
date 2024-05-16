/** CLASE 3 - PROGRAMACION SINCRONICA Y ASINCRONICA **/

//Temas de hoy: 

//1) Enfoque sincrónico vs asincrónico
//2) Callback
//3) Promesas
//4) Async Await

/////////////////////////////////////////////////////////////////

//Programación sincrónica: las tareas se ejecutan secuencialmente en el orden en que se escriben. 

console.log("Primero");
console.log("Segundo");
console.log("Tercero");

//Cada terea se ejecuta en orden y bloquea la ejecución de la siguiente hasta que se complete. 

//Ejemplo con funciones: 

function a() {
    console.log("1");
    b();
}

function b() {
    console.log("2");
    c();
}

function c() {
    console.log("3");
}

a();

//Programación asincronica: 

//La programacion asincronica es un enfoque o estilo de programación en el que las tareas se ejecutan en segundo plano y no bloquean la ejecucion de la siguiente. 

//Ejemplo de donde lo podemos usar: cuando hacemos una petición a una API, consultamos una base de datos, realizamos un Login. etc. 

setTimeout( () => {
    console.log("Primer Tarea");
}, 1000)

console.log("Segunda tarea, ahh re loco!");

//2) Callbacks: 

//¿Que es una función callback? Es una función que pasamos como argumento a otra función. 


//Ejemplo en código: 

function mostrarResultado(dato) {
    console.log("El resultado es el siguiente: " + dato);
}

function suma(numeroA, numeroB, callback) {
    let resultado = numeroA + numeroB;
    callback(resultado);
}

suma(10, 5, mostrarResultado);

//Ejemplo de callback con funcion map: 

//La función map es una función de orden superior que recibe como argumento/parametro a una funcion callback. 

let numeros = [1, 2, 3, 4, 5]; 

let numerosDuplicados = numeros.map(numero => numero * 2);

console.log(numerosDuplicados);


//¿Como hariamos de forma casera esta funcion ma?

function mapear(array, callback) {
    let arrayNuevo = [];

    for( let i = 0; i < array.length; i++ ) {
        arrayNuevo.push(callback(array[i]));
    } 
    return arrayNuevo;
}

//Callback: 
function duplicar(numero) {
    return numero * 2;
}

console.log("Nueva función map caserita: " + mapear(numeros, duplicar));

//3) Promesas: 
//Las promesas son objetos que representan un hecho eventual a futuro. 
//Las vamos a utilizar en operaciones asincrónicas que pueden resultar exitosas o fallidas. 

//Las promesas tienen 3 estados: 

//Pendiente: (pending) es el estado inicial de una promesa, todavia no se completó ni se rechazó. 
//Exitosa: (fullfilled) La operacion asincronica se completo correctamente y se resuelve la promesa. 
//Fallida: (rejected) La operacion asincronica fallo y se rechazo la promesa. 


//Creacion de promesas: 

const promesa = new Promise((resolve, reject) => {
    //Acá va el codigo que queremos ejecutar. 

    //Resolve y reject son funciones que nos provee la promesa para indicarle el estado de la misma. 
    let estado = true; 
    if(estado) {
        resolve("Exto en la promesa, me llega la camiseta firmada");
    } else {
        reject("No me llegó la camiseta, me regalaron un paco");
    }
})


//console.log(promesa);

//Métodos THEN y CATCH: 
//Estos metodos nos permiten manejar el resultado de lapromesa. Se usan concatenados. 

//THEN: recibe como argumento una función que se va a ejecutar caundo la promesa se resuelva exitosamente. 
//CATCH: recibe como argumento una función que se va a ejecutar cuando la promesa se rechace. 
//FINALLY: este se ejecuta siempre cuando la promesa se rechace o se resuelva. 


promesa
    .then(() => console.log("Estamos ejecutando el THEN porque la promesa se resuelve"))
    .catch(() => console.log("Se cancela la navidad, no hay regalos"))
    .finally(() => console.log("Casi terminamos con la clase"))


//Ejemplo con productos: 

const productos = [
    {id: 1, nombre: "Mesa", precio: 5000},
    {id: 2, nombre: "Silla", precio: 2000 },
    {id: 3, nombre: "Vino", precio: 10}
]


//Vamos a crear una promesa que nos retorne los productos. 

function buscarProductoPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(producto => producto.id === id);
            if( producto ) {
                resolve(producto);
            } else {
                reject("No existe el producto, vamos a morir en 7 dias!"); 
            }
        }, 2000)
    })
}

//Llamamos a la promesa: 

buscarProductoPorId(4)
    .then((producto) => console.log(producto))
    .catch((error) => console.log(error))



//4) Async Await
//Son palabritas reservadas que nos permiten trabajar con promesas de una forma mas simple. 

// async function buscarProductoPorIdAsync(id) {
//     const producto = await buscarProductoPorId(id);
//     console.log(producto);
// }

buscarProductoPorIdAsync(1);

//Generalmente se usa en conjunto con un bloque try catch 

async function buscarProductoPorIdAsync(id) {
    try {
        const producto = await buscarProductoPorId(id);
        console.log(producto);
    } catch (error) {
        console.log("Tenemos un error, vamos a morir: ", error);
    }
}