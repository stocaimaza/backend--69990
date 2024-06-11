console.log("Olis, vemos si funciona?");

/*Generamos una instancia de Socket.io, ahora desde el lado del cliente*/

const socket = io(); 

//Enviamos un saludito al servidor: 

socket.emit("mensaje", "Hola Mundo, te escribo desde el cliente");

//Recibimos el "saludito" del servidor. 

socket.on("saludito", (data) => {
    console.log(data);
})


//Recibimos un array de usuarios y lo mostramos por pantalla:

socket.on("usuarios", (data) => {
    const listaUsuarios = document.getElementById("listaUsuarios"); 

    data.forEach( usuario => {
        listaUsuarios.innerHTML += `<li> ${usuario.nombre} - ${usuario.apellido} </li>`
    })
})