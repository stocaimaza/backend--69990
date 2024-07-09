import mongoose from "mongoose";
import paginate from 'mongoose-paginate-v2';

const orderSchema = new mongoose.Schema({
    nombre: String,
    tam: String, 
    precio: Number, 
    cantidad: Number
});

//Aca agregamos el plugin: 
orderSchema.plugin(paginate);

const OrderModel = mongoose.model("orders", orderSchema); 

export default OrderModel;