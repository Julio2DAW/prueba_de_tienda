export class VistaCarrito{

    constructor(controlador){

        this.controlador = controlador
        //Captura de eventos
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
    }
    
    mostrar(ver){

        if(ver){

            divCarrito.style.display = 'block'
        }else{

            divCarrito.style.display = 'none'
        }
    }

    verProductos(){

        this.controlador.verProductos()
    }
}