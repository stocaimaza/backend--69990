//CLASE INTEGRADORA: 
//ACTIVIDAD: Generar un Pinterest, almacenando nuestros usuarios en MongoDB

////////////////////////////////////////////////////////////////////////////

import express from "express"; 
const app = express(); 
const PUERTO = 8080
import exphbs from "express-handlebars"; 
import multer from "multer";
import "./database.js";
import imagenRouter from "./routes/imagen.router.js";

//Middleware 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(express.static("./src/public"));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/img");
    }, 
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
app.use(multer({storage}).single("image"));




//Express- Handlebars
app.engine("handlebars", exphbs.engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 


//Rutas 

app.use("/", imagenRouter);

app.listen(PUERTO, () => {
    console.log(`Cobraras en dolares en el puerto: ${PUERTO}`); 
})