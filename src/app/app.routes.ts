import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'inicio',
        pathMatch: 'full'
    },
    {
         path: 'inicio', 
         component: InicioComponent,
         title: 'INICIO DEL SISTEMA'
    },
    {
         path: 'productos', 
         component: ProductosComponent,
         title: 'PRODUCTOS'
    },
    {
         path: 'contacto', 
         component: ContactoComponent,
         title: 'CONTACTO'
    },
    {
        path:'**',
        redirectTo: 'inicio'
    }
];
