const temprano = () => {
    console.log("Buenos dias");
}

const tarde = () => {
    console.log("Buenas tardes"); 
}

const noche = () => {
    console.log("Buenas noches"); 
}

//La forma antigua se llama CommonJS:

// module.exports = {
//     temprano,
//     tarde,
//     noche
// }
//Estoy exportando un objeto que adentro tiene las 3 funciones de saludo. 

//Ahora lo voy a exportar con ES Modules: 

export {temprano, tarde, noche};

//No se olviden de agregar el "type":"module" en el package.json.

