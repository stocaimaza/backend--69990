//TIPOS DE DATOS EN JS. 

//DATO = es la unidad minima de informacion. 

//1. Tipo Primitivos: 

//1.1 Tipo Number: 
1321641351
1235.351

//Datos numericos que pueden ser enteros o decimales. A los decimales tambien los llamamos "punto flotante".  Este tipo de dato esta destinado para operaciones matemáticas. 

//1.2 Tipo String: 

"Esto es un string"
'Esto es otro string'
"54654545"

//Los strings son cadenas de texto. Se pueden escribir con comillas dobles o simples. 


//1.3 Tipo Boolean: 

true
false

//Son valores que pueden ser verdaderos o falsos. Los usamos generalmente para tomar decisiones junto a bucles/ciclos y condicionales. 

//1.4 Tipo Undefined: 

undefined

//"indefinido". 
//Es un valor que se le asigna a una variable cuando no se le ha asignado ningun valor. 

//1.5 Tipo NULL

null

//Es una valor que se le asigna a una variable cuando queremos que no tenga ningun valor. Es la ausencia intencional de un valor. 


//VARIABLES: 

//Una variable es un espacio de memoria que almacena información importante para la aplicación y como su nombre lo indica puede modificarse en el tiempo. 

//Declaramos variables con la palabra reservada "let"

let alumno;


//Asignarle un valor a la variable: 

alumno = true;

console.log(alumno);

//Inicializar una varible

let apellido = "Lopez";
console.log(apellido);

//Tenemos un operador para verificar que tipo de dato tiene almacenado una variable: 
console.log( typeof alumno);

//Constantes: son variables que no pueden cambiar su valor. Se declaran con la palabra reservada "const". Una vez que se le asigna un valor este no puede cambiar. 

const nacimiento = 1987;

//nacimiento = 1997;
console.log(nacimiento);

/////////////////////////////////////////////////////////

//2 Tipo Objeto: 
//Tenemos los objetos, los arrays y funciones. 

//2.1 Tipo Array: 

let unArray = [1, 2, 3, 4, 5];

//Es una colección de datos. Y super importante! Puede ser de cualquier tipo de dato:

let array = [1, "hola", true, null, undefined, [1, 2, 3], "firulais"];

console.log(array);

//2.2  Tipo Objeto: 

let cliente = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
}

console.log(cliente);

console.log(cliente.nombre);
console.log(cliente["edad"]);


//Ciclos:  nos permiten ejecutar un bloque de codigo varias veces. 

//Ciclos de conteo: FOR

for(let i = 0; i < 10; i++) {
    console.log(i);
}

//El ciclo for tiene tres partes: 
//desde:  donde se inicializa el contador. 
//hasta: donde se evalua la condicion. 
//actualizacion: se actualiza el contador. 

//Ciclos condicionales. 

//While: Me permite ejecutar un bloque de código mientras se cumpla una condición. 

let nombre = prompt("Ingrese su nombre (Para salir ingrese: salir)"); 

while(nombre !== "salir") {
    console.log("Hola " + nombre);
    nombre = prompt("Ingrese su nombre (Para salir ingrese: salir)"); 
}

//Do While: El ciclo do while es similar al while, pero se ejecuta una vez al menos antes de evaluar la condicion. 

