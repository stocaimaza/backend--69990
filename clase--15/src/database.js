import mongoose from "mongoose";

mongoose.connect("tubd")
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.log("Tenemos un error, pasate a diseño de interiores: ", error))