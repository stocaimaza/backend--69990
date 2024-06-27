import {Router} from "express"; 
const router = Router();

//Importamos el modelo: 
import pacientesModel from "../models/pacientes.model.js";

//Rutas: 

//GET: Obtenemos el listado de todos mis pacientes

router.get("/", async (req, res) => {
    try {
        const pacientes = await pacientesModel.find(); 
        console.log(pacientes);
        res.send(pacientes); 
    } catch (error) {
        res.status(500).send("Error interno del servidor, vamos a engriparnos"); 
    }
})

//POST: subimos un paciente por Postman

router.post("/", async (req, res) => {
    try {
        //Tomamos los datos del body y creamos un nuevo documento. 
        const paciente = new pacientesModel(req.body); 

        //Lo guardamos en la base de datos: 
        await paciente.save(); 
        
        res.status(201).send("Paciente registrado correctamente"); 
    } catch (error) {
        res.status(500).send("Error interno del servidor, vamos a engriparnos"); 
    }
})

//PUT

router.put("/:id", async (req, res) => {
    try {
        const paciente = await pacientesModel.findByIdAndUpdate(req.params.id, req.body);
        if(!paciente) {
            return res.status(404).send("paciente no encontrado"); 
        }
        res.status(200).send("Paciente modificado"); 
    } catch (error) {
        res.status(500).send("Error interno del servidor, vamos a engriparnos"); 
    }
})

//DELETE

router.delete("/:id", async (req, res) => {
    try {
        const paciente = await pacientesModel.findByIdAndDelete(req.params.id); 
        // if(!paciente) {
        //     return res.status(404).send("paciente no encontrado");
        // }
        res.status(200).send("Borrado!");
    } catch (error) {
        res.status(500).send("Error interno del servidor, vamos a engriparnos"); 
    }
})


export default router; 