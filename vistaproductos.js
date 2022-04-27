export class VistaProductos{

    constructor(controlador, productos){

        this.controlador = controlador
        //Captura de eventos
        document.getElementById('verCarrito').onclick = this.verCarrito.bind(this)
        this.cargarProductos(productos)
    }

    mostrar(ver){

        if(ver){

            divProducto.style.display = 'block'
        }else{

            divProducto.style.display = 'none'
        }
    }

    verCarrito(){

        //Validación.....
        this.controlador.verCarrito()
    }

    cargarProductos(productos){
        /**
         *
         * <div class="producto">
            <p>Nombre producto</p>
            <button>Añadir</button>
            </div>
         */
        for (let producto of productos) {

            let div = document.createElement('div')
            divProducto.appendChild(div)
            div.classList.add('producto')
            let p = document.createElement('p')
            div.appendChild(p)
            p.textContent = producto.nombre

            let p2 = document.createElement('p')
            div.appendChild(p2)
            p2.textContent = producto.precio

            let p3 = document.createElement('p')
            div.appendChild(p3)
            p3.textContent = producto.imagen

            let button = document.createElement('button')
            div.appendChild(button)
            button.textContent = 'Añadir'
            button.onclick = this.anadirCarrito.bind(this, producto)
        }
    }

    anadirCarrito(producto){

        this.controlador.anadirCarrito(producto)
    }
}