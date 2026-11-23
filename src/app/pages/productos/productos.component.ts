import { Component, inject, signal } from '@angular/core';
import { Producto } from '../../models/producto';
import { TarjetaProducto } from '../../components/tarjeta-producto/tarjeta-producto';
import { DetalleCompra } from '../../components/detalle-compra/detalle-compra';
import { CatalogoService } from '../../services/catalogo.service';
import { ComprasService } from '../../services/compras.service';
import { ComprasDBService } from '../../services/index-db.service';

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

  private readonly indexedDBService = inject(ComprasDBService);

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
  // indexdb
  async mostrarUltimaCompra(): Promise<void>{
    try {
      const total = await this.indexedDBService.obtenerUltimoDato();
      if (total === null){
        this.mensaje.set('NO hay productos');
      }
      this.mensaje.set(`La ultima copra es: ${total?.toFixed(2)} `)
    } catch (error) {
        console.log(error);
    }
  }
}
