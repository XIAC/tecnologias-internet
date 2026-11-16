import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProducto } from './components/tarjeta-producto/tarjeta-producto';
import { DetalleCompra } from './components/detalle-compra/detalle-compra';
export interface Producto {
  id : number;
  nombre : string;
  precio : number;
  disponibilidad: boolean;
}
@Component({
  imports: [TarjetaProducto, DetalleCompra],//RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // protected readonly title = signal('tecnologias-internet');
  asignatura : string = 'Tecnologias en Internet';
  estudiante : string = 'Pedrito';
  edad : number = 15;
  inscrito: boolean = true;
  mensaje = signal('');
  test : string [] = ['HOla','como', 'estas'];
    //  para el component 2
  cantidad = signal(0);
  total = signal(0);

  // producto: Producto = {
  //   nombre: 'Impresora',
  //   precio: 200,
  //   disponibilidad : true
  // };

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

  asistencia() : void {
    this.mensaje.set(
      `${this.estudiante} no asistio a clases`
    );
  }



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