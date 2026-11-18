import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone:true
})
export class App {
  nombreTienda = "Tienda Mary";
  // // protected readonly title = signal('tecnologias-internet');
  // asignatura : string = 'Tecnologias en Internet';
  // estudiante : string = 'Pedrito';
  // edad : number = 15;
  // inscrito: boolean = true;
  // mensaje = signal('');
    //  para el component 2
  // cantidad = signal(0);
  // total = signal(0);

  // productos : Producto[] =
  // [
  //  {
  //     id: 1,
  //     nombre: "teclado",
  //     precio: 130,
  //     disponibilidad: true
  //   },
  //   {
  //     id: 2,
  //     nombre: "mouse",
  //     precio: 50,
  //     disponibilidad: true
  //   },
  //   {
  //     id: 3,
  //     nombre: "monitor",
  //     precio: 30,
  //     disponibilidad: true
  //   }

  // ];




  // agregarCompra(producto : Producto) : void {
  //   console.log(producto);
  //   if (producto.disponibilidad) {
  //       this.cantidad.set(this.cantidad() + 1);
  //       this.total.set(this.total() + producto.precio);
  //       this.mensaje.set('agregaste:' + producto.nombre);
  //       console.log(this.cantidad());
  //   }
  // }

  // vaciarDesdeApp() : void {
  //   console.log("esta vacio");
  // }
}