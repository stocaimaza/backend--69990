/** CLASE 17 - MONGO AVANZADO 2 **/

//Temas de hoy: 

//1) Agregaciones
//2) Paginacion

//Instalamos: npm i express express-handlebars mongoose

import mongoose from "mongoose";
import OrderModel from "./models/order.model.js";

const main = async () => {
    mongoose.connect("mongodb+srv://coderhouse69990:coderhouse@cluster0.k8gmho6.mongodb.net/Pizzalandia?retryWrites=true&w=majority&appName=Cluster0")

    //Ejercicio 1: Calculamos el total de las pizzas vendidas por sabor en tamaño familiar: 

    // const resultado = await OrderModel.aggregate([
    //     {
    //         $match: {
    //             tam: "familiar"
    //         }
    //     },
    //     {
    //         $group: {
    //             _id: "$nombre",
    //             total: {
    //                 $sum: "$cantidad"
    //             }
    //         }
    //     }, 
    //     //EJERCICIO 2: 
    //     {
    //         $sort: {
    //             total: -1
    //             //1: ascendente
    //             //-1: descendente
    //         }
    //     },
    //     //Guardamos los resultados en "reports"
    //     {
    //         $group: {
    //             _id: 10,
    //             orders: {
    //                 $push: "$$ROOT"
    //                 //Si yo quiero que los resultados se guarden en un array puedo usar $push
    //                 //ROOT hace referencia al documento actual. 
    //             }
    //         }
    //     }, 
    //     //Una vez que agrupamos los resultados, los guardamos en una colección: 
    //     {
    //         $project: {
    //             _id: 0,
    //             orders: "$orders"
    //             //Acá le decimos que el campo "orders" va a ser igual a los resultados que guardamos en el paso anterior. 
    //         }
    //     },
    //     //Ultimo pasito, super importante: el merge
    //     {
    //         $merge: {
    //             into: "reports"
    //         }
    //     }
    // ])


    //EJERCICIO 2: PAGINACION

    const resultado = await OrderModel.paginate({}, {limit: 2, page: 4})
    console.log(resultado);

}

//main(); 


//PAGINACION: Es un proceso que consiste en dividir los resultados de una consulta en bloques de datos. 

//1) Instalamos: npm install mongoose-paginate-v2

//2) Configuramos en el model

//PRACTICAMOS CON UN SERVIDOR:

import express from "express";
import exphbs from "express-handlebars";
const app = express();
const PUERTO = 8080;

//Nos conectamos a MongoDB
mongoose.connect("mongodb+srv://coderhouse69990:coderhouse@cluster0.k8gmho6.mongodb.net/Pizzalandia?retryWrites=true&w=majority&appName=Cluster0")

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

//Handlebars
app.engine("handlebars", exphbs.engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

app.get("/pizzas", async (req, res) => {
    const page = req.query.page || 1; 
    const limit = 2; 

    try {
        const pizzasListado = await OrderModel.paginate({}, {limit, page})

        //Recuperemos el docs: 
        let arrayPizzas = pizzasListado.docs.map( pizza => {
            const {_id, ...rest} = pizza.toObject(); 
                return rest; 
        })

        res.render("pizzas", {
            pizzas: arrayPizzas,
            hasPrevPage: pizzasListado.hasPrevPage, 
            hasNextPage: pizzasListado.hasNextPage,
            prevPage: pizzasListado.prevPage,
            nextPage: pizzasListado.nextPage,
            currentPage: pizzasListado.page,
            totalPages: pizzasListado.totalPages
        })
    } catch (error) {
        console.log("Error al pedir pizzas:", error);
        res.status(500).send("Error en el servidor, nos vamos a congelar");
    }
})

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto de Mar del Plata");
})

