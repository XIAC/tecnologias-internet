import { Injectable } from "@angular/core";
import { Producto } from "../models/producto";

@Injectable({
    providedIn:'root'
})
export class CatalogoService{
   private readonly productos : Producto[] =
        [
            {
            id: 1,
            nombre: "teclado",
            precio: 130,
            disponibilidad: true
            },
            {
            id: 2,
            nombre: "mouse",
            precio: 50,
            disponibilidad: true
            },
            {
            id: 3,
            nombre: "monitor",
            precio: 30,
            disponibilidad: true
            }

        ];

    obtenerProductos(): readonly Producto[]{
        return this.productos;
    }
}