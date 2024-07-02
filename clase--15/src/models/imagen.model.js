import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    description: String, 
    filename: String, 
    path: String
})

const ImagenModel = mongoose.model("imagenes", schema);

export default ImagenModel;