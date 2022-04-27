import {VistaProductos} from './vistaproductos.js'
import { VistaCarrito } from './vistacarrito.js'
import {Modelo} from './modelo.js'
/**
 * Clase controlador
 */
class Tienda{

    constructor(){

        window.onload = this.iniciar.bind(this)
    }

    iniciar(){

        this.modelo = new Modelo()
        this.vistaProductos = new VistaProductos(this, this.modelo.getProductos())
        this.vistaCarrito = new VistaCarrito(this)

        this.vistaProductos.mostrar(true)
    }

    verCarrito(){

        this.vistaProductos.mostrar(false)
        this.vistaCarrito.mostrar(true)
    }

    verProductos(){

        this.vistaCarrito.mostrar(false)
        this.vistaProductos.mostrar(true)
    }
}

new Tienda()