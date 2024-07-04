import mongoose from "mongoose";

//Schema de Alumno:

const schema = new mongoose.Schema({
    nombre: {
        type: String, 
        index: true
    }, 
    apellido: String, 
    email: {
        type: String, 
        unique: true, 
        required: true
    }, 
    edad: Number, 
    //cursos: []
    cursos: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "cursos"
    }]
})

//Middleware PRE de Mongoose: 

schema.pre("findOne", function(next) {
    this.populate("cursos");
    next(); 
})

//Model: 

const AlumnoModel = mongoose.model("alumnos", schema);

export default AlumnoModel;
