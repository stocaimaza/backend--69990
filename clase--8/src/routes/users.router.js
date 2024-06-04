import { Router } from "express";
const router = Router(); 

//Array
const users = [];


router.get("/", (req, res) => {
    res.json(users);
})

router.post("/", (req, res) => {
    const nuevoUsuario = req.body;
    users.push(nuevoUsuario);
    res.send("Usuario creado correctamente");
})



export default router; 