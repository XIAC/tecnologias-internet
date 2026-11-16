import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-detalle-compra',
  styleUrl: './detalle-compra.css',
  templateUrl: './detalle-compra.html',
})
export class DetalleCompra {
  cantidad = input<number>(0);
  total = input<number>(0);
  limpiar = output<void>();

  vaciar(): void {
    console.log("ingrso a vaciar");
    this.limpiar.emit();
  }
}
