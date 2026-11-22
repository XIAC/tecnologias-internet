import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ComprasDBService {
    obtenerUltimoDato() : Promise<number | null> {
        return new Promise(( req, res) => {
            // dejamos abierta nuestra base de datos
            var solicitud = indexedDB.open("TecnologiasDB", 2);
            solicitud.onupgradeneeded = function (event) {
                var db = solicitud.result;
                // Crea un almacén de objetos (objectStore) para esta base de datos
                db.createObjectStore("compras", { keyPath: "id" });
                
                const pruebas = solicitud.transaction?.objectStore('compras');
                pruebas?.put({ id: 1, cantidad:10, total:100});
                pruebas?.put({ id: 2, cantidad:5, total:60});
            };

            solicitud.onsuccess = function (event) {
                var db = solicitud.result;
                const transaccion = db.transaction('compras', 'readonly')
                const compras = transaccion.objectStore('compras');
                const consulta = compras.get(1);
                transaccion.oncomplete = function (event) {
                    const compra = consulta.result;
                    db.close();
                    req(compra.total);
                };
            };
        }
    
    );

        
    }
}