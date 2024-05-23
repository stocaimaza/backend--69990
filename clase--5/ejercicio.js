//2 Ejercicio Backend I:

//No se olviden de traer el modulo de fs con la propiedad "promises":
const fs = require("fs").promises; 


class ProductManager {
    static ultId = 0; 
    //Variable estatica que almacena el ultimo ID usado. 

    //Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
    constructor(path) {
        this.products = [];
        this.path = path;
    }

    //Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
    async addProduct(title, description, price, img, code, stock) {
        // Validamos que se agregaron todos los campos. 
        if(!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios"); 
            return;
        }

        // Validar que no se repita el campo “code” 
        if(this.products.some(item => item.code === code)) {
            console.log("El code debe ser unico");
            return; 
        }

        //Creamos el nuevo objeto: 

        const nuevoProducto = {
            id: ++ProductManager.ultId,
            title, 
            description, 
            price,
            img,
            code,
            stock
        };

        //Lo agrego al array: 
        this.products.push(nuevoProducto);
        
        //Nuevo pasito: lo guardo en el archivo:
        await this.guardarArchivo(this.products);

    }

    //Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
    async getProducts() {
        let arrayProductos = await this.leerArchivo(); 
        return arrayProductos; 
    }

    //Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
    getProductById(id) {
        const producto = this.products.find(item => item.id === id);

        if (!producto) {
            console.error("Not Found");
        } else {
            console.log("El producto buscado:", producto);
        }
    }

    //Métodos auxiliares para guardarArchivo y leerArchivo: 
    async guardarArchivo(arrayProductos) {
        try {
            await fs.writeFile(this.path, JSON.stringify(arrayProductos, null, 2));
        } catch (error) {
            console.log("Error al guardar el archivo: ", error);
        }
    }

    async leerArchivo() {
        try {
            const respuesta = await fs.readFile(this.path, "utf-8");
            const array = JSON.parse(respuesta);
            return array; 

        } catch (error) {
            console.log("Error al leer el archivo: ", error);
        }
    }
}

//Testing: 

//1) Se creará una instancia de la clase “ProductManager”

const manager = new ProductManager("./productos.json"); 

//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []


const agregarProducto = async () => {
    await manager.addProduct("Francia", "este es un nuevo producto test", 200, "Sin imagen", "abc124", 25);
}



agregarProducto(); 

const retornarProductos = async () => {
    let respuesta = await manager.getProducts();
    console.log(respuesta);
}

retornarProductos(); 

//3) Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE






//manager.addProduct("Francia", "este es un nuevo producto test", 200, "Sin imagen", "abc124", 25);


//4) Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

//console.log(manager.getProducts());

//5) Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

//manager.addProduct("Fideos", "este es un nuevo producto test", 200, "Sin imagen", "abc124", 40);

//6) Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

//manager.getProductById(200);