const socket = io();
//Generamos una instancia de Socket.io del lado del cliente. 

let usuario;
const chatBox = document.getElementById("chatBox");

//Utilizamos Sweet Alert 2 para generar un mensaje de Bienvenida. 

//Swal es un objeto global de la libreria y para configurar cada alerta usabamos el método "Fire".

Swal.fire({
    title: "Identificate",
    input: "text",
    text: "Ingresa un usuario para identificarte en el Chat",
    inputValidator: (value) => {
        return !value && "Necesitas escribir un nombre para continuar";
    },
    allowOutsideClick: false
}).then(result => {
    usuario = result.value
})


chatBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
            //Trim nos permite sacar los espacios en blanco del principio y el final de un string. Si el mensaje tiene mas de 0 caracteres, lo enviamos al servidor. 
            socket.emit("mensaje", { usuario: usuario, mensaje: chatBox.value })
            chatBox.value = "";
        }
    }
})

//Listener de Mensajes: 

socket.on("mensajesLogs", (data) => {

    const messagesLogs = document.getElementById("messagesLogs");

    let mensajes = "";

    data.forEach(mensaje => {
        mensajes += `
                    <div class ="message">
                        <span class = "user" > ${mensaje.usuario} </span>
                        <div class = "text" > ${mensaje.mensaje} </div>
                    </div> `
    })
    messagesLogs.innerHTML = mensajes;
})