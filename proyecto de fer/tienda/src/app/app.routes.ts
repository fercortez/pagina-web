import { Routes } from '@angular/router';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

export const routes: Routes = [
{ path: 'inicio', component: InicioComponent},
{ path: 'productos', component: ProductosComponent},
{ path: 'ofertas', component: OfertasComponent},
{ path: 'contacto', component: ContactoComponent},
{ path: 'nosotros', component: NosotrosComponent},
{ path: 'carrito', component: CarritoComponent},
{ path: '', redirectTo: 'inicio', pathMatch: 'full'},
{ path: '**', redirectTo: 'inicio'},

];
