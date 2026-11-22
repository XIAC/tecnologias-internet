import { Component, input, output } from '@angular/core';
import { Producto } from '../../models/producto';
import { CurrencyPipe, NgClass, PercentPipe } from '@angular/common';


@Component({
  imports: [CurrencyPipe, NgClass, PercentPipe],
  selector: 'app-tarjeta-producto',
  styleUrl: './tarjeta-producto.css',
  templateUrl: './tarjeta-producto.html',
})
export class TarjetaProducto {
  producto = input.required<Producto>();
  agregar = output<Producto>();
  readonly descuento = 0.15;
  agregarProducto() : void {
    const seleccionado = this.producto();
    if (seleccionado.disponibilidad){
      this.agregar.emit(seleccionado);
    }
  }

}
