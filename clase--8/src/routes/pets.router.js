import { Router } from "express";
const router = Router(); 

//Array de Mascotas
const pets = []; 


router.get("/", (req, res) => {
    res.json(pets);
})

.post("/", (req, res) => {
    const nuevaMascota = req.body;
    pets.push(nuevaMascota);
    res.send("Mascota creada correctamente");
})



export default router; 