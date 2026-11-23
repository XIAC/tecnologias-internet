import { Component, inject, signal } from '@angular/core';
import { Producto } from '../../models/producto';
import { TarjetaProducto } from '../../components/tarjeta-producto/tarjeta-producto';
import { DetalleCompra } from '../../components/detalle-compra/detalle-compra';
import { CatalogoService } from '../../services/catalogo.service';
import { ComprasService } from '../../services/compras.service';

@Component({
  imports: [TarjetaProducto, DetalleCompra],
  selector: 'app-productos',
  styleUrl: './productos.component.css',
  templateUrl: './productos.component.html',
})
export class ProductosComponent {
  mensaje = signal('');
  private readonly comprasService = inject(ComprasService);
   readonly productos : readonly Producto[];
   readonly cantidad = this.comprasService.cantidad;
   readonly total = this.comprasService.total;
  constructor(catalogoService : CatalogoService){
    this.productos = catalogoService.obtenerProductos();
  }

  agregarCompra(producto : Producto) : void {
    if (producto.disponibilidad){
      this.comprasService.agregarCompra(producto);
      this.mensaje.set(`Agregaste este producto: ${producto.nombre}`)
    }
  }

  vaciar() : void {
    this.comprasService.vaciarDesdeApp();
    this.mensaje.set('La compra esta vacia')

  }
}
