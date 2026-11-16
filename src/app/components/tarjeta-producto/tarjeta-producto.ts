import { Component, input, output } from '@angular/core';
import { Producto } from '../../app';

@Component({
  imports: [],
  selector: 'app-tarjeta-producto',
  styleUrl: './tarjeta-producto.css',
  templateUrl: './tarjeta-producto.html',
})
export class TarjetaProducto {
  producto = input.required<Producto>();
  agregar = output<Producto>();

  agregarProducto() : void {
    const seleccionado = this.producto();
    if (seleccionado.disponibilidad){
      this.agregar.emit(seleccionado);
    }
  }

}
