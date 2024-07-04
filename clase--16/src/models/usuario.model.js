import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nombre: {
        type: String, 
        //index: true
    },
    apellido: {
        type: String
    },
    email: {
        type: String,
        unique: true, 
        required: true
    }, 
    edad: {
        type: Number,
        //index: true
    }
})

const UserModel = mongoose.model("usuarios", schema);

export default UserModel;