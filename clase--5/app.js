/** CLASE 5 - MANEJO DE ARCHIVOS **/

//Temas: 

//1) File System
//2) Manejo de archivos de forma sincrónica
//3) Manejo de archivos con callbacks
//4) Manejo de archivos con promesas
//5) Manejo de datos complejos
//6) Presentamos un desafio NO ENTREGABLE. 


//1) File System es un manejador de archivos que viene ya incorporado con Node JS. 
//Me permite realizar operaciones de Crear, Leer, Actualizar y Borrar documentos (CRUD). 

//Hoy practicamos con Common JS. Las proximas clases ES Modules. 

//1 Paso -  me tengo que importar el módulo. 

const fs = require("fs");

//console.log(typeof fs);

////////////////////////////////////////////////////////////////////

//TRABAJAMOS DE FORMA SINCRÓNICA

const rutaSin = "./ejemplo-sin.txt";

//A) Crear un archivo:

fs.writeFileSync(rutaSin, "Hola, aguante taiiiiiieeeres");

//B) Leer un archivo: 

let contenido = fs.readFileSync(rutaSin,"utf-8");
//Primer parametro, el path (la ubicacion del archivo), el segudo el tipo de codificacion. 
//console.log(contenido);

//¿Que pasa si el archivo no existe? 

// let contenido2 = fs.readFileSync("./firulais.txt", "utf-8");
// console.log(contenido2);

//Para evitar que el sistema se rompa, podemos verificar previamente: 

// if ( fs.existsSync("./firulais.txt")){
//     let respuesta = fs.readFileSync("./firulais.txt", "utf-8");
//     console.log(respuesta);
// } else {
//     console.log("No existe el archivo, te equivocaste al escribir, vete a diseño de indumentaria!!!");
// }

//C) Actualizar contenido: 

fs.writeFileSync(rutaSin, "Hola, actualizamos el archivo pisando la informacion");
//Para actualizar simplemente puedo pisar la data. 

//Agregamos mas contenido al final: 
fs.appendFileSync(rutaSin, " y este es un contenido que agregamos despues. Ya casi es viernes"); 

//D) Eliminar un archivo: 

fs.unlinkSync(rutaSin);

/////////////////////////////////////////////////////////////////////////////////////

//TRABAJANDO CON CALLBACKS

const conCall = "./ejemplo-con.txt"; 

fs.writeFile(conCall, "Nuevo archivo, ejemplo con callbacks", (error) => {
    //El tercer parametro es el cb, que pregunta si hubo un error. 
    if ( error ) return console.log("No pudimos crear el archivo"); 

    //Leemos el archivo: 
    fs.readFile(conCall, "utf-8", (error, contenido) => {
        if (error ) return console.log("No podemos leer el archivo");
        //console.log(contenido);
        //Aca el callback tiene dos parametros, uno el error y el segundo el contenido. 

        //Y si queremos agregar mas info: 
        fs.appendFile(conCall, " aca agregamos mas contenido", (error) => {
            if ( error) return console.log(" No se puede agregar mas contenido");

            //Y si lo quiero eliminar? 

            fs.unlink(conCall, (error) => {
                if ( error ) return console.log( "No podemos eliminarlo, es la venganza de CHAT GTP3" );
            })
        })
    })
})

//TRABAJANDO CON PROMESAS: 
//Para poder trabajar con promesas, tenemos que usar la propiedad "promises" del módulo fs: 

const textoPromises = "./texto-pro.txt";

const operacionesAsincronicas = async () => {

    //Crear un archivo: 
    await fs.promises.writeFile(textoPromises, "Nuevo archivo! Ahora trabajando con Promesas!");

    //Leer un archivo: 
    let respuesta = await fs.promises.readFile(textoPromises, "utf-8");
    console.log(respuesta);

    //Agregamos contenido adicional:
    await fs.promises.appendFile(textoPromises, " agregamos este texto, aguante las promesas!");

    //Releer: 
    respuesta = await fs.promises.readFile(textoPromises, "utf-8");
    console.log(respuesta);

    //Lo eliminamos:
    await fs.promises.unlink(textoPromises);

}

//No se olviden de invocar a la función: 
operacionesAsincronicas();


//5) Manejo de datos complejos: 

//Desarrollamos un array de usuarios: 

const arrayUsuarios = [
    {nombre: "Pepe", apellido: "Argento", edad: 44},
    {nombre: "Moni", apellido: "Argento", edad: 38},
    {nombre: "Paola", apellido: "Argento", edad: 17},
    {nombre: "Coky", apellido: "Argento", edad: 16},
    {nombre: "Fatiga", apellido: "Argento", edad: 7},
]

const archivoArgento = "./archivo-argento.json";

const guardarArchivo = async (array) => {
    await fs.promises.writeFile(archivoArgento, JSON.stringify(array, null, 2));
}

guardarArchivo(arrayUsuarios);

//Como leemos estos archivos: 

const leerArchivos = async () => {
    const respuesta = await fs.promises.readFile(archivoArgento, "utf-8");
    const arrayNuevoUsuarios = JSON.parse(respuesta);
    console.log(arrayNuevoUsuarios);
}

leerArchivos();


