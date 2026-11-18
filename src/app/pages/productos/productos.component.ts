import { Component, signal } from '@angular/core';
import { Producto } from '../../models/producto';
import { TarjetaProducto } from '../../components/tarjeta-producto/tarjeta-producto';
import { DetalleCompra } from '../../components/detalle-compra/detalle-compra';

@Component({
  imports: [TarjetaProducto, DetalleCompra],
  selector: 'app-productos',
  styleUrl: './productos.component.css',
  templateUrl: './productos.component.html',
})
export class ProductosComponent {
   mensaje = signal('');
   cantidad = signal(0);
   total = signal(0);

   productos : Producto[] =
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

  agregarCompra(producto : Producto) : void {
    console.log(producto);
    if (producto.disponibilidad) {
        this.cantidad.set(this.cantidad() + 1);
        this.total.set(this.total() + producto.precio);
        this.mensaje.set('agregaste:' + producto.nombre);
        console.log(this.cantidad());
    }
  }

  vaciarDesdeApp() : void {
    console.log("esta vacio");
  }
}
