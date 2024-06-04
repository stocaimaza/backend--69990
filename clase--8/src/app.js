/** CLASE 8 - ROUTER Y MULTER **/

//Temas de hoy: 
//1) Express Router
//2) Servicios de archivos estaticos
//3) Middleware 
//4) Los Tipos de Middleware
//5) Multer 
//6) Primer Pre Entrega

//Levantamos un servidor: 

import express from "express";
const app = express(); 
const PUERTO = 8080; 
import petsRouter from "./routes/pets.router.js";
import usersRouter from "./routes/users.router.js";

//Recuerden que como necesito recibir datos en JSON puedo usar esta linea de codigo: 
app.use(express.json());

app.use(express.urlencoded({extended:true}));
//Se encarga de analizar los datos en la URL y los convierte en un objeto de JS accesible a traves de req.body. 


//Rutas 
// app.get("/", (req, res) => {
//     res.send("Olis, bienvenidos a la App de mascotas");
// })

app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);



//Dejamos escuchando el servidor: 
app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

//2) Servicio de archivos estáticos: 
//Express nos permite tener archivos estaticos, es decir archivos que no cambian en tiempo de ejecucion. Estos pueden ser HTML, CSS, JS, img, videos, pitufos.. etc. 


//La carpetita public va a guardar todo nuestro material estatico. 

//Le tengo que decir a express que hay una carpeta estatica: 
//app.use(express.static("./src/public"));

//Si queremos que la carpeta public se llame de otra forma podemos usar un prefijo virtual: 

app.use("/static", express.static("./src/public"));

//¿Que ventajas me da? 
// - Organizarme mejor con las rutas
// - Me da una capa de seguridad adicional. 

//Middleware de Terceros: Multer
//Herramienta que me permite cargar archivos a mi servidor. 

//1) Instalamos: npm i multer
//2) Lo importamos: 

import multer from "multer";

//3) Configuramos multer: 

//Configuramos un storage: 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/public/img");
        //Acá le digo donde se van a guardar los archivos. 
    }, 
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        //Mantengo el nombre original
    }
})


const upload = multer({storage});

//Vamos a crear una ruta que me permita cargar un archivo: 

app.post("/upload", upload.array("imagen") ,(req, res) => {
    //Necesito que sea POST porque tengo que cargar un recurso al servidor. 
    res.send("Upload!");
})