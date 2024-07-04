import mongoose from "mongoose";

const schema = new mongoose.Schema({
    dias: [], 
    nombre: {
        type: String, 
        index:true
    }, 
    horario: String, 
    numeroComision: String
})

const CursoModel = mongoose.model("cursos", schema); 

export default CursoModel;