import { Router } from "express"; 
import {promises as fs} from "fs";
const router = Router(); 
import ImagenModel from "../models/imagen.model.js";

//Ruta raiz de la aplicación

router.get("/", async (req, res) => {
    const imagenes = await ImagenModel.find().lean(); 
    //Una forma de evitar esta medida de seguridad de EXP-HAN es utilizar el método lean(). 
    //Otra forma es mapearlo. 

    res.render("index", {imagenes:imagenes});

})

//Ruta para acceder al formulario de carga

router.get("/upload", (req, res) => {
    res.render("upload");
})

//Ruta "Post Upload" para subir imagenes con multer: 

router.post("/upload", async (req, res) => {
    try {
        const imagen = new ImagenModel(); 
        imagen.title = req.body.title;
        imagen.description = req.body.description; 
        imagen.filename = req.file.filename; 
        imagen.path = "/img/" + req.file.filename; 

        //Guardamos el objeto en la base de datos: 
        await imagen.save(); 

        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error en el servidor, nos vamos a engripar"); 
    }
})

//Ruta para eliminar una imagen: 

router.get("/image/:id/delete", async (req, res) => {
    const {id} = req.params; 
    //let id = req.params.id;
    const imagen = await ImagenModel.findByIdAndDelete(id); 
    await fs.unlink("./src/public" + imagen.path);
    res.redirect("/");
})

export default router;