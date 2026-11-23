import { computed, Injectable, signal } from "@angular/core";
import { Producto } from "../models/producto";

@Injectable({
    providedIn:'root'
})
export class ComprasService {
    private readonly comprasseleccionadas = signal<Producto[]>([]);
    readonly cantidad = computed(() => this.comprasseleccionadas().length) ;
    readonly total = computed(() => {
        let suma = 0;
        for (const p of  this.comprasseleccionadas()){
            suma += p.precio;
        }
        return suma;
    }) ;

     agregarCompra(producto : Producto) : void {
        console.log(producto);
        if (producto.disponibilidad) {
            this.comprasseleccionadas.update(p => [...p, producto ]);
        }
    }

    vaciarDesdeApp() : void {
        this.comprasseleccionadas.set([]);
    }
}