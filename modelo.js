import { Producto } from "./productos.js"
/**
 * Clase del Modelo
 */
export class Modelo{

    constructor(){

        this.productos = []
        this.carrito = []
        this.cargar()
        
    }

    cargar(){

        this.productos[0] = new Producto('Producto 1', 11.11, 'img1.jpg')
        this.productos[1] = new Producto('Producto 2', 22.22, 'img2.jpg')
        this.productos[2] = new Producto('Producto 3', 33.33, 'img3.jpg')
        this.productos[3] = new Producto('Producto 4', 44.44, 'img4.jpg')

    }

    getProductos(){

        return this.productos
    }
}